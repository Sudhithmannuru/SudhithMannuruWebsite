"use client";

import { siteConfig, socialLinks } from "@/data/site";
import { Reveal, SectionHeading } from "@/components/ui/Reveal";
import { externalRel } from "@/lib/utils";
import { Check, Copy } from "lucide-react";
import { FormEvent, useState } from "react";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [error, setError] = useState("");

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(data.get("name") ?? ""),
          email: String(data.get("email") ?? ""),
          message: String(data.get("message") ?? ""),
          website: String(data.get("website") ?? ""),
        }),
      });
      if (response.status === 404) {
        throw new Error("NOT_DEPLOYED");
      }
      const result = (await response.json()) as { error?: string };
      if (!response.ok) {
        throw new Error(result.error || "The message could not be sent.");
      }
      setStatus("sent");
      form.reset();
    } catch (cause) {
      if (cause instanceof Error && cause.message === "NOT_DEPLOYED") {
        const fallback = await fetch(
          `https://formsubmit.co/ajax/${siteConfig.email}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              name: String(data.get("name") ?? ""),
              email: String(data.get("email") ?? ""),
              message: String(data.get("message") ?? ""),
              _subject: `Portfolio message from ${String(data.get("name") ?? "")}`,
              _template: "table",
              _captcha: "false",
            }),
          },
        );
        if (!fallback.ok) {
          setStatus("error");
          setError("The message could not be sent.");
          return;
        }
        setStatus("sent");
        form.reset();
        return;
      }
      setStatus("error");
      setError(
        cause instanceof Error
          ? cause.message
          : "The message could not be sent.",
      );
    }
  };

  return (
    <section id="contact" className="section-pad py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1fr]">
        <div>
          <SectionHeading kicker="Contact" title="Let’s build something meaningful." />
          <Reveal>
            <p className="mt-6 max-w-md text-base leading-relaxed text-[var(--fg-muted)]">
              For projects, research, or a conversation about building with more care.
              {siteConfig.emailIsPlaceholder
                ? " The email below is a placeholder until a public inbox is published."
                : ""}
            </p>
            <button
              type="button"
              onClick={copyEmail}
              className="btn-secondary mt-6"
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              {copied ? "Email copied" : siteConfig.email}
            </button>
            <ul className="mt-8 flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    {...externalRel()}
                    aria-label={`${link.label} (opens in a new tab)`}
                    className="btn-secondary !px-4 !py-2"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
        <Reveal>
          <form
            onSubmit={onSubmit}
            className="glass rounded-[32px] p-6 sm:p-8"
          >
            <div className="space-y-5">
              <label className="sr-only">
                Website
                <input
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm">Name</span>
                <input
                  required
                  name="name"
                  autoComplete="name"
                  className="w-full rounded-2xl border border-[var(--line)] bg-[var(--bg)] px-4 py-3 text-base outline-none transition-colors focus:border-[var(--color-blue)]"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm">Email</span>
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  className="w-full rounded-2xl border border-[var(--line)] bg-[var(--bg)] px-4 py-3 text-base outline-none transition-colors focus:border-[var(--color-blue)]"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm">Message</span>
                <textarea
                  required
                  name="message"
                  minLength={8}
                  rows={5}
                  className="w-full resize-y rounded-2xl border border-[var(--line)] bg-[var(--bg)] px-4 py-3 text-base outline-none transition-colors focus:border-[var(--color-blue)]"
                />
              </label>
            </div>
            {error ? (
              <p className="mt-4 text-sm text-red-600 dark:text-red-400">{error}</p>
            ) : null}
            {status === "sent" ? (
              <p className="mt-4 text-sm text-[var(--fg-muted)]">
                Message sent to {siteConfig.email}. The first time, Gmail may
                get a confirmation from FormSubmit — check spam and click it so
                later messages arrive.
              </p>
            ) : null}
            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-primary mt-6 w-full disabled:opacity-60"
            >
              {status === "sending"
                ? "Sending…"
                : status === "sent"
                  ? "Send another"
                  : "Send message"}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
