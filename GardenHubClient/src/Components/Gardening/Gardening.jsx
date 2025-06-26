import GardeningHeader from "./GardeningHeader";

const Gardening = ({ Gardening }) => {
  return (
    <div className="px-4 md:px-6 lg:px-12 py-8">
      <GardeningHeader />

      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6">
        {Gardening.map((offer) => (
          <div
            key={offer.id}
            className="card bg-white dark:bg-primaryDarkSection-100 shadow-md rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 transition-transform hover:scale-[1.02]"
          >
            <div className="card-body text-left space-y-3">
              <h2 className="card-title text-xl font-bold text-gray-800 dark:text-white">
                {offer.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">{offer.description}</p>

              <p className="text-primary-100 font-semibold hover:underline cursor-pointer">
                Learn More
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gardening;
