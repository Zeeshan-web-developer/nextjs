import Image from "next/image"
import { Metadata } from "next"
import { Inter } from "next/font/google"
import styles from "./page.module.css"
const inter = Inter({ subsets: ["latin"] })
import Users from "./componets/Users"

async function getAllUsers() {
  try {
    const res = await fetch("http://localhost:3000/api/users/", {
      cache: "no-store",
    })
    let data = await res.json()
    console.log(data)
    return data
  } catch (error) {
    console.log({ error })
  }
}
export async function generateMetadata() {
  return { title: "Home" }
}
export default async function Home() {
  const allUsers = await getAllUsers()
  console.log({ allUsers })
  return (
    <>
      <main className={styles.main}>
        <h2>Home</h2>
        <Users {...{ allUsers }} />
      </main>
    </>
  )
}
