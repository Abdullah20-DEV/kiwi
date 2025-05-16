import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mapimage, Rickyjames } from "../../../assets/images/image";

const SuccessStories = () => {
  
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const [activeArrow, setActiveArrow] = useState(0);
  

  const cards = [
    {
      id: 1,
      content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution. Mascemas au lorem quisendi masrai molestie vulputate in ningi amet diam. Cras eu odio sit amet.",
      author: "Rickey James",
      role: "Chief of Staff",
      image: Rickyjames
    },
    {
      id: 2,
      content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution. Mascemas au lorem quisendi masrai molestie vulputate in ningi amet diam. Cras eu odio sit amet.",
      author: "Rickey James",
      role: "Chief of Staff",
      image: Rickyjames
    },
    {
      id: 3,
      content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution. Mascemas au lorem quisendi masrai molestie vulputate in ningi amet diam. Cras eu odio sit amet.",
      author: "Rickey James",
      role: "Chief of Staff",
      image: Rickyjames
    }
  ];

  const goToNext = () => {
    setDirection(1);
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
    setActiveArrow(0); 
  };

  const goToPrev = () => {
    setDirection(-1);
    setCurrentCardIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    setActiveArrow(1); 
  };

  return (
    <div className="max-w-8xl bg-[#FFF7C9] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
      <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12">

        <div className="lg:w-1/2 mx-4 sm:mx-8 lg:ml-16">
          <div className="flex items-center mb-4">
            <div className="h-[0.313rem] w-[2rem]  mb-3 rounded-lg bg-black mr-2"></div>
            <span className="text-xs sm:text-sm OpenSans">User Queries</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold Montserrat text-gray-800 mb-4 sm:mb-6">
            Success Stories
          </h1>
          
         
          <div className="relative overflow-hidden w-full sm:w-[24rem] lg:w-[36rem]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentCardIndex}
                custom={direction}
                initial={(direction) => ({
                  x: direction > 0 ? 100 : -100,
                  opacity: 0
                })}
                animate={{
                  x: 0,
                  opacity: 1
                }}
                exit={(direction) => ({
                  x: direction < 0 ? 100 : -100,
                  opacity: 0
                })}
                transition={{
                  x: { type: "spring", stiffness: 900, damping: 30 },
                  opacity: { duration: 0.1 }
                }}
                className="w-full"
              >
                
                <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-sm mb-4 sm:mb-6 w-full">
                  <p className="text-gray-600 OpenSans text-sm sm:text-base">
                    {cards[currentCardIndex].content}
                  </p>
                  <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 flex items-center gap-3 sm:gap-4">
                    <img
                      src={cards[currentCardIndex].image}
                      alt={cards[currentCardIndex].author}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-bold text-gray-800 Montserrat text-sm sm:text-base">
                        {cards[currentCardIndex].author}
                      </p>
                      <p className="text-[#0B1411B2] Poppins text-medium sm:text-sm">
                        {cards[currentCardIndex].role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

     
          <div className="flex gap-3 sm:gap-4">
            <motion.button
              className={`w-8 h-8 sm:w-10 sm:h-10 rounded-md ${
                activeArrow === 1 
                  ? "bg-gray-800" 
                  : "bg-white border border-gray-300"
              } flex items-center justify-center hover:bg-gray-700`}
              onClick={goToPrev}
              aria-label="Previous card"
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
            >
              <svg
                className={`w-4 h-4 sm:w-5 sm:h-5 ${
                  activeArrow === 1 ? "text-white" : "text-gray-800"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </motion.button>
            <motion.button
              className={`w-8 h-8 sm:w-10 sm:h-10 rounded-md ${
                activeArrow === 0 || activeArrow === undefined
                  ? "bg-gray-800" 
                  : "bg-white border border-gray-300"
              } flex items-center justify-center hover:bg-gray-700`}
              onClick={goToNext}
              aria-label="Next card"
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
            >
              <svg
                className={`w-4 h-4 sm:w-5 sm:h-5 ${
                  activeArrow === 0 || activeArrow === undefined ? "text-white" : "text-gray-800"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.button>
          </div>
        </div>

        
        <div className="lg:w-1/2 flex justify-center mt-6 lg:mt-0">
          <img
            src={Mapimage}
            alt="Success story"
            className="w-full max-w-[90%] sm:max-w-[28rem] h-64 sm:h-80 lg:h-96 rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;