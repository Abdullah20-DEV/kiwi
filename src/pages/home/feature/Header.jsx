import { useState, useRef, useEffect } from "react";
import { jobsData } from "../../../utils/data";
import JobCard from "./Cards";
import { Arrow, HeaderBG } from "../../../assets/images/image";

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [screenSize, setScreenSize] = useState("desktop");
  const [isMounted, setIsMounted] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;
      if (width <= 640) {
        setScreenSize("mobile");
      } else if (width < 1024) {
        setScreenSize("tablet");
      } else {
        setScreenSize("desktop");
      }
    };
    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  useEffect(() => {
    // Enable animation after first render
    setIsMounted(true);
  }, []);

  const getTransformValue = () => {
    if (screenSize === "mobile") return 228; // 220 card height + 8 margin
    return 272; // card width for desktop & tablet
  };

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);

    if (currentIndex >= jobsData.length) {
      setTimeout(() => {
        if (sliderRef.current) {
          sliderRef.current.style.transition = "none";
          setCurrentIndex(0);
          sliderRef.current.style.transform =
            screenSize === "mobile"
              ? `translateY(0)`
              : `translateX(0)`;

          setTimeout(() => {
            if (sliderRef.current) {
              sliderRef.current.style.transition =
                "transform 0.5s ease-in-out";
            }
          }, 50);
        }
      }, 500);
    }
  };

  return (
    <section className="relative bg-cover bg-center bg-no-repeat py-10 px-4 lg:rounded-b-[60%]">
      <img
        src={HeaderBG}
        alt="Background"
        className="absolute top-0 left-0 w-full h-[60%] md:h-[60%] lg:h-[90%] lg:-mt-20 object-cover -z-20"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mt-12">
          <p className="text-sm font-normal flex items-center justify-center gap-2 mb-6 font-sans">
            <span className="w-8 h-1 bg-black rounded-xl mb-1"></span>
            <span className="text-base">Best Jobs Place</span>
          </p>
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 font-montserrat">
            Helping Teens to <br />
            <span className="inline-block md:pt-2">Find Jobs</span>
          </h1>
          <p className="text-sm sm:text-base max-w-[47%] mx-auto text-[#0B1411B2] font-sans">
            Each month, more than 3 million job seekers turn to our website for
            work,  making over 140,000 applications every single day.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <button className="bg-black text-[#FFEA99] px-6 py-2 rounded-full font-semibold hover:bg-gray-800 transition">
              Get Started
            </button>
            <button className="border border-black px-6 py-2 rounded-full font-semibold hover:bg-black hover:text-white transition">
              Contact Us
            </button>
          </div>
        </div>

        {/* Slider Section */}
        <div className="relative overflow-hidden mt-24">
          <div className="w-full flex justify-center">
            <div className="w-full sm:w-[calc(272px*3)] h-[676px] sm:h-auto overflow-hidden relative px-2 sm:px-0">
              <div
                ref={sliderRef}
                className={`flex flex-col sm:flex-row ${
                  isMounted ? "transition-transform duration-500 ease-in-out" : ""
                }`}
                style={{
                  transform:
                    screenSize === "mobile"
                      ? `translateY(-${currentIndex * getTransformValue()}px)`
                      : `translateX(-${currentIndex * getTransformValue()}px)`,
                }}
              >
                {[...jobsData, ...jobsData, ...jobsData].map((job, index) => (
                  <div
                    key={`${job.title}-${index}`}
                    className="flex-shrink-0 w-full sm:w-64 my-1 sm:mx-2 sm:my-0"
                  >
                    <JobCard title={job.title} description={job.description} />
                  </div>
                ))}
              </div>
            </div>
          </div>

    
          {screenSize !== "tablet" && (
            <div
              className="absolute top-1/2 right-2 md:-mt-0 -mt-7 md:-mr-0 -mr-2 lg:mr-20 transform -translate-y-1/2 z-50 bg-black text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center cursor-pointer hover:bg-gray-800 transition"
              onClick={handleNext}
            >
              <img
                src={Arrow}
                alt="Next"
                className={`${
                  screenSize === "mobile" ? "rotate-90" : ""
                }`}
              />
            </div>
          )}
        </div>

        {/* Tablet-only Arrow Button */}
        {screenSize === "tablet" && (
          <div className="w-full flex justify-center mt-8">
            <button
              onClick={handleNext}
              className="bg-black text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-800 transition"
            >
              <img src={Arrow} alt="Next" />
            </button>
          </div>
        )}
      </div>

      {/* Background Yellow Layer */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-[#fff9d6] -z-30"
        style={{ clipPath: "inset(calc(100% - 70%) 0 0 0)" }}
      ></div>
    </section>
  );
};

export default Header;
