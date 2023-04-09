"use client"

import Link from "next/link"

const Products = ({ allUsers }) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
      {allUsers?.map((user) => (
        <div
          className='bg-white rounded-lg overflow-hidden shadow-lg'
          key={user.id}
        >
          <img
            className='h-64 w-full object-cover'
            src={user.image}
            alt='Item Image'
          />
          <div className='p-4'>
            <h3 className='text-gray-700 font-semibold mb-2'>{user.name}</h3>
            <p className='text-gray-600 mb-2'>{user.email}</p>
          </div>
          <Link
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
            href={{
              pathname: `/item/${user._id}`,
              query: { name: user.name },
            }}
          >
            About
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Products
