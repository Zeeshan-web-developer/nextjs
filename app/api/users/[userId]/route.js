import { NextResponse } from "next/server"
export async function GET(request, query) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get("name")
  let param = query.params
  let userId = param.userId

  console.log({ queyString: id, queryParam: userId })
  return NextResponse.json({ user: "zeeshan" })
}
