import { babytsitting } from "../../../assets/icons/icons";
import { dogface } from "../../../assets/icons/icons";
import { house } from "../../../assets/icons/icons";

const JobCard = ({ title, description }) => {
  const getIconComponent = (title) => {
    switch (title) {
      case "Dog Walk":
          return <img src={dogface} className="w-20 h-20 mx-auto" />;
          case "Baby Sitting":
          return <img src={babytsitting} className="w-20 h-20 mx-auto" />;
      case "House Sitting":
        return <img src={house} className="w-20 h-20 mx-auto" />;
      default:
        return null;
    }
  };

  return (
    <div className="relative z-30 bg-white  rounded-lg  transition-all duration-300 flex flex-col items-center justify-center h-[17rem] w-[16rem] px-7  mx-2">
      <div className="mb-4">{getIconComponent(title)}</div>
      <h3 className="text-xl font-bold Montserrat mb-2 text-center">{title}</h3>
      <p className="text-gray-700 OpenSans text-sm text-center font-normal">{description}</p>
    </div>
  );
};

export default JobCard;