import React from 'react'
import FeatureHeader from './FeaturedHeader'
import FeatureProfile from './FeatureProfile'

const Featured = ({FeaturedData}) => {
  return (
    <div className='mb-20'>
      <FeatureHeader />
    <FeatureProfile FeaturedData={FeaturedData} />
    </div>
  )
}

export default Featured
