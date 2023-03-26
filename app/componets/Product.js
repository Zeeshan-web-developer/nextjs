"use client"
const Products = ({ products }) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
      {products?.map((product) => (
        <div
          className='bg-white rounded-lg overflow-hidden shadow-lg'
          key={product.id}
        >
          <img
            className='h-64 w-full object-cover'
            src={product.image}
            alt='Item Image'
          />
          <div className='p-4'>
            <h3 className='text-gray-700 font-semibold mb-2'>
              {product.title}
            </h3>
            <p className='text-gray-600 mb-2'>{product.description}</p>
            <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
              {product.category}
            </span>
            <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700'>
              {product.price}
            </span>
          </div>
          <div
            className='p-4 flex justify-between'
            onClick={() =>
              (window.location.href = `http://localhost:3000/item/${product.id}`)
            }
          >
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>
              View Detail
            </button>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Products
