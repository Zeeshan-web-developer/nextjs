export async function GET(request) {
  return new Response("Hello, Next.js!")
}

export async function GET() {
  return new Response("api first")
}

export async function GET() {
  return new Response("bug-fix branch")
}
