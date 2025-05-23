import React from "react";
import { FaApple, FaArrowRight, FaChrome } from "react-icons/fa";
import Integrate from "./Integrate";

const Story = () => {
  return (
    <>
      <div className="w-full min-h-screen pt-36 bg-gray-200 flex flex-col items-center p-4">
        <h1 className="text-6xl text-center">
          The fastest way to tell your story.
        </h1>
        <h2 className="text-3xl text-gray-700 mt-12 text-center">
          Designed for scale, Arcade allows teams to build interactive demos{" "}
          <br />
          without relying on technical or creative resources.
        </h2>

        <div className="w-5/6 mt-24 flex gap-12">
          <div className="w-1/2">
            <h1 className="text-2xl text-blue-700">1• Record</h1>
            <h3 className="text-6xl mt-2.5 text-black font-semibold">
              No code required.
            </h3>

            <p className="text-3xl text-gray-600 mt-5">
              Record on any device using Arcade’s Chrome <br /> extension,
              desktop app, or uploaded media. <br /> Steps are automatically
              stitched together.
            </p>

            <div className="flex flex-col items-start mt-8 space-y-4">
              <button
                className="flex items-center text-blue-600 cursor-pointer gap-2"
                onClick={() =>
                  window.open(
                    "https://chromewebstore.google.com/detail/arcade/gagidkjllbdgggpboolfmmdpeagghjlm",
                    "_blank"
                  )
                }
              >
                <FaChrome size={20} />
                Install Extension
                <FaArrowRight size={18} />
              </button>

              <button
                className="flex items-center text-blue-600 cursor-pointer gap-2"
                onClick={() =>
                  window.open("https://www.arcade.software/download", "_blank")
                }
              >
                <FaApple size={20} />
                Download Desktop App
                <FaArrowRight size={18} />
              </button>
            </div>

            <p className="text-2xl text-gray-600 mt-9">
              “The simplicity is only surpassed by the result. <br /> Excellent
              product!”
            </p>
          </div>

          <div className="w-1/2 flex rounded-lg items-center justify-center">
            <video
              className="rounded-xl shadow-lg w-full h-[40rem] object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source
                src="https://cdn.arcade.software/web-assets/extension.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="w-5/6 mt-24 flex gap-12">
          <div className="w-1/2 flex rounded-lg items-center justify-center">
            <video
              className="rounded-xl shadow-lg w-full h-[40rem] object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source
                src="https://cdn.arcade.software/web-assets/edit.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="w-1/2">
            <h1 className="text-2xl text-blue-700">2• Edit</h1>
            <h3 className="text-6xl mt-2.5 text-black font-semibold">
              On-brand, everytime.
            </h3>

            <p className="text-3xl text-gray-600 mt-5">
              Our easy-to-use builder unlocks creativity <br /> while
              maintaining brand consistency. <br /> Boost engagement with
              voiceovers, <br />
              branching, and other interactive elements.
            </p>

            <div className="flex flex-col items-start mt-8 space-y-4">
              <button
                className="flex items-center text-3xl text-blue-600 cursor-pointer gap-2"
                onClick={() =>
                  window.open(
                    "https://chromewebstore.google.com/detail/arcade/gagidkjllbdgggpboolfmmdpeagghjlm",
                    "_blank"
                  )
                }
              >
                Learn More
                <FaArrowRight size={22} />
              </button>
            </div>

            <p className="text-2xl text-gray-600 mt-9">
              “We've loved using Arcade to spice up our socials and add
              interactive demos to our blog posts!”
            </p>
          </div>
        </div>

        <div className="w-5/6 mt-24 flex gap-12">
          <div className="w-1/2">
            <h1 className="text-2xl text-blue-700">3• Share and Embed</h1>
            <h3 className="text-6xl mt-2.5 text-black font-semibold">
              Distribution made easy.
            </h3>

            <p className="text-3xl text-gray-600 mt-5">
              Embed on your website, share custom <br /> links with prospects,
              or download <br /> as a GIF or video for social media.
            </p>

            <div className="flex flex-col items-start mt-8 space-y-4">
              <button
                className="flex items-center text-blue-600 cursor-pointer gap-2"
                onClick={() =>
                  window.open("https://www.arcade.software/download", "_blank")
                }
              >
                See example
                <FaArrowRight size={18} />
              </button>
            </div>

            <p className="text-2xl text-gray-600 mt-9">
              “Crazy! It's like the future of showing a demo on your website.”
            </p>
          </div>

          <div className="w-1/2 flex rounded-lg items-center justify-center">
            <video
              className="rounded-xl shadow-lg w-full h-[40rem] object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source
                src="https://cdn.arcade.software/web-assets/share.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="w-5/6 mt-24 flex gap-12">
          <div className="w-1/2 flex rounded-lg items-center justify-center">
            <video
              className="rounded-xl shadow-lg w-full h-[40rem] object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source
                src="https://cdn.arcade.software/web-assets/metrics.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="w-1/2">
            <h1 className="text-2xl text-blue-700">4• Analyze</h1>
            <h3 className="text-6xl mt-2.5 text-black font-semibold">
              Drive action.
            </h3>

            <p className="text-3xl text-gray-600 mt-5">
              Leverage analytics to identify your viewers, <br /> understand how
              they engage, and drive action.
            </p>

            <div className="flex flex-col items-start mt-8 space-y-4">
              <button
                className="flex items-center text-blue-600 cursor-pointer gap-2"
                onClick={() =>
                  window.open(
                    "https://chromewebstore.google.com/detail/arcade/gagidkjllbdgggpboolfmmdpeagghjlm",
                    "_blank"
                  )
                }
              >
                Learn More
                <FaArrowRight size={18} />
              </button>
            </div>

            <p className="text-2xl text-gray-600 mt-9">
              “Engagement is generally much higher on Arcades vs. images and
              videos, and we're able to run small tests quite easily.”
            </p>
          </div>
        </div>
      </div>
      <Integrate />
    </>
  );
};

export default Story;
