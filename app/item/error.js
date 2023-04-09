"use client" // Error components must be Client components

import { useEffect } from "react"

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div>
      <div class='flex items-center justify-center w-full min-h-screen'>
        <button onClick={() => reset()}>Try again</button>
        <div>
          <h2 className=''>Something went wrong!</h2>
        </div>
      </div>
    </div>
  )
}
