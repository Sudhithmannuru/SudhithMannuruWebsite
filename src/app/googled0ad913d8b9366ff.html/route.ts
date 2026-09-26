const BODY = "google-site-verification: googled0ad913d8b9366ff.html\n";

export function GET() {
  return new Response(BODY, {
    status: 200,
    headers: {
      "content-type": "text/html",
      "cache-control": "public, max-age=0, must-revalidate",
      "x-robots-tag": "noarchive",
    },
  });
}
