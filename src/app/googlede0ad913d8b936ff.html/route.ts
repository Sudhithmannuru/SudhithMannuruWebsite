const BODY = "google-site-verification: googlede0ad913d8b936ff.html";

export function GET() {
  return new Response(BODY, {
    status: 200,
    headers: {
      "content-type": "text/html",
      "cache-control": "public, max-age=0, must-revalidate",
    },
  });
}
