import React from "react";
import Buttons from "./Buttons";

const More = () => {
  const companies = [
    "Bubble",
    "Rudderstack",
    "Atlassian",
    "Zapier",
    "Quantum Metric",
    "Sentry",
    "Appfire",
    "Mux",
    "Pennylane",
    "Hack The Box",
    "Carta",
    "Glide",
    "AngelList",
    "Clearbit",
    "Traceable",
  ];

  const companiesStr = companies.join("    ");

  return (
    <>
      <div className="bg-zinc-200 w-full h-auto py-4">
        <div className="w-full h-7 flex items-center justify-center mx-auto px-4">
          <span className="text-gray-600 text-lg">More than </span>
          <span
            className="relative bg-white px-1 mx-1 rounded-md overflow-hidden inline-block"
            style={{
              position: "relative",
            }}
          >
            <span
              style={{
                content: '""',
                position: "absolute",
                top: 0,
                left: "-100%",
                width: "100%",
                height: "100%",
                background:
                  "linear-gradient(120deg, transparent 0%, rgba(99, 102, 241, 0.25) 50%, transparent 100%)",
                animation: "sparkMove 2.5s linear infinite",
                zIndex: 0,
                pointerEvents: "none",
              }}
            />
            <span
              style={{ position: "relative", zIndex: 1, fontSize: "1.125rem" }}
            >
              15k companies
            </span>
            <style>
              {`
              @keyframes sparkMove {
                0% { left: -100%; }
                100% { left: 100%; }
              }
            `}
            </style>
          </span>
          <span className="text-gray-600 text-lg">
            choose Arcade to tell better product stories
          </span>
        </div>

        <div className="relative overflow-hidden whitespace-nowrap mt-8 w-full h-20 rounded-md border-gray-300">
          <div className="pointer-events-none absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-gray-200 to-transparent z-10" />

          <div className="pointer-events-none absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-gray-200 to-transparent z-10" />

          <div
            className="inline-block whitespace-nowrap animate-scrollLeft text-2xl font-semibold"
            style={{ paddingRight: "4rem" }}
          >
            {companiesStr}
          </div>
          <div
            className="inline-block whitespace-nowrap animate-scrollLeft text-2xl font-semibold"
            style={{ paddingRight: "4rem" }}
          >
            {companiesStr}
          </div>

          <style>
            {`
      @keyframes scrollLeft {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }
      .animate-scrollLeft {
        animation: scrollLeft 20s linear infinite;
      }
    `}
          </style>
        </div>
        <div className="flex flex-col font-semibold  items-center  space-y-4 text-center px-4">
          <h1 className="text-7xl">Demos for the whole team.</h1>
          <h3 className="text-2xl max-w-xl text-gray-500 ">
            Arcade makes building, collaborating, and <br /> scaling seamless,
            no matter your team size.
          </h3>
        </div>
      </div>
      <Buttons />
    </>
  );
};

export default More;
