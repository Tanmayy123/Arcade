import Arcade from "./Arcade";

const icons = [
  "https://cdn.prod.website-files.com/61d72a2cda50bcf02928767c/65cb7ac7c1de81ea7c57bab7_slack.svg",
  "https://cdn.prod.website-files.com/61d72a2cda50bcf02928767c/65cb7a6698c362188f28171f_posthog.svg",
  "https://cdn.prod.website-files.com/61d72a2cda50bcf02928767c/65cb799af1bb37dce4c10003_mixpanel.png",
  "https://cdn.prod.website-files.com/61d72a2cda50bcf02928767c/65cb791d020eaa9f4de4889f_hs.svg",
  "https://cdn.prod.website-files.com/61d72a2cda50bcf02928767c/65cb77e74937db91d20ca86b_ga.png",
  "https://cdn.prod.website-files.com/61d72a2cda50bcf02928767c/65cb7a02b6e3af161c01c545_sfdc.png",
  "https://cdn.prod.website-files.com/61d72a2cda50bcf02928767c/65cb700a425180b322389851_amplitude.svg",
  "https://cdn.prod.website-files.com/61d72a2cda50bcf02928767c/663ddb2a8392d4861ead82e8_phlogo.svg",
  "https://cdn.prod.website-files.com/61d72a2cda50bcf02928767c/65cb7a7cf531323a9b61303f_segment.png",
  "https://cdn.prod.website-files.com/61d72a2cda50bcf02928767c/65cb795c5a32125cf29e30ea_intercom.png",
  "https://cdn.prod.website-files.com/61d72a2cda50bcf02928767c/65cb790b8a89e8cb6b5e0a06_gtm.png",
  "https://cdn.prod.website-files.com/61d72a2cda50bcf02928767c/65cb71342883eedf51819666_clearbit.png",
];

const Integrate = () => {
  return (
    <>
      <div className="bg-[#E5E7EB] w-full flex justify-center p-4">
        <div className="bg-[#261F29] w-[120rem] flex flex-col items-center h-[60rem] text-white py-28 px-6">
          <div className="flex flex-col items-center text-center max-w-4xl">
            <h1 className="text-6xl bg-gradient-to-b from-white via-white/80 to-white/60 bg-clip-text text-transparent">
              Integrated with the <br /> tools you rely on.
            </h1>
            <h2 className="text-2xl mt-8 bg-gradient-to-b from-white via-white/80 to-white/60 bg-clip-text text-transparent">
              Gather deep insights, drive action, and get more done with native
              integrations
            </h2>
            <button className="mt-10 cursor-pointer bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition">
              Explore all integrations
            </button>
          </div>

          <div className="mt-44 flex flex-wrap justify-center gap-8">
            {icons.map((src, idx) => (
              <div
                key={idx}
                className="w-28 h-28  flex items-center justify-center bg-[#292E3A] p-5 rounded-2xl shadow-md"
              >
                <img
                  src={src}
                  alt={`integration-${idx}`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Arcade />
    </>
  );
};

export default Integrate;
