import React, { useEffect, useState } from 'react';
import Slider from '../../Components/HeroSlider/Slider';
import Offer from '../../Components/Offer/Offer';
import Featured from '../../Components/Featured/Featured';
import Seasonal from '../../Components/Seasonal/Seasonal';
import Gardening from '../../Components/Gardening/Gardening';
import Community from '../../Components/Community/Community';
import TrendingTips from '../../Components/TrendingTips/TrendingTips';
import Loader from '../../Components/Loader/Loader';

const Home = () => {
  const [offers, setOffers] = useState([]);
  const [garden, setGarden] = useState([]);
  const [featuredData, setFeaturedData] = useState([]);
  const [shareTips, setShareTips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const [offersRes, gardenRes, featuredRes, tipsRes] = await Promise.all([
          fetch('./Offer.json'),
          fetch('./Gardening.json'),
          fetch('https://garden-hub-server-six.vercel.app/profile'),
          fetch('https://garden-hub-server-six.vercel.app/shareTips')
        ]);

        const [offersData, gardenData, featuredJson, tipsData] = await Promise.all([
          offersRes.json(),
          gardenRes.json(),
          featuredRes.json(),
          tipsRes.json()
        ]);

        setOffers(offersData);
        setGarden(gardenData);
        setFeaturedData(featuredJson);
        setShareTips(tipsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  if (loading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <div>
      <Slider />
      <div className='w-4/5 mx-auto'>
        <Offer Offers={offers} />
        <Featured FeaturedData={featuredData} />
        <TrendingTips shareTips={shareTips} />
        <Seasonal />
        <Gardening Gardening={garden} />
        <Community />
      </div>
    </div>
  );
};

export default Home;
