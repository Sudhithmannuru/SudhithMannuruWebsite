"use client";

import { siteConfig, socialLinks } from "@/data/site";
import { FormEvent, useState } from "react";

type Status = "idle" | "sending" | "sent" | "activation" | "error";

export function NextStop() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const linkedin = socialLinks.find((link) => link.id === "linkedin");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    setError("");

    const body = new FormData();
    body.append("name", String(data.get("name") ?? ""));
    body.append("email", String(data.get("email") ?? ""));
    body.append("message", String(data.get("message") ?? ""));
    body.append("_subject", `Portfolio message from ${String(data.get("name") ?? "someone")}`);
    body.append("_template", "table");
    body.append("_captcha", "false");
    body.append("_replyto", String(data.get("email") ?? ""));
    const honey = String(data.get("website") ?? "");
    if (honey) body.append("_honey", honey);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${siteConfig.email}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body,
      });
      const result = (await response.json().catch(() => null)) as {
        success?: string | boolean;
        message?: string;
      } | null;
      const text = `${result?.message ?? ""}`.toLowerCase();
      if (text.includes("activation") || text.includes("activate")) {
        setStatus("activation");
        return;
      }
      if (!response.ok || result?.success === "false" || result?.success === false) {
        throw new Error(result?.message || "The message could not be sent.");
      }
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "The message could not be sent.");
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-[var(--sky)] py-20 sm:py-28" aria-labelledby="contact-title">
      <div className="world relative z-10 grid items-start gap-8 lg:grid-cols-[.9fr_1.1fr]">
        <div className="pt-6">
          <p className="meta">Final stop</p>
          <h2 id="contact-title" className="display mt-3 text-[clamp(3rem,7vw,6rem)]">
            Where to next?
          </h2>
          <p className="mt-4 max-w-md text-xl font-medium">
            Have a question, idea, or project worth exploring?
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn-coral" href={`mailto:${siteConfig.email}`}>
              Say hello
              <span aria-hidden>→</span>
            </a>
            {linkedin ? (
              <a className="btn-ghost" href={linkedin.href} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            ) : null}
          </div>
          <p className="mt-4 font-mono text-sm">{siteConfig.email}</p>
        </div>

        <form onSubmit={onSubmit} className="rounded-[28px] border-[2.5px] border-[var(--ink)] bg-[var(--paper)] p-5 shadow-[6px_7px_0_rgba(44,33,68,0.16)] sm:p-7">
          <p className="meta text-[var(--ocean)]">Postcard</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-bold">
              Name
              <input name="name" required className="mt-1 w-full rounded-xl border-[2.5px] border-[var(--ink)] bg-[var(--cloud)] px-3 py-3" />
            </label>
            <label className="block text-sm font-bold">
              Email
              <input name="email" type="email" required className="mt-1 w-full rounded-xl border-[2.5px] border-[var(--ink)] bg-[var(--cloud)] px-3 py-3" />
            </label>
          </div>
          <label className="mt-4 block text-sm font-bold">
            Message
            <textarea name="message" required rows={5} className="mt-1 w-full rounded-xl border-[2.5px] border-[var(--ink)] bg-[var(--cloud)] px-3 py-3" />
          </label>
          <label className="hidden" aria-hidden="true">
            Website
            <input name="website" tabIndex={-1} autoComplete="off" />
          </label>
          <button className="btn-sun mt-4" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send the postcard"}
          </button>
          {status === "sent" ? <p className="mt-3 font-semibold">Got it. I&apos;ll write back.</p> : null}
          {status === "activation" ? (
            <p className="mt-3 font-semibold">Check your inbox to confirm the first postcard, or email me directly.</p>
          ) : null}
          {status === "error" ? <p className="mt-3 font-semibold">{error}</p> : null}
        </form>
      </div>
    </section>
  );
}
