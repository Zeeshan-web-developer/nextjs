import Image from "next/image"
import { Inter } from "next/font/google"
import styles from "./page.module.css"

const inter = Inter({ subsets: ["latin"] })

const Product = () => {
  return (
    <div class='w-full max-w-xs rounded overflow-hidden shadow-2xl p-4 '>
      <img
        class='w-full'
        src='https://media.istockphoto.com/id/497959594/photo/fresh-cakes.jpg?s=612x612&w=0&k=20&c=T1vp7QPbg6BY3GE-qwg-i_SqVpstyHBMIwnGakdTTek='
        alt='Item Image'
      />
      <div class='px-6 py-4'>
        <div class='font-bold text-xl mb-2'>Item Name</div>
        <p class='text-gray-700 text-base'>Item Description</p>
      </div>
      <div class='px-6 pt-4 pb-2'>
        <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
          #Category
        </span>
        <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700'>
          #Another Category
        </span>
      </div>
      <div class='px-6 pt-4 pb-2'>
        <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
          Price: $XX
        </span>
        <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700'>
          In Stock
        </span>
      </div>
      <div class='px-6 pt-4 pb-2'>
        <button class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <main className={styles.main}>
      <Product />
    </main>
  )
}
