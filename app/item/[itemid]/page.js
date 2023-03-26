import { data } from "autoprefixer"
import React from "react"
import Head from "next/head"

// async function getData(id) {
//   try {
//     const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
//       cache: "no-store",
//     })
//     let data = await res.json()
//     return data
//   } catch (error) {
//     console.error({ error })
//   }
// }
export async function generateMetadata({ params }) {
  return { title: params.itemid }
}
async function page({ params }) {
  // let product = await getData(params.itemid)

  return (
    <h2>Item</h2>
    // <div
    //   className=' rounded flex flex-col items-center justify-center w-full min-h-screen overflow-hidden shadow-2xl p-4 '
    //   key={product.id}
    // >
    //   <Head>
    //     <title>{product?.title}</title>
    //   </Head>
    //   <img
    //     src={product?.image}
    //     alt='Item Image'
    //     style={{
    //       height: "100px",
    //       width: "100px",
    //     }}
    //   />
    //   <div className='px-6 py-4'>
    //     <div className='font-bold text-xs mb-2 max-w-xs'>{product?.title}</div>
    //     <p className='text-gray-700 text-base max-w-xs'>
    //       {product?.description}
    //     </p>
    //   </div>
    //   <div className='px-6 pt-4 pb-2'>
    //     <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
    //       {product.category}
    //     </span>
    //   </div>
    //   <div className='px-6 pt-4 pb-2'>
    //     <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
    //       {product?.price}
    //     </span>
    //     <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700'>
    //       In Stock
    //     </span>
    //   </div>
    //   <div className='px-6 pt-4 pb-2'>
    //     <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>
    //       Add to Cart
    //     </button>
    //   </div>
    // </div>
  )
}

export default page
