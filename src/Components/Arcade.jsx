import React from "react";
import Company from "./Company";

const Arcade = () => {
  return (
    <>
      <div className="bg-[#E5E7EB] w-full flex justify-center items-center py-20">
        <div className="flex flex-col w-full items-center text-center space-y-6 px-4">
          <img
            src="https://cdn.prod.website-files.com/61d72a2cda50bc679e28766b/6673f91661f0c5a40fb38fe1_g2.svg"
            alt="G2 Logo"
            className="w-40 h-auto"
          />
          <h1 className="text-5xl font-semibold  leading-snug">
            "Arcade has made the process of creating and updating <br />
            demo experiences a breeze."
          </h1>
          <p className="text-gray-700 text-2xl">
            Growth Marketing Manager @ Wrike
          </p>
        </div>
      </div>
      <Company />
    </>
  );
};

export default Arcade;
