import React from "react"

async function getData(id) {
  try {
    const res = await fetch(`http://localhost:3000/api/user/?id=${id}`, {
      cache: "no-store",
    })
    let data = await res.json()
    return data
  } catch (error) {
    console.error({ error })
  }
}
export async function generateMetadata({ params }) {
  let user = await getData(params.itemid)
  return {
    title: user?.name + " Profile" || "User",
    description: user?.email || "User",
  }
}
async function page({ params }) {
  let user = await getData(params.itemid)
  return (
    <div
      className=' rounded flex flex-col items-center justify-center w-full min-h-screen overflow-hidden shadow-2xl p-4 '
      key={user._id}
    >
      <img
        src={user?.image}
        alt='user Image'
        style={{
          height: "100px",
          width: "100px",
        }}
      />
      <div className='px-6 py-4'>
        <div className='font-bold text-xs mb-2 max-w-xs'>{user?.name}</div>
        <p className='text-gray-700 text-base max-w-xs'>{user?.email}</p>
      </div>
    </div>
  )
}

export default page
