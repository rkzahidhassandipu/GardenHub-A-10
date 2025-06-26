import React, { use } from "react";
import {
  MdMessage,
  MdSearch,
  MdCalendarToday,
  MdPerson,
  MdGroup,
} from "react-icons/md";
import OfferHeader from "./OfferHeader";

const Offer = ({ Offers }) => {

  const iconMap = {
    MdMessage: <MdMessage />,
    MdSearch: <MdSearch />,
    MdCalendarToday: <MdCalendarToday />,
    MdPerson: <MdPerson />,
    MdGroup: <MdGroup />,
  };
  return (
    <section className="mb-20">
      <OfferHeader />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10 p-4">
        {Offers.map((offer) => (
          <div
            key={offer.id}
            className="card dark:bg-primaryDarkSection-100 shadow-xl dark:border-gray-700 border border-gray-200"
          >
            <div className="card-body items-center text-center">
              <div className="card-actions">
                <button className="dark:bg-navActive-100 bg-over-100 text-primary-100 text-5xl p-2 rounded-full">
                  {" "}
                  {iconMap[offer.icon]}
                </button>
              </div>
              <h2 className="card-title">{offer.title}</h2>
              <p>{offer.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Offer;
