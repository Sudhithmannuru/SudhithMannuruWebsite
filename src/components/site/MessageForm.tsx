"use client";

import { siteConfig } from "@/data/site";
import { FormEvent, useState } from "react";

type Status = "idle" | "sending" | "sent" | "activation" | "error";

export function MessageForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

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
    <form onSubmit={onSubmit} className="grid gap-4">
      <label className="sr-only" htmlFor="website">
        Website
      </label>
      <input id="website" name="website" tabIndex={-1} autoComplete="off" className="hidden" />
      <label className="block text-sm">
        Name
        <input
          name="name"
          required
          className="mt-1 w-full rounded-2xl border border-[var(--line)] bg-[var(--paper)] px-3 py-3"
        />
      </label>
      <label className="block text-sm">
        Email
        <input
          name="email"
          type="email"
          required
          className="mt-1 w-full rounded-2xl border border-[var(--line)] bg-[var(--paper)] px-3 py-3"
        />
      </label>
      <label className="block text-sm">
        Message
        <textarea
          name="message"
          required
          rows={5}
          className="mt-1 w-full rounded-2xl border border-[var(--line)] bg-[var(--paper)] px-3 py-3"
        />
      </label>
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-fit rounded-full bg-[var(--accent)] px-5 py-3 text-sm text-[var(--paper)] disabled:opacity-60"
      >
        {status === "sending" ? "Sending" : "Send"}
      </button>
      {status === "sent" ? <p className="text-sm text-[var(--pine)]">Sent. Thanks.</p> : null}
      {status === "activation" ? (
        <p className="text-sm text-[var(--muted)]">
          The form needs a one-time confirmation in your inbox. Email works directly in the meantime.
        </p>
      ) : null}
      {status === "error" ? <p className="text-sm text-[#8a2e24]">{error}</p> : null}
    </form>
  );
}
