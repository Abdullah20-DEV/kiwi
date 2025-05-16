import React from 'react';
import { girlhair, mask, men, safetytrustimage } from '../../../assets/images/image';

const SafetyTrust = () => {
  return (
    <div className="bg-[#FFEB9A] py-8 sm:py-12 lg:py-20 lg:pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Main container with responsive layout */}
        <div className="flex flex-col md:flex-col lg:flex-row items-start gap-6 md:gap-6 lg:gap-0">
      
          {/* Left section - Half width on tablet */}
          <div className="w-full md:w-[45%] lg:w-[38%]">
            <div className="flex items-center mb-4">
              <div className="h-[0.313rem] w-[2rem] bg-black mr-2 rounded-lg"></div>
              <span className="text-[1rem] mt-8 OpenSans">
                Safety + Trust Assurance
              </span>
            </div>
            
            <h2 className="text-[2.75rem] md:text-[2.2rem] lg:text-[2.75rem] w-full md:w-full lg:w-[28rem] Montserrat font-semibold leading-tight">
              Your Safety Is Our<br className="hidden sm:inline" /> Priority
            </h2>
            
            <p className="text-base md:text-[1rem] lg:text-[1rem] text-[#0B1411B2] OpenSans mt-6 md:mt-6 lg:mt-10 mb-6 max-w-[26rem]">
              We've built KiwiRoo from the ground up to be secure, transparent, and parent-approved. 
              Every job, teen, and employer goes through layers of trust checks so you can focus on what matters.
            </p>

            {/* First feature box under heading - Only visible on mobile and desktop */}
            <div className="p-4 md:hidden lg:block lg:p-6 rounded-lg w-full lg:max-w-[29rem] lg:mt-6 leading-3 mx-0 lg:-mx-6">
              <div className="flex flex-col items-start">
                <img 
                  src={mask} 
                  alt="Verification" 
                  className="w-12 h-12 lg:w-[3.5rem] lg:h-[3.5rem] mb-4" 
                />
                <h3 className="text-[1.125rem] font-semibold Montserrat text-[#0B1411]">
                  Stripe ID Verification
                </h3>
                <p className="text-[#0B1411B2] OpenSans text-sm lg:text-[1rem] mt-3">
                  All users go through secure ID checks <br className="hidden lg:inline" />
                  <span className='inline-block mt-1 lg:mt-1'>for extra peace of mind.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Image section - Only visible on tablet - positioned next to heading */}
          <div className="hidden md:block lg:hidden md:w-[55%] md:justify-center md:pl-4">
            <div className="relative w-full max-w-[22rem] h-[28rem] rounded-[20px] overflow-hidden">
              <img 
                src={safetytrustimage} 
                alt="Safety Trust" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[80%] md:w-[15rem] bg-black bg-opacity-90 py-2 md:py-3 px-4 md:px-6 rounded-3xl">
                <p className="text-[#FFEB9A] text-center font-semibold OpenSans text-sm md:text-[1rem] md:mb-4">
                  Read our safety Promise
                </p>
              </div>
            </div>
          </div>

          {/* Feature boxes row for tablet - now below the heading and image */}
          <div className="w-full md:flex md:flex-wrap md:justify-between lg:hidden mt-6 md:mt-8">
            {/* First feature box - visible on tablet */}
            <div className="hidden md:block md:w-[48%] px-4 py-4 rounded-lg mb-6">
              <div className="flex flex-col items-start">
                <img 
                  src={mask} 
                  alt="Verification" 
                  className="w-12 h-12 md:w-[3.5rem] md:h-[3.5rem] mb-2" 
                />
                <h3 className="text-md font-semibold Montserrat text-gray-900">
                  Stripe ID Verification
                </h3>
                <p className="text-[#0B1411B2] OpenSans mt-1 text-sm md:text-[1rem]">
                  All users go through secure ID checks for extra peace of mind.
                </p>
              </div>
            </div>
            
            <div className="md:w-[48%] px-4 py-4 rounded-lg mb-6">
              <div className="flex flex-col items-start">
                <img 
                  src={mask} 
                  alt="Verification" 
                  className="w-12 h-12 md:w-[3.5rem] md:h-[3.5rem] mb-2" 
                />
                <h3 className="text-md font-semibold Montserrat text-gray-900">
                  Parental Approval Workflow
                </h3>
                <p className="text-[#0B1411B2] OpenSans mt-1 text-sm md:text-[1rem]">
                  Teens can't apply to any job until their parent gives the green light.
                </p>
              </div>
            </div>

            <div className="md:w-[48%] px-4 py-4 rounded-lg mb-6">
              <div className="flex flex-col items-start">
                <img 
                  src={men} 
                  alt="Verification" 
                  className="w-12 h-12 md:w-[3.5rem] md:h-[3.5rem] mb-2" 
                />
                <h3 className="text-md font-semibold Montserrat text-gray-900">
                  Escrow Payments via Stripe
                </h3>
                <p className="text-[#0B1411B2] OpenSans mt-2 md:mt-3 text-sm md:text-[1rem]">
                  Payments are held safely and only released once the job is complete.
                </p>
              </div>
            </div>

            <div className="md:w-[48%] px-4 py-4 rounded-lg">
              <div className="flex flex-col items-start">
                <img 
                  src={girlhair} 
                  alt="Verification" 
                  className="w-12 h-12 md:w-[3.5rem] md:h-[3.5rem] mb-2" 
                />
                <h3 className="text-md font-semibold Montserrat text-gray-900">
                  Admin Moderation
                </h3>
                <p className="text-[#0B1411B2] OpenSans mt-2 md:mt-3 text-sm md:text-[1rem]">
                  Our team monitors activity, flags disputes, and enforces community rules.
                </p>
              </div>
            </div>
          </div>

          {/* Desktop layout elements - hidden on tablet */}
          <div className="hidden  lg:w-[55%] lg:flex lg:justify-center lg:mt-0 lg:ml-[-4rem]">
            <div className="relative w-full max-w-[26rem] lg:h-[33rem] rounded-[20px] overflow-hidden">
              <img 
                src={safetytrustimage} 
                alt="Safety Trust" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute lg:bottom-6 left-1/2 transform -translate-x-1/2 lg:w-[15rem] bg-black bg-opacity-90 lg:py-3 lg:px-6 rounded-3xl">
                <p className="text-[#FFEB9A] text-center font-semibold OpenSans lg:text-[1rem]">
                  Read our safety Promise
                </p>
              </div>
            </div>
          </div>

          {/* Right section - Features section - hidden on tablet */}
          <div className="hidden lg:block lg:w-[38%] lg:flex-col lg:mt-0 ">
            
            {/* First feature box */}
            <div className="lg:px-6 lg:py-4 rounded-lg lg:max-w-[19rem] lg:-mx-4 lg:mb-0">
              <div className="flex flex-col items-start">
                <img 
                  src={mask} 
                  alt="Verification" 
                  className="lg:w-[3.5rem] lg:h-[3.5rem] mb-2" 
                />
                <h3 className="text-md font-semibold Montserrat text-gray-900">
                  Parental Approval Workflow
                </h3>
                <p className="text-[#0B1411B2] OpenSans mt-1 lg:text-[1rem]">
                  Teens can't apply to any job until their parent gives the green light.
                </p>
              </div>
            </div>

            {/* Second feature box */}
            <div className="lg:px-6 lg:py-5 rounded-lg lg:max-w-[19rem] lg:-mx-4 lg:mb-0">
              <div className="flex flex-col items-start">
                <img 
                  src={men} 
                  alt="Verification" 
                  className="lg:w-[3.5rem] lg:h-[3.5rem] mb-2" 
                />
                <h3 className="text-md font-semibold Montserrat text-gray-900">
                  Escrow Payments via Stripe
                </h3>
                <p className="text-[#0B1411B2] OpenSans lg:mt-3 lg:text-[1rem]">
                  Payments are held safely and only released once the job is complete.
                </p>
              </div>
            </div>

            {/* Third feature box */}
            <div className="lg:px-7 lg:py-3 rounded-lg lg:max-w-[20rem] lg:-mx-4">
              <div className="flex flex-col items-start">
                <img 
                  src={girlhair} 
                  alt="Verification" 
                  className="lg:w-[3.5rem] lg:h-[3.5rem] mb-2" 
                />
                <h3 className="text-md font-semibold Montserrat text-gray-900">
                  Admin Moderation
                </h3>
                <p className="text-[#0B1411B2] OpenSans lg:mt-3 lg:text-[1rem]">
                  Our team monitors activity, flags disputes, and enforces community rules.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafetyTrust;