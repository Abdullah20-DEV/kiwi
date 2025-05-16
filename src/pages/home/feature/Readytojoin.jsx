import { JoinBg } from '../../../assets/images/image'; // Replace with your actual image path

const JoinSection = () => {
  return (
    <div
      className="w-full py-6 md:py-8 lg:py-10 bg-cover bg-center rounded-tl-3xl flex flex-col md:flex-row items-center justify-between px-6 md:px-10 lg:px-16"
      style={{ backgroundImage: `url(${JoinBg})` }}
    >
    
      <div className="flex flex-col items-center md:items-start text-center md:text-left mb-4 md:mb-0 lg:ml-8">
        <h1 className="text-white text-2xl md:text-2xl Montserrat lg:text-[2.1rem]  pt-3  font-bold mb-4">
          Ready to join <br className="hidden md:block" />
          <div className='text-[2.3rem] mt-2 leading-normal '>FUTURE OF TEEN WORKS?</div>
        </h1>
        <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4">
          <button className="bg-[#FFEA99] OpenSans text-black font-semibold py-2 px-4 md:py-3 md:px-6 rounded-full w-[12rem]">
            Signup As Teen
          </button>
          <button className="bg-white Open Sans hover:bg-gray-100 text-black font-semibold py-2 px-4 md:py-3 md:px-6 rounded-full w-[12rem] ">
            Signup As Parent
          </button>
        </div>
      </div>


      <div className="flex items-center">
        <button className=" border-2 border-[#FFEA99] text-[#FFEA99] OpenSans font-semibold md:py-3 md:px-6 rounded-full w-[11rem]">
          Post a job
        </button>
      </div>
    </div>
  );
};

export default JoinSection;