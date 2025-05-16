import { useState, useRef, useEffect } from "react";
import { jobsData } from "../../../utils/data";
import JobCard from "./Cards";
import { Arrow, HeaderBG } from "../../../assets/images/image";

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 640);
    };
    
    checkMobile();
    
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const getTransformValue = () => {
    if (isMobile) {
      return 3 * 220 + 2 * 8; 
    }
    return 272; 
  };

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 3); 

    if (currentIndex >= jobsData.length - 3) {
      setTimeout(() => {
        if (sliderRef.current) {
          sliderRef.current.style.transition = "none";
          setCurrentIndex(0);
          sliderRef.current.style.transform = isMobile ? `translateY(0)` : `translateX(0)`;
          setTimeout(() => {
            if (sliderRef.current) {
              sliderRef.current.style.transition = "transform 0.5s ease-in-out";
            }
          }, 50);
        }
      }, 500);
    }
  };

  return (
    <section 
      className="lg:rounded-b-[60%] py-10 px-4 relative bg-cover bg-center bg-no-repeat bg-[url('/path/to/your/background-image.jpg')]"
    >
      <img 
        src={HeaderBG} 
        alt="background" 
        className="absolute top-0 left-0 w-full h-[60%] md:h-[60%] lg:h-[90%] lg:-mt-[5rem] object-cover -z-20"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mt-12">
          <p className="text-sm font-normal lg:mr-4 flex items-center justify-center gap-1 mb-6 OpenSans">
            <span className="w-[2rem] h-[0.313rem] bg-black rounded-xl mb-4 px-4 mr-1"></span>
            <span className="text-[1rem]">Best Jobs Place</span>
          </p>
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 Montserrat">
            Helping Teens to
            <br />
            <span className="md:pt-2 inline-block">Find Jobs</span>
          </h1>
          <p className="text-sm sm:text-base max-w-[60%] text-[#0B1411B2] OpenSans mx-auto font-sans">
            Each month, more than 3 million job seekers turn to our website for work, making over 140,000 applications every single day
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <button className="bg-black OpenSans text-[#FFEA99] px-6 py-2 rounded-full font-semibold hover:bg-gray-800 transition-colors font-sans">
              Get Started
            </button>
            <button className="bg-transparent border border-black px-6 py-2 rounded-full font-semibold hover:bg-black hover:text-white transition-colors OpenSans">
              Contact Us
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden mt-24">
          <div className="w-full flex justify-center">
            <div className="w-full sm:w-[calc(272px*3)] max-w-full h-[676px] sm:h-auto overflow-hidden relative px-2 sm:px-0">
              <div
                ref={sliderRef}
                className="flex flex-col sm:flex-row transition-transform duration-500 ease-in-out"
                style={{
                  transform: isMobile
                    ? `translateY(-${Math.floor(currentIndex / 3) * getTransformValue()}px)`
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

          <div
            className="bg-black text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center lg:mr-20 justify-center absolute top-1/2 transform -translate-y-1/2 right-2 sm:right-4 cursor-pointer hover:bg-gray-800 transition-colors z-30"
            onClick={handleNext}
          >
            {isMobile ? (
              <img src={Arrow} style={{ transform: "rotate(90deg)" }} />
            ) : (
              <img src={Arrow} />
            )}
          </div>
        </div>
      </div>
      <div
        className="absolute top-0 left-0 w-full h-full bg-[#fff9d6] -z-30"
        style={{ clipPath: 'inset(calc(100% - 70%) 0 0 0)' }}
      ></div>
    </section>
  );
};

export default Header;