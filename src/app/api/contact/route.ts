import { siteConfig } from "@/data/site";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  let payload: {
    name?: string;
    email?: string;
    message?: string;
    website?: string;
  };

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (payload.website) {
    return NextResponse.json({ ok: true });
  }

  const name = payload.name?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const message = payload.message?.trim() ?? "";

  if (name.length < 2 || name.length > 120) {
    return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }

  if (message.length < 8 || message.length > 4000) {
    return NextResponse.json(
      { error: "Please write a slightly longer message." },
      { status: 400 },
    );
  }

  const body = new FormData();
  body.append("name", name);
  body.append("email", email);
  body.append("message", message);
  body.append("_subject", `Portfolio message from ${name}`);
  body.append("_template", "table");
  body.append("_captcha", "false");
  body.append("_replyto", email);

  const response = await fetch(`https://formsubmit.co/ajax/${siteConfig.email}`, {
    method: "POST",
    headers: { Accept: "application/json" },
    body,
  });

  const result = (await response.json().catch(() => null)) as
    | { success?: string | boolean; message?: string }
    | null;

  const text = `${result?.message ?? ""}`.toLowerCase();
  if (text.includes("activation") || text.includes("activate")) {
    return NextResponse.json({ ok: true, activation: true });
  }

  if (
    !response.ok ||
    result?.success === "false" ||
    result?.success === false
  ) {
    return NextResponse.json(
      {
        error:
          result?.message ||
          "The message could not be sent. Try emailing me directly.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
