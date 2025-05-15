import { shape } from "../../../assets/images/image";

const HowItWorks = () => {
  return (
    <div className="bg-[#fff9d6] py-12 px-4 md:px-8 lg:px-16 w-full">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          <div className="flex pl-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-9 h-[0.313rem] bg-black rounded-lg"></div>
                <p className="text-sm font-normal OpenSans">Work Process</p>
              </div>
              <h2 className="text-4xl font-semibold Montserrat">How It Works?</h2>
            </div>
          </div>

          <div className="md:w-[55%]">
            <p className="text-base OpenSans">
              Getting started is easy! Just create your profile, explore local job listings that match your interests,
              and apply with a click. Whether you're looking to earn extra cash or gain real-world experience, KiwiRoo
              helps you connect with safe, trusted opportunities near you.
            </p>
          </div>
        </div>

        {/* Steps Section */}
        <div className="md:mt-16 mt-10 relative">
          {/* Steps with Image */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Image Overlay */}
            <img
              src={shape}
              alt="Steps connector"
              className="absolute inset-0 w-full h-full object-contain pointer-events-none hidden lg:block "
            />

            {/* Step 1 - Top Left */}
            <div className="flex flex-col items-center text-center md:self-start md:pt-0 ml-4 relative z-10">
              <p className="text-sm font-bold Montserrat bg-[#0B14110D] rounded-xl px-2 mb-2">STEP - 01</p>
              <h3 className="text-xl font-bold mb-3 OpenSans">Sign Up & Create a Profile</h3>
              <p className="text-sm OpenSans">Teens sign up, upload photo, verify ID (with parental approval)</p>
            </div>

            {/* Step 2 - Bottom Middle */}
            <div className="flex flex-col items-center bg-[] text-center md:self-end md:pb-0 md:mt-28 relative z-10 mt-[3rem]">
              <p className="text-sm font-bold bg-[#0B14110D] rounded-xl px-2 Montserrat mb-2">STEP - 02</p>
              <h3 className="text-xl font-bold mb-3 OpenSans">Browse Available Jobs</h3>
              <p className="text-sm OpenSans">Browse listings for dog walking, babysitting, house sitting & more</p>
            </div>

            {/* Step 3 - Top Right */}
            <div className="flex flex-col items-center text-center md:self-start md:pt-0 relative z-10">
              <p className="text-sm font-bold bg-[#0B14110D] rounded-xl px-2 Montserrat mb-2">STEP - 03</p>
              <h3 className="text-xl font-bold mb-3 OpenSans">Apply & Get Hired</h3>
              <p className="text-sm OpenSans">Use tokens to apply, connect with job posters, get approved</p>
            </div>
          </div>

          {/* Explore More Button */}
          <div className="flex justify-center md:mt-16 mt-[2rem]">
            <button className="bg-black cursor-pointer OpenSans text-[#FFEA99] px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">
              Explore More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;