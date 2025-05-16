import { Divier } from "../../../assets/images/image";

const HowItWorksSection = () => {
  return (
    <div className="max-w-8xl bg-[#FFEB9A] px-4 sm:px-6 lg:px-8 py-12">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 mt-6">
        <div className="flex">
          <div className="lg:ml-16">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-[2rem] h-[0.313rem] bg-[#0B1411] rounded-lg"></div>
              <p className="text-sm font-normal OpenSans">Work Process</p>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold Montserrat py-4">How It Works?</h2>
          </div>
        </div>

        <div className="flex items-center">
          <p className="text-sm sm:text-md text-[#0B1411B2] font-normal OpenSans lg:ml-[-2rem]">
            Getting started is easy. Once your profile is complete, explore local jobs that match your timeline, and apply
            with a click. Whether you're looking to earn extra cash or gain real-world experience, SwiRob helps you connect with safe, trusted opportunities near you.
          </p>
        </div>
      </div>

 
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
     
        <div className="lg:col-span-3 bg-white rounded-xl overflow-hidden border border-gray-200 w-full lg:w-[44rem] lg:ml-16">
          <div className="aspect-[16/9] w-full bg-blue-50 flex items-center justify-center h-64 sm:h-[25rem]">
            <div className="w-16 h-16 border border-gray-300 rounded flex items-center justify-center">
             
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl sm:text-2xl font-semibold text-[#6D758F] Inter mb-3">
              Web design trends 2023: Stay ahead of the curve
            </h3>
            <p className="text-[#6D758F] font-normal Inter mt-4 sm:mt-8">
              Lorem Ipsum dolor sit amet consectetur adipiscing el mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.
            </p>
            <hr className="mt-6 sm:mt-8" />
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
              <div className="flex items-center mt-4">
                <div className="bg-gray-300 w-10 h-10 rounded-full mr-3"></div>
                <p className="font-semibold text-[#6D758F] Inter">Brian Clark</p>
              </div>
              <p className="text-sm text-[#6D758F] Inter font-semibold mt-2 sm:mt-6">Jan 16, 2024</p>
            </div>
          </div>
        </div>

      
        <div className="lg:col-span-2 space-y-5">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="flex flex-col sm:flex-row bg-white rounded-xl overflow-hidden border border-gray-200 h-auto sm:h-52">
              <div className="w-full sm:w-[40%] bg-blue-50 flex items-center justify-center py-4 sm:py-0">
                <div className="w-10 h-10 border border-gray-300 rounded flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div className="w-full sm:w-[60%] p-4 flex flex-col justify-center">
                <h3 className="text-base sm:text-lg font-semibold text-[#6D758F] Inter leading-tight mb-1">
                  {index === 0
                    ? "Typography in web design: enhancing UI/UX"
                    : index === 1
                    ? "Responsive design: Cross-device experience"
                    : "Web design best practices: Optimizing speed"}
                </h3>
                <div className="flex flex-col sm:flex-row items-start sm:items-center text-xs mt-2 text-[#6D758F] Inter">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <p className="font-normal Inter text-[#6D758F]">
                      Brian Clark
                    </p>
                  </div>
                  <img src={Divier} alt="divider" className="my-2 sm:my-0 sm:mx-2 w-5 h-3 object-contain" />
                  <p className="text-[#6D758F]">Jan {24 - index * 2}, 2024</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;
