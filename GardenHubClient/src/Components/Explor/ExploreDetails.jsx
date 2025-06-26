import React, { use } from 'react'
import ExploreCard from './ExploreCard'

const ExploreDetails = ({FeaturedData}) => {
    const experts = use(FeaturedData)
  return (
     <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-green-700">Expert Details</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {experts.map((expert) => (
          <ExploreCard key={expert.id} expert={expert} />
        ))}
      </div>
    </div>
  )
}

export default ExploreDetails
