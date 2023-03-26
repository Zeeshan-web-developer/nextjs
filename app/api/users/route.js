import { NextResponse } from "next/server"
export async function GET(request, query) {
  const { searchParams } = new URL(request.url) //get query params
  const id = searchParams.get("id")
  console.log("id", id)
  return NextResponse.json({ user: "zeeshan" })
}
