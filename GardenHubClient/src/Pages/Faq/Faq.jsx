import React from "react";
import Faqheader from "../../Components/Faq/Faqheader";
import Faqbody from "../../Components/Faq/Faqbody";
import LandscapeService from "../../Components/LandscapeService/LandscapeService";

const Faq = () => {
  return (
    <div>
      <Faqheader />
      <div className="w-full">
        <h1 className="text-center text-3xl font-bold my-10 text-green-600">Community Gardens FAQ</h1>
      </div>
      <Faqbody />
    </div>
  );
};

export default Faq;
