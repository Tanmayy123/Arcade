import React, { useState, useEffect } from "react";
import Videos from "./Videos";

const HeroWrapper = () => {
  const phrases = ["boring to watch", "painful to make"];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [typing, setTyping] = useState(true);
  const typingSpeed = 100;
  const pauseTime = 1500;

  useEffect(() => {
    let timeout;

    if (typing) {
      if (displayText.length < phrases[phraseIndex].length) {
        timeout = setTimeout(() => {
          setDisplayText(phrases[phraseIndex].slice(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setTyping(false);
        }, pauseTime);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, typingSpeed / 2);
      } else {
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, typing, phraseIndex]);

  const handleGetStarted = () => {
    window.open(
      "https://app.arcade.software/auth/?redirect=%2F%3F_gl%3D1*p6rqk9*_gcl_au*MTkwODU5MDU5OC4xNzQ3ODA4MDQz*_ga*MjQ0Mzk1ODg3LjE3NDc4MDgwNDM.*_ga_PL6X6J5TF3*czE3NDc4MzkwMDMkbzIkZzAkdDE3NDc4MzkwMDMkajYwJGwwJGgwJGROdGpMcmJEdlFRVng2TGVtSFNJNFdUcDlsdEI2RkRpSm1R",
      "_blank"
    );
  };

  const handleTalkToSales = () => {
    window.location.href =
      "https://www.arcade.software/talk-to-sales?utm_source=website&utm_medium=homepage";
  };

  return (
    <>
      <style>
        {`
          .toBeAnimated {
            position: relative;
            overflow: hidden;
            min-width: 100%;
          }

          .toBeAnimated::before {
            content: "";
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              120deg,
              transparent 0%,
              rgba(99, 102, 241, 0.25) 50%,
              transparent 100%
            );
            animation: sparkMove 2.5s linear infinite;
            z-index: 0;
          }

          @keyframes sparkMove {
            0% {
              left: -100%;
            }
            100% {
              left: 100%;
            }
          }

          .toBeAnimated * {
            position: relative;
            z-index: 1;
          }

          .toBeAnimated-button {
            margin-left: 0.5rem;
            background-color: #6366f1;
            color: white;
            padding: 0.3rem 0.5rem;
            border: none;
            border-radius: 0.375rem;
            font-size: 0.875rem;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          .toBeAnimated-button:hover {
            background-color: #4f46e5;
          }

          @media (min-width: 640px) {
            .toBeAnimated-button {
              margin-left: 0.75rem;
              padding: 0.4rem 0.75rem;
              font-size: 0.95rem;
            }
          }

          .caret {
            display: inline-block;
            width: 1ch;
            animation: blinkCaret 1s steps(1) infinite;
            color: #6366f1;
            font-weight: 700;
            font-size: 2rem;
            margin-left: 0.1rem;
            user-select: none;
          }

          @media (min-width: 640px) {
            .caret {
              font-size: 2.5rem;
            }
          }

          @media (min-width: 768px) {
            .caret {
              font-size: 3rem;
            }
          }

          @keyframes blinkCaret {
            0%, 50% {
              opacity: 1;
            }
            50.01%, 100% {
              opacity: 0;
            }
          }

          .line {
            font-weight: 700;
            font-family: "Inter", sans-serif;
            user-select: none;
            display: inline-flex;
            align-items: center;
            min-height: 3rem;
          }

          @media (min-width: 640px) {
            .line {
              min-height: 4rem;
            }
          }

          @media (min-width: 768px) {
            .line {
              min-height: 4.5rem;
            }
          }
        `}
      </style>
      <div className="w-full sm:w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 max-w-4xl mt-16 sm:mt-20 md:mt-24 lg:mt-28 mx-auto flex flex-col gap-4 sm:gap-6 min-h-[20rem] justify-center px-4 sm:px-6">
        <div className="toBeAnimated px-3 sm:px-4 border-2 py-2 sm:py-3 rounded-xl text-sm sm:text-base md:text-lg lg:text-xl flex justify-center items-center w-full whitespace-nowrap bg-white">
          Announcing AI-Powered Content Generation
          <button className="toBeAnimated-button">Learn more</button>
        </div>

        <div className="line text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center sm:text-left font-bold text-gray-900 font-[Inter]">
          Product demos that
        </div>

        <div className="line text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center sm:text-left font-bold text-gray-900 font-[Inter] flex flex-wrap break-words">
          aren’t {displayText}
          <span className="caret">|</span>
        </div>

        <div className="text-gray-600 text-base sm:text-lg md:text-xl text-center sm:text-left">
          Create interactive demos that convert — in minutes.
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 sm:mt-4 w-full sm:w-auto items-center sm:items-start">
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
      <Videos />
    </>
  );
};

export default HeroWrapper;
