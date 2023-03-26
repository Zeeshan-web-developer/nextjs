import Image from "next/image"
import { Metadata } from "next"
import { Inter } from "next/font/google"
import styles from "./page.module.css"
const inter = Inter({ subsets: ["latin"] })
import Product from "./componets/Product"

// async function getData() {
//   try {
//     const res = await fetch("https://fakestoreapi.com/products", {
//       cache: "no-store",
//     })
//     let data = await res.json()
//     return data
//   } catch (error) {
//     console.log({ error })
//   }
// }
export async function generateMetadata() {
  return { title: "Home" }
}
export default async function Home() {
  // const products = await getData()
  return (
    <>
      <main className={styles.main}>
        <h2>Home</h2>
        {/* <Product {...{ products }} /> */}
      </main>
    </>
  )
}
