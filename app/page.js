import Image from "next/image"
import { Metadata } from "next"
import { Inter } from "next/font/google"
import styles from "./page.module.css"
const inter = Inter({ subsets: ["latin"] })
import Users from "./componets/Users"

async function getAllUsers() {
  try {
    const res = await fetch("http://localhost:3000/api/users", {
      cache: "no-store",
    })
    let data = await res.json()
    return data
  } catch (error) {
    console.log({ error })
  }
}
// either Static metadata
export const metadata = {
  title: "Home Page",
  description: "This is the home page",
}

// or Dynamic metadata
// export async function generateMetadata({ params }) {
//   return {
//     title: '...',
//   };
// }
export default async function Home() {
  const allUsers = await getAllUsers()
  return (
    <main className={styles.main}>
      <h2>Home</h2>
      <Users {...{ allUsers }} />
    </main>
  )
}
