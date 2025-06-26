import React from "react";

const ExploreCard = ({ expert }) => {
  return (
    <div className="bg-white dark:bg-primaryDarkSection-100 shadow-lg rounded-lg p-6 flex flex-col md:flex-row gap-4">
      <div className="w-32 h-32 mx-auto md:mx-0 rounded-full overflow-hidden border-4 border-green-500">
        <img src={expert.image} alt={expert.name} className="w-full h-full object-cover" />
      </div>

      <div className="flex-1">
        <h3 className="text-2xl font-semibold text-green-800 mb-2">{expert.name}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{expert.description}</p>
        <div className="grid grid-cols-2 gap-3 text-sm text-gray-700 dark:text-gray-200">
          <p><span className="font-medium">Expertise:</span> {expert.expertise}</p>
          <p><span className="font-medium">Experience:</span> {expert.experience}</p>
          <p><span className="font-medium">Age:</span> {expert.age}</p>
          <p><span className="font-medium">Gender:</span> {expert.gender}</p>
          <p><span className="font-medium">Status:</span> {expert.status}</p>
          <p><span className="font-medium">Shared Tips:</span> {expert.totalSharedTips}</p>
        </div>
      </div>
    </div>
  );
};

export default ExploreCard;
