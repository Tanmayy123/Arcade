import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import Links from "./Links";
import Footer from "./Footer";

const contentData = [
  {
    img: "/images/1.png",
    link: "https://www.arcade.software/post/capchase",
    content: (
      <span className="text-3xl font-medium text-center block">
        <span className="text-5xl font-bold text-indigo-600">4x</span>
        <br />
        faster to test new products
      </span>
    ),
  },
  {
    img: "/images/2.png",
    link: "https://www.arcade.software/post/quantum-metric",
    content: (
      <span className="text-3xl font-medium text-center block">
        <span className="text-5xl font-bold text-green-600">5x</span>
        <br />
        increase in trial conversion
      </span>
    ),
  },
  {
    img: "/images/3.png",
    link: "https://www.arcade.software/post/nudge-security",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-xl font-medium">
        <div>
          <span className="text-4xl font-bold text-blue-600">2x</span>
          <br />
          Conversion rate over <br />
          "Get a demo" page
        </div>
        <div>
          <span className="text-4xl font-bold text-pink-600">5x</span>
          <br />
          More engagement vs. video
        </div>
        <div>
          <span className="text-4xl font-bold text-yellow-600">10x</span>
          <br />
          Faster to create Arcade vs. video
        </div>
      </div>
    ),
  },
];

const handleTalkToSales = () => {
  window.location.href =
    "https://www.arcade.software/talk-to-sales?utm_source=website&utm_medium=homepage";
};
const handleGetStarted = () => {
  window.open(
    "https://app.arcade.software/auth/?redirect=%2F%3F_gl%3D1*p6rqk9*_gcl_au*MTkwODU5MDU5OC4xNzQ3ODA4MDQz*_ga*MjQ0Mzk1ODg3LjE3NDc4MDgwNDM.*_ga_PL6X6J5TF3*czE3NDc4MzkwMDMkbzIkZzAkdDE3NDc4MzkwMDMkajYwJGwwJGgwJGROdGpMcmJEdlFRVng2TGVtSFNJNFdUcDlsdEI2RkRpSm1R",
    "_blank"
  );
};
const Company = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % contentData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="bg-[#E5E7EB] w-full flex justify-center items-center py-20">
        <div className="w-full max-w-[120rem] bg-[#DFE9FC] min-h-[90rem] border flex flex-col items-center overflow-hidden px-8">
          <div className="mt-16 text-center w-full max-w-7xl">
            <h1 className="text-5xl font-semibold bg-gradient-to-r from-black via-gray-800 to-black  bg-clip-text text-transparent">
              You’re in great company.
            </h1>
            <p className="mt-10 text-lg  text-gray-700">
              How our customers use Arcade to drive impact
            </p>

            <div className="mt-10 w-full flex justify-center items-center relative">
              <AnimatePresence mode="wait">
                <motion.a
                  key={contentData[current].img}
                  href={contentData[current].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="block w-full max-w-5xl"
                >
                  <img
                    src={contentData[current].img}
                    alt={`Slide ${current + 1}`}
                    className="w-full h-auto object-contain rounded-xl shadow-xl"
                  />
                </motion.a>
              </AnimatePresence>
            </div>

            <div className="mt-8 min-h-[6rem] flex justify-center items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {contentData[current].content}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-center mt-6 space-x-3">
              {contentData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    idx === current ? "bg-black scale-110" : "bg-gray-400"
                  }`}
                ></button>
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <a
                href="https://www.arcade.software/category/case-study"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-lg transition-colors duration-300"
              >
                More customer stories
              </a>
            </div>

            <div className="flex items-center justify-between mt-16 max-w-7xl w-full">
              <div className="text-6xl font-bold">
                Build demos that drive action.
              </div>

              <div className="flex space-x-6">
                <button
                  onClick={handleGetStarted}
                  className="w-full cursor-pointer sm:w-auto px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold bg-blue-700 text-white text-base sm:text-lg md:text-xl"
                >
                  Get started for free
                </button>
                <button
                  onClick={handleTalkToSales}
                  className="w-full cursor-pointer sm:w-auto px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold bg-zinc-300 text-base sm:text-lg md:text-xl"
                >
                  Talk to sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Company;
