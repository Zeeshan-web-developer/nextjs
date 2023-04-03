import { NextResponse } from "next/server"
import dbConnect from "../../config/db"
import User from "../../MongoModels/userModel"

// GET ALL USERS
export async function GET(request, query) {
  await dbConnect()
  let res = await User.find()
  console.log(res)
  return NextResponse.json(res)
}
