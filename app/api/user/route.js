import { NextResponse } from "next/server"
import dbConnect from "../../config/db"
import User from "../../MongoModels/userModel"

//create user
export async function POST(request, query) {
  await dbConnect()
  const json = await request.json()
  const res = await User.create(json)
  console.log(res, json)
  return NextResponse.json(res)
}

//create user
export async function GET(request) {
  await dbConnect()
  const { searchParams } = new URL(request.url)
  const id = searchParams.get("id")
  const res = await User.findById(id)
  return NextResponse.json(res)
}

// delete user
export async function DELETE(request) {
  await dbConnect()
  const json = await request.json()
  const res = await User.findByIdAndDelete(json.id)
  console.log({ res })
  if (res) {
    return NextResponse.json("Document deleted:", res)
  } else {
    return NextResponse.json("error")
  }
}
