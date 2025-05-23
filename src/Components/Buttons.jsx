import React, { useState } from "react";
import Animation from "./Animation";

const Buttons = () => {
  const [activeTab, setActiveTab] = useState("Marketing");

  const tabs = [
    "Marketing",
    "Product",
    "Sales & Pre Sales",
    "Customer Success",
    "Enablement and training",
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "Marketing":
        return (
          <div className="flex h-full w-full px-0 py-6">
            <div className="w-1/2 text-left px-6">
              <h1 className="text-3xl font-bold leading-tight">
                <span className="block">Arcade</span>
                <span className="block">for marketing</span>
              </h1>

              <h3 className="text-2xl text-gray-500 leading-relaxed mt-2">
                Build compelling, on-brand demos in minutes <br />
                to drive leads, boost product adoption, and <br />
                more effectively tell your product's story.
              </h3>

              <div className="grid grid-cols-2 gap-x-8 gap-y-2 mt-6 text-lg text-gray-700">
                <span className="flex items-center gap-2">
                  ✅ <span>Chapters</span>
                </span>
                <span className="flex items-center gap-2">
                  ✅ <span>Call-to-action buttons</span>
                </span>
                <span className="flex items-center gap-2">
                  ✅ <span>Export to GIF/Video</span>
                </span>
                <span className="flex items-center gap-2">
                  ✅ <span>White-labeled Arcades</span>
                </span>
              </div>
              <div className="mt-6 text-blue-700  text-2xl">
                <button
                  className="cursor-pointer"
                  onClick={() =>
                    (window.location.href =
                      "https://www.arcade.software/solutions/marketing")
                  }
                >
                  Learn more <span className="text-2xl">&rarr;</span>
                </button>
              </div>
            </div>

            <div className="w-1/2 relative rounded-md  overflow-hidden">
              <video
                src="https://cdn.arcade.software/web-assets/brand.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
          </div>
        );
      case "Product":
        return (
          <div className="flex h-full w-full px-0 py-6">
            <div className="w-1/2 text-left px-6">
              <h1 className="text-3xl font-bold leading-tight">
                <span className="block">Arcade</span>
                <span className="block">for products</span>
              </h1>

              <h3 className="text-2xl text-gray-500 leading-relaxed mt-2">
                Demos built for fast-paced product teams looking to drive
                adoption, gather feedback quickly, and iterate on concepts.
              </h3>

              <div className="grid grid-cols-2 gap-x-8 gap-y-2 mt-6 text-lg text-gray-700">
                <span className="flex items-center gap-2">
                  ✅ <span>Forms</span>
                </span>
                <span className="flex items-center gap-2">
                  ✅ <span>Product analytics</span>
                </span>
                <span className="flex items-center gap-2">
                  ✅ <span>Integrations</span>
                </span>
                <span className="flex items-center gap-2">
                  ✅ <span>Branching</span>
                </span>
              </div>
              <div className="mt-6 text-blue-700 text-2xl">
                <button
                  className="cursor-pointer"
                  onClick={() =>
                    (window.location.href =
                      "https://www.arcade.software/solutions/product")
                  }
                >
                  Learn more <span className="text-2xl">&rarr;</span>
                </button>
              </div>
            </div>

            <div className="w-1/2 relative rounded-md  overflow-hidden">
              <video
                src="https://cdn.arcade.software/web-assets/form-product.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
          </div>
        );
      case "Sales & Pre Sales":
        return (
          <div className="flex h-full w-full px-0 py-6">
            <div className="w-1/2 text-left px-6">
              <h1 className="text-3xl font-bold leading-tight">
                <span className="block">Arcade</span>
                <span className="block">sales & pre-sales</span>
              </h1>

              <h3 className="text-2xl text-gray-500 leading-relaxed mt-2">
                Create engaging, personalized demos in minutes to win buyers
                early, showcase your product, and accelerate sales cycles.
              </h3>

              <div className="grid grid-cols-2 gap-x-8 gap-y-2 mt-6 text-lg text-gray-700">
                <span className="flex items-center gap-2">
                  ✅ <span>Collections</span>
                </span>
                <span className="flex items-center gap-2">
                  ✅ <span>Custom links</span>
                </span>
                <span className="flex items-center gap-2">
                  ✅ <span>Camera recording</span>
                </span>
              </div>
              <div className="mt-6 text-blue-700  text-2xl">
                <button
                  className="cursor-pointer"
                  onClick={() =>
                    (window.location.href =
                      "https://www.arcade.software/solutions/sales")
                  }
                >
                  Learn more <span className="text-2xl">&rarr;</span>
                </button>
              </div>
            </div>

            <div className="w-1/2 relative rounded-md  overflow-hidden">
              <video
                src="https://cdn.arcade.software/web-assets/collections.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
          </div>
        );
      case "Customer Success":
        return (
          <div className="flex h-full w-full px-0 py-6">
            <div className="w-1/2 text-left px-6">
              <h1 className="text-3xl font-bold leading-tight">
                <span className="block">Arcade</span>
                <span className="block">customer success</span>
              </h1>

              <h3 className="text-2xl text-gray-500 leading-relaxed mt-2">
                Scale your impact through engaging, informative content designed
                to educate customers, increase product adoption, and build
                customer loyalty.
              </h3>

              <div className="grid grid-cols-2 gap-x-8 gap-y-2 mt-6 text-lg text-gray-700">
                <span className="flex items-center gap-2">
                  ✅ <span>Custom variables</span>
                </span>
                <span className="flex items-center gap-2">
                  ✅ <span>Branching</span>
                </span>
                <span className="flex items-center gap-2">
                  ✅ <span>Chapters</span>
                </span>
              </div>
              <div className="mt-6 text-blue-700  text-2xl">
                <button
                  className="cursor-pointer"
                  onClick={() =>
                    (window.location.href =
                      "https://www.arcade.software/solutions/sales")
                  }
                >
                  Learn more <span className="text-2xl">&rarr;</span>
                </button>
              </div>
            </div>

            <div className="w-1/2 relative rounded-md  overflow-hidden">
              <video
                src="https://cdn.arcade.software/web-assets/variables-alt.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
          </div>
        );
      case "Enablement and training":
        return (
          <div className="flex h-full w-full px-0 py-6">
            <div className="w-1/2 text-left px-6">
              <h1 className="text-3xl font-bold leading-tight">
                <span className="block">Arcade</span>
                <span className="block">enablement & training</span>
              </h1>

              <h3 className="text-2xl text-gray-500 leading-relaxed mt-2">
                Save time, energy, and resources on content creation. Easily
                create demos and learn from how your audience engages to quickly
                iterate and improve.
              </h3>

              <div className="grid grid-cols-2 gap-x-8 gap-y-2 mt-6 text-lg text-gray-700">
                <span className="flex items-center gap-2">
                  ✅ <span>Camera recording</span>
                </span>
                <span className="flex items-center gap-2">
                  ✅ <span>Synthetic voiceover</span>
                </span>
                <span className="flex items-center gap-2">
                  ✅ <span>Hotspots and Callouts</span>
                </span>
                <span className="flex items-center gap-2">
                  ✅ <span>Collections</span>
                </span>
              </div>
              <div className="mt-6 text-blue-700  text-2xl">
                <button
                  className="cursor-pointer"
                  onClick={() =>
                    (window.location.href =
                      "https://www.arcade.software/solutions/product")
                  }
                >
                  Learn more <span className="text-2xl">&rarr;</span>
                </button>
              </div>
            </div>

            <div className="w-1/2 relative rounded-md  overflow-hidden">
              <video
                src="https://cdn.arcade.software/web-assets/face-bubble.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="w-full py-8 px-4 bg-gray-200">
        <div className="flex flex-wrap justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-md font-medium transition-all duration-200 ${
                activeTab === tab
                  ? "bg-white text-black"
                  : "bg-gray-300 hover:bg-white text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mt-6 mx-auto w-2/3 h-[40rem]  text-center text-lg text-gray-800 font-medium rounded-md flex items-center justify-center">
          {renderContent()}
        </div>
      </div>
      <Animation />
    </>
  );
};

export default Buttons;
