import React from 'react'
import { IoIosTrendingUp } from 'react-icons/io'

const TrendingTipsHeader = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-[300px]">
      <div className="mb-2">
        <IoIosTrendingUp className="text-primary-100 text-5xl" />
      </div>
      <h1 className="text-4xl font-bold mb-2">Top Trending Tips</h1>
      <p className="max-w-md text-gray-600">
       Discover the most popular and helpful advice from our community.
      </p>
    </div>
  )
}

export default TrendingTipsHeader
