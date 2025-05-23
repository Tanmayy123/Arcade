import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import More from "./More";
import {
  FaArrowLeft,
  FaArrowRight,
  FaRedo,
  FaLink,
  FaLanguage,
  FaVolumeMute,
  FaVolumeUp,
  FaClosedCaptioning,
  FaExpand,
  FaCompress,
} from "react-icons/fa";

const tourSteps = [
  {
    type: "image",
    src: "https://cdn.prod.website-files.com/61d72a2cda50bc679e28766b/64b5be44f9557e358e41e20c_og-arcade.jpg",
    url: "https://cdn.prod.website-files.com/61d72a2cda50bc679e28766b/64b5be44f9557e358e41e20c_og-arcade.jpg",
    description:
      "Step 1: Welcome to Arcade - Explore our interactive dashboard.",
    tooltip: "Start here: Check out the dashboard features!",
  },
  {
    type: "video",
    src: "https://cdn.arcade.software/web-assets/brand.mp4",
    url: "https://cdn.arcade.software/web-assets/brand.mp4",
    description: "Step 2: Create your first project with ease.",
    tooltip: "Click to watch how to set up a project.",
  },
  {
    type: "video",
    src: "/images/df.mp4",
    url: "/images/df.mp4",
    description: "Step 3: Share your work and collaborate with your team.",
    tooltip: "Learn how to collaborate effectively with this video.",
  },
];

