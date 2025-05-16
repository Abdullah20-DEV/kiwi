import { JobAccess, Tickmarks } from "../../../assets/images/image";

const Jobposting = () => {
  return (
    <div className="max-w-8xl bg-[#FFF7C9] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row items-center gap-8">
       
        <div     className="md:w-1/2 lg:ml-12">
        <div className="flex items-center mb-4">
              <div className="h-[0.313rem] w-[2rem] mb-3 rounded-lg  bg-black mr-2"></div>
              <span className="text-sm text-normal  OpenSans ">
             job posting access
              </span>
            </div>
          <h2 className="text-2xl md:text-4xl Montserrat font-semibold text-gray-800 mb-6 max-w-sm">
            Who Can Post a Job?
          </h2>
          <p className="text-[#0B1411B2] mb-6 max-w-lg OpenSans">
            To ensure a safe and verified environment, only users who register as
            Employers can post jobs on KiwiRoo. Whether you're a busy parent, a
            local business, or just need a helping hand.
          </p>
          
          <div className="space-y-4 OpenSans">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <img src={Tickmarks} alt="" />
              </div>
              <p className="ml-3 text-[#0B1411CC] text-semibold text-[1rem] ">Register with an Employer account</p>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <img src={Tickmarks} alt="" />
              </div>
              <p className="ml-3 text-[#0B1411CC] text-semibold text-[1rem]">Post tasks like dog walking or babysitting</p>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <img src={Tickmarks} alt="" />
              </div>
              <p className="ml-3 text-[#0B1411CC] text-semibold text-[1rem]">View applicants and manage offers</p>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
              <img src={Tickmarks} alt="" />
              </div>
              <p className="ml-3 text-[#0B1411CC] text-semibold text-[1rem]">Pay securely via Stripe (escrow)</p>
            </div>
          </div>
        </div>
        
      
        <div className="md:w-1/2 flex justify-center">

          <div className=" w-full h-64 md:h-96 rounded-lg flex items-center justify-center text-gray-400">
          <img src={JobAccess} className="h-96" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobposting;