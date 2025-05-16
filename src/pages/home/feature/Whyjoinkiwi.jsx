import { animal, box, clientimage, miles, whyjoinbg } from "../../../assets/images/image";

const WhyJoinSection = () => {
  return (
    <>
      <section
        className="relative bg-cover bg-center h-auto py-16 px-2 md:px-4 lg:pl-40 lg:pr-6 flex items-center"
        style={{ backgroundImage: `url(${whyjoinbg})` }}
      >

  <div className="absolute inset-0 z-0 max-w-7xl bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
<div className="max-w-7xl w-full text-left relative z-10  lg:pl-0 lg:-ml-20">
     
          <div className="mb-6">
            <div className="flex items-center mb-4">
          <span className="w-[2rem] h-[0.313rem] bg-white rounded-xl mb-4 px-4 mr-1"></span>
              <span className="text-sm uppercase text-white OpenSans font-normal">
                Built For Safety, Simplicity, And Real Results
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl Montserrat lg:text-5xl font-semibold text-white leading-tight">
              Why Join KiwiRoo?
            </h2>
            <p className=" text-[1rem]  text-white OpenSans mt-4 max-w-[32rem]">
              Whether you're a teen looking to earn, a parent ensuring safety, or someone<wbr /> hiring
              reliable help — KiwiRoo is built to support every step of the journey.
            </p>
          </div>

          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-x-1 sm:gap-y-6 mt-10 w-full sm:max-w-xl">
            <div className="bg-teal-500 text-white p-4 rounded-lg flex items-center w-auto sm:w-60">
              <img src={clientimage} alt="Client Served" className="w-12 sm:w-16 h-12 sm:h-16 object-cover mr-2 sm:mr-4" />
              <div className="text-left min-w-0">
                <div className="text-2xl sm:text-3xl Montserrat font-semibold">100+</div>
                <div className="text-xs sm:text-sm Montserrat font-medium whitespace-nowrap">Client Served</div>
              </div>
            </div>
            <div className="bg-red-500 text-white p-4 rounded-lg flex items-center lg:w-[14rem]">
              <img src={animal} alt="Served Animals" className="w-12 sm:w-16 h-12 sm:h-16 object-cover mr-2 sm:mr-4" />
              <div className="text-left min-w-0">
                <div className="text-2xl sm:text-3xl Montserrat font-semibold">700+</div>
                <div className="text-xs sm:text-sm Montserrat font-medium whitespace-nowrap">Served Animals</div>
              </div>
            </div>
            <div className="bg-indigo-500 text-white p-4 rounded-lg flex items-center w-auto sm:w-60">
              <img src={miles} alt="Miles Walked" className="w-12 sm:w-16 h-12 sm:h-16 object-cover mr-2 sm:mr-4" />
              <div className="text-left min-w-0">
                <div className="text-2xl sm:text-3xl Montserrat font-semibold">1000+</div>
                <div className="text-xs sm:text-sm Montserrat font-medium whitespace-nowrap">Miles Walked</div>
              </div>
            </div>
            <div className="bg-purple-500 text-white p-4 rounded-lg flex items-center lg:w-[14rem]">
              <img src={box} alt="Combined" className="w-12 sm:w-16 h-12 sm:h-16 object-cover mr-2 sm:mr-4" />
              <div className="text-left min-w-0">
                <div className="text-2xl sm:text-3xl Montserrat font-semibold">10+</div>
                <div className="text-xs sm:text-sm uppercase Montserrat font-medium whitespace-nowrap">Combined...</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyJoinSection;