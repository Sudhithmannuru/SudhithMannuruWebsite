"use client";

import { siteConfig, socialLinks } from "@/data/site";
import { Reveal, SectionHeading } from "@/components/ui/Reveal";
import { externalRel } from "@/lib/utils";
import { Check, Copy } from "lucide-react";
import { FormEvent, useState } from "react";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = encodeURIComponent(`Note from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSent(true);
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
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-[var(--line-strong)] px-4 py-2.5 text-sm"
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
                    className="inline-flex rounded-full border border-[var(--line)] px-4 py-2 text-sm"
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
              <label className="block">
                <span className="mb-2 block text-sm">Name</span>
                <input
                  required
                  name="name"
                  autoComplete="name"
                  className="w-full rounded-2xl border border-[var(--line)] bg-transparent px-4 py-3 text-base outline-none focus:border-[var(--color-blue)]"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm">Email</span>
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  className="w-full rounded-2xl border border-[var(--line)] bg-transparent px-4 py-3 text-base outline-none focus:border-[var(--color-blue)]"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm">Message</span>
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="w-full resize-y rounded-2xl border border-[var(--line)] bg-transparent px-4 py-3 text-base outline-none focus:border-[var(--color-blue)]"
                />
              </label>
            </div>
            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-[var(--fg)] px-5 py-3 text-sm font-medium text-[var(--bg)]"
            >
              {sent ? "Opening your email app" : "Send message"}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
