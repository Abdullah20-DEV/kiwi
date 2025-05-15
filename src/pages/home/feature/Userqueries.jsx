import { useState } from "react";
import { UserQueryimage } from "../../../assets/images/image";
import { motion, AnimatePresence } from "framer-motion";
import { faqData } from "../../../utils/data";

const Userqueries = () => {
  const [expandedItems, setExpandedItems] = useState({
    parental: true,
    payment: false,
    trust: false,
    jobs: false,
  });

  const toggleItem = (item) => {
    setExpandedItems((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  const descriptionVariants = {
    hidden: { opacity: 0, height: 0, transition: { duration: 0.3 } },
    visible: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
  };

  return (
    <div className="bg-[#FFEB9A] max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row items-start gap-8">
        
        <div className="md:w-1/2 flex justify-center flex-shrink-0 order-2 md:order-none">
          <img
            src={UserQueryimage}
            alt="FAQ illustration"
            className="w-[36rem] h-[33rem] object-contain" 
          />
        </div>

        
        <div className="md:w-1/2 order-1 md:order-none">
          <div className="flex items-center mb-4">
            <div className="h-[0.313rem] w-9 mb-3 rounded-lg bg-black mr-2"></div>
            <span className="text-sm OpenSans">User Queries</span>
          </div>
          <h2 className="text-2xl md:text-4xl Montserrat font-semibold text-gray-800 mb-6">
            Frequently Asked
            <br />
            Questions
          </h2>

          <div className="space-y-4">
            {faqData.map(({ key, question, answer }) => (
              <div key={key} className="bg-white p-4 rounded-lg shadow-sm">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleItem(key)}
                >
                  <h4 className="text-lg font-semibold Montserrat text-gray-800">
                    {question}
                  </h4>
                  <span
                    className={`text-gray-500 ${
                      expandedItems[key] ? "text-4xl" : "text-2xl"
                    }`}
                  >
                    {expandedItems[key] ? "-" : "+"}
                  </span>
                </div>
                <AnimatePresence>
                  {expandedItems[key] && (
                    <motion.div
                      variants={descriptionVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="overflow-hidden"
                    >
                      <p className="text-gray-600 OpenSans mt-2">{answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userqueries;