import React from 'react'
import ExploreDetails from '../../Components/Explor/ExploreDetails'
import { Helmet } from 'react-helmet'


const FeaturedData = fetch('https://garden-hub-server-six.vercel.app/profile').then(res => res.json())

const Explore = () => {
  return (
    <div className='dark:bg-primaryDarkPage-100 bg-section-100'>
      <Helmet>
        <title>Explore Gardeners</title>
        <meta
          name="description"
          content="View and manage all your shared gardening tips."
        />
      </Helmet>
      <ExploreDetails FeaturedData={FeaturedData} />
    </div>
  )
}

export default Explore
