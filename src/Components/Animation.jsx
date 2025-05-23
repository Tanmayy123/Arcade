import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaPlay, FaCircle, FaClock } from "react-icons/fa";
import Story from "./Story";

const lines = [
  <>
    Pressing <DelayedPlayIcon /> play isn't enough.
  </>,
  <>
    Teams are choosing Arcade over video and seeing{" "}
    <span className="bg-white px-1 rounded">7.2X</span> higher engagement. Why?
    Videos are resource intensive,
  </>,
  <>
    hard to update <RecordingIcon /> and passive.
  </>,
  "With Arcade, the median time to publish is 6 minutes.",
  <>
    Your demo is a{" "}
    <span className="text-green-700 bg-green-200 px-1 rounded">live</span> asset
    that can be
  </>,
  "updated at any time. You don't need to be an expert",
  "to create something beautiful",
];

function DelayedPlayIcon() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 2000);
    return () => clearTimeout(timeout);
  }, []);
  return show ? (
    <FaPlay className="inline text-black ml-1 animate-pulse" />
  ) : null;
}

function RecordingIcon() {
  return (
    <span
      className="inline-block ml-1 rounded-full bg-red-600"
      style={{ width: 16, height: 16, position: "relative" }}
    >
      <span
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 8,
          height: 8,
          backgroundColor: "white",
          borderRadius: "50%",
        }}
      />
    </span>
  );
}

function ClockIcon() {
  return <FaClock className="inline text-gray-700 ml-1" size={14} />;
}

const Animation = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    lines.forEach((_, index) => {
      gsap.fromTo(
        `.line-${index}`,
        { opacity: 0, color: "#9ca3af", fontWeight: "normal" },
        {
          opacity: 1,
          color: "#111827",
          fontWeight: "bold",
          scrollTrigger: {
            trigger: `.line-${index}`,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <>
      <div className="w-full min-h-screen bg-gray-200 flex items-center justify-center p-4">
        <div className="max-w-xl text-5xl leading-snug text-left">
          {lines.map((line, index) => (
            <p
              key={index}
              className={`line-${index}`}
              style={{ marginBottom: "1rem" }}
            >
              {index === 3 ? (
                <>
                  With Arcade, the median time to publish is{" "}
                  <span>
                    6 minutes <ClockIcon />
                  </span>
                </>
              ) : (
                line
              )}
            </p>
          ))}
        </div>
      </div>
      <Story />
    </>
  );
};

export default Animation;
