import React from 'react';
import TrendingTipsHeader from './TrendingTipsHeader';
import TrendingCard from './TrendingCard';

const TrendingTips = ({ shareTips }) => {
  // Filter only public tips
  const publicTips = shareTips.filter((tip) => tip.availability === 'public');

  // 🔥 Sort by likes (descending) and pick top 6
  const selectedTips = publicTips
    .sort((a, b) => b.like - a.like)
    .slice(0, 6);

  return (
    <div className="w-full mx-auto pb-20">
      <TrendingTipsHeader />
      <div className="my-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {selectedTips.map((tip) => (
          <TrendingCard key={tip._id} tip={tip} />
        ))}
      </div>
    </div>
  );
};

export default TrendingTips;