const Videos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [captionsOn, setCaptionsOn] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [tourStarted, setTourStarted] = useState(false);
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const languageButtonRef = useRef(null);
  const [playbackFailed, setPlaybackFailed] = useState(false);

  const startDemo = () => {
    setTourStarted(true);
    setCurrentIndex(0);
    setIsMuted(false);
    setPlaybackFailed(false);
    if (tourSteps[0].type === "video" && videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play().catch((err) => {
        console.error("Playback error:", err);
        setPlaybackFailed(true);
      });
    }
  };

  const handlePrevious = () => {
    if (tourSteps.length === 0) return;
    const newIndex =
      currentIndex === 0 ? tourSteps.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    if (videoRef.current && tourSteps[currentIndex]?.type === "video") {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleNext = () => {
    if (tourSteps.length === 0) return;
    const newIndex =
      currentIndex === tourSteps.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    if (videoRef.current && tourSteps[currentIndex]?.type === "video") {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    if (tourSteps[newIndex].type === "video" && videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.error("Playback error:", err);
        setPlaybackFailed(true);
      });
    }
  };

  const handleReplay = () => {
    if (tourSteps.length === 0) return;
    if (tourSteps[currentIndex].type === "video" && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch((err) => {
        console.error("Playback error:", err);
        setPlaybackFailed(true);
      });
    }
  };

  const handleCopyLink = async () => {
    if (tourSteps.length === 0) {
      alert("No media available to copy link.");
      return;
    }
    try {
      await navigator.clipboard.writeText(tourSteps[currentIndex].url);
      alert("Link copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy link:", err);
      alert("Failed to copy link. Please try again.");
    }
  };

  const handleLanguage = () => {
    setShowLanguageDropdown((prev) => !prev);
  };

  const handleMute = () => {
    setIsMuted((prev) => {
      const newMutedState = !prev;
      if (videoRef.current && tourSteps[currentIndex]?.type === "video") {
        videoRef.current.muted = newMutedState;
        if (!newMutedState && videoRef.current.paused) {
          videoRef.current
            .play()
            .catch((err) => console.error("Playback error:", err));
        }
      }
      return newMutedState;
    });
  };

  const handleCaptions = () => {
    setCaptionsOn((prev) => !prev);
  };

  const handleFullscreen = async () => {
    if (!containerRef.current) return;
    if (!isFullscreen) {
      try {
        if (containerRef.current.requestFullscreen) {
          await containerRef.current.requestFullscreen();
        } else if (containerRef.current.webkitRequestFullscreen) {
          await containerRef.current.webkitRequestFullscreen();
        }
        setIsFullscreen(true);
      } catch (err) {
        console.error("Fullscreen error:", err);
        alert("Failed to enter fullscreen.");
      }
    } else {
      try {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          await document.webkitExitFullscreen();
        }
        setIsFullscreen(false);
      } catch (err) {
        console.error("Exit fullscreen error:", err);
        alert("Failed to exit fullscreen.");
      }
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        languageButtonRef.current &&
        !languageButtonRef.current.contains(event.target)
      ) {
        setShowLanguageDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(
        !!document.fullscreenElement || !!document.webkitFullscreenElement
      );
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullscreenChange
      );
    };
  }, []);

  useEffect(() => {
    if (videoRef.current && tourSteps[currentIndex]?.type === "video") {
      videoRef.current.muted = isMuted;
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch((err) => {
        console.error("Playback error:", err);
        setPlaybackFailed(true);
      });
    }
  }, [currentIndex, isMuted]);

  if (tourSteps.length === 0) {
    return (
      <div className="bg-zinc-200 min-h-screen w-full flex justify-center items-center py-8">
        <div className="bg-gray-100 w-full max-w-5xl h-auto rounded-lg flex flex-col gap-4 p-4 sm:p-6 overflow-auto">
          <p className="text-gray-500 text-center">No tour steps available.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="bg-zinc-200 min-h-screen w-full flex flex-col items-center py-8 gap-6">
        {!tourStarted && (
          <div className="text-center px-4">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
              Welcome to Arcade
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
              Discover how Arcade can transform your workflow in 3 simple steps.
            </p>
            <button
              onClick={startDemo}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-lg font-semibold"
            >
              Start Demo
            </button>
          </div>
        )}

        {tourStarted && (
          <div
            ref={containerRef}
            className="bg-gray-100 w-full max-w-5xl h-[600px] rounded-lg flex flex-col p-4 sm:p-6 relative overflow-hidden"
          >
            <div className="absolute top-4 left-4 flex gap-2 z-10">
              <div className="group relative">
                <button
                  onClick={handlePrevious}
                  className="p-3 bg-gray-300 rounded-full hover:bg-gray-400 transition disabled:opacity-50"
                  aria-label="Previous"
                  disabled={tourSteps.length <= 1}
                >
                  <FaArrowLeft size={20} />
                </button>
                <span className="absolute left-1/2 -translate-x-1/2 top-12 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  Previous
                </span>
              </div>
              <div className="group relative">
                <button
                  onClick={handleNext}
                  className="p-3 bg-gray-300 rounded-full hover:bg-gray-400 transition disabled:opacity-50"
                  aria-label="Next"
                  disabled={tourSteps.length <= 1}
                >
                  <FaArrowRight size={20} />
                </button>
                <span className="absolute left-1/2 -translate-x-1/2 top-12 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  Next
                </span>
              </div>
              <div className="group relative">
                <button
                  onClick={handleReplay}
                  className="p-3 bg-gray-300 rounded-full hover:bg-gray-400 transition disabled:opacity-50"
                  aria-label="Replay"
                  disabled={tourSteps[currentIndex].type === "image"}
                >
                  <FaRedo size={20} />
                </button>
                <span className="absolute left-1/2 -translate-x-1/2 top-12 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  Replay
                </span>
              </div>
            </div>

            <div className="absolute top-4 right-4 flex gap-2 z-10">
              <div className="group relative">
                <button
                  onClick={handleCopyLink}
                  className="p-2 bg-gray-300 rounded-full hover:bg-gray-400 transition"
                  aria-label="Copy Link"
                >
                  <FaLink size={20} />
                </button>
                <span className="absolute left-1/2 -translate-x-1/2 top-12 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  Copy Link
                </span>
              </div>
              <div className="group relative" ref={languageButtonRef}>
                <button
                  onClick={handleLanguage}
                  className="p-2 bg-gray-300 rounded-full hover:bg-gray-400 transition"
                  aria-label="Change Language"
                >
                  <FaLanguage size={20} />
                </button>
                <span className="absolute left-1/2 -translate-x-1/2 top-12 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  Change Language
                </span>
                {showLanguageDropdown && (
                  <div className="absolute right-0 top-14 bg-white shadow-lg rounded p-2 flex flex-col gap-1 z-20">
                    <button
                      className="text-sm hover:bg-gray-100 p-1"
                      onClick={() => console.log("Selected English")}
                    >
                      English
                    </button>
                    <button
                      className="text-sm hover:bg-gray-100 p-1"
                      onClick={() => console.log("Selected Spanish")}
                    >
                      Spanish
                    </button>
                    <button
                      className="text-sm hover:bg-gray-100 p-1"
                      onClick={() => console.log("Selected French")}
                    >
                      French
                    </button>
                  </div>
                )}
              </div>
              <div className="group relative">
                <button
                  onClick={handleMute}
                  className="p-2 bg-gray-300 rounded-full hover:bg-gray-400 transition disabled:opacity-50"
                  aria-label={isMuted ? "Unmute" : "Mute"}
                  disabled={tourSteps[currentIndex].type === "image"}
                >
                  {isMuted ? (
                    <FaVolumeMute size={20} />
                  ) : (
                    <FaVolumeUp size={20} />
                  )}
                </button>
                <span className="absolute left-1/2 -translate-x-1/2 top-12 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  {isMuted ? "Unmute" : "Mute"}
                </span>
              </div>
              <div className="group relative">
                <button
                  onClick={handleCaptions}
                  className="p-2 bg-gray-300 rounded-full hover:bg-gray-400 transition disabled:opacity-50"
                  aria-label={
                    captionsOn ? "Turn Off Captions" : "Turn On Captions"
                  }
                  disabled={tourSteps[currentIndex].type === "image"}
                >
                  <FaClosedCaptioning size={20} />
                </button>
                <span className="absolute left-1/2 -translate-x-1/2 top-12 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  {captionsOn ? "Turn Off Captions" : "Turn On Captions"}
                </span>
              </div>
              <div className="group relative">
                <button
                  onClick={handleFullscreen}
                  className="p-2 bg-gray-300 rounded-full hover:bg-gray-400 transition"
                  aria-label={
                    isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"
                  }
                >
                  {isFullscreen ? (
                    <FaCompress size={20} />
                  ) : (
                    <FaExpand size={20} />
                  )}
                </button>
                <span className="absolute left-1/2 -translate-x-1/2 top-12 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  {isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
                </span>
              </div>
            </div>

            <div className="relative w-full h-[450px] mt-16 overflow-hidden">
              <AnimatePresence initial={false}>
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex flex-col items-center justify-start gap-4"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                    className="absolute top-[-40px] left-4 bg-blue-500 text-white p-2 rounded shadow-lg text-sm max-w-xs z-10"
                  >
                    {tourSteps[currentIndex].tooltip}
                  </motion.div>

                  <div className="absolute left-4 top-[-10px] w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                    {currentIndex + 1}
                  </div>

                  <div className="w-full h-[400px] flex items-center justify-center">
                    {tourSteps[currentIndex].type === "video" ? (
                      <video
                        ref={videoRef}
                        src={tourSteps[currentIndex].src}
                        className="w-full h-full object-cover rounded"
                        muted={isMuted}
                        controls
                        onError={(e) => console.error("Video error:", e)}
                      />
                    ) : (
                      <img
                        src={tourSteps[currentIndex].src}
                        alt={`Step ${currentIndex + 1}`}
                        className="w-full h-full object-cover rounded"
                        onError={(e) => console.error("Image error:", e)}
                      />
                    )}
                  </div>

                  <p className="text-center text-gray-700 text-sm sm:text-base px-4">
                    {tourSteps[currentIndex].description}
                  </p>

                  {playbackFailed &&
                    tourSteps[currentIndex].type === "video" && (
                      <p className="text-red-500 text-sm">
                        Failed to play video. Please check the source or try
                        again.
                      </p>
                    )}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-center gap-2 mt-4">
              {tourSteps.map((_, index) => (
                <div
                  key={`step-${index}`}
                  aria-label={`Step ${index + 1}`}
                  role="button"
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    currentIndex === index ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
      <More />
    </>
  );
};

export default Videos;
