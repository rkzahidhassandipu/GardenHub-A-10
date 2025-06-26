import React from "react";

const FeatureProfile = ({ FeaturedData }) => {
  // Filter only active profiles
  const activeProfiles = FeaturedData.filter(
    (expert) => expert.active === "active"
  );

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {activeProfiles.map((expert) => (
  <div key={expert.id} className="relative group cursor-pointer">
    {/* Tooltip with color effect */}
    <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform duration-200
      bg-gradient-to-r from-green-400 via-blue-500 to-purple-600
      text-white text-sm rounded-md px-3 py-1 shadow-lg whitespace-nowrap pointer-events-none z-50
      animate-pulse">
      {expert.name} — {expert.expertise}
      {/* Tooltip arrow */}
      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rotate-45"></div>
    </div>

    {/* Expert Card */}
    <div
      className={`relative border border-section-100 dark:border-primaryDarkPage-100 dark:bg-primaryDarkSection-100 bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-green-400 hover:-translate-y-2 flex flex-col items-center text-center p-6 ${
        expert.active === "active" ? "bg-primary-100" : ""
      }`}
    >
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-green-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col justify-end p-4 pointer-events-none text-center">
        <h3 className="text-white text-xl font-bold w-full">{expert.name}</h3>
        <p className="text-green-200 w-full">{expert.expertise}</p>
      </div>

      {/* Card content */}
      <div className="relative z-0 flex flex-col items-center text-center space-y-3">
        <div className="w-20 h-20 rounded-full overflow-hidden border border-green-300">
          <img
            src={expert.image}
            alt={expert.name}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-lg font-semibold text-gray-800">{expert.name}</h3>
        <p className="text-green-600">{expert.expertise}</p>
        <p className="text-sm text-gray-500">{expert.experience}</p>
        <span
          className={`text-xs font-semibold px-3 py-1 rounded-full ${
            expert.active === "active"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {expert.active}
        </span>
      </div>
    </div>
  </div>
))}

      </div>
    </div>
  );
};

export default FeatureProfile;
