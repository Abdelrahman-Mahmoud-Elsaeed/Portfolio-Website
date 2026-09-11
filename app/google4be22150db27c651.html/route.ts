export const dynamic = "force-static";

const verificationContent = "google-site-verification: google4be22150db27c651.html\n";

export function GET() {
  return new Response(verificationContent, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
