import fire from "../assets/fire.svg";
import streak from "../assets/ranking-star.svg";
import badge from "../assets/Badge_01.svg";
import Info from "./Info";

const ProfileItems = () => {
  return (
    <div className="flex flex-col gap-4 sm:w-full">
      <div className="bg-bg-primary w-[773px] sm:w-full h-[166px] pt-5 px-8 rounded-xl sm:rounded-none mx-auto flex flex-col gap-8">
        <div className="max-w-[263px] text-xl text-white flex flex-col gap-2">
          <h2>Hello Michael,</h2>
          <p className="text-white text-opacity-75 text-lg ">
            Keep learning, you can do it 💪
          </p>
        </div>
        <div className="w-[334px] bg-white bg-opacity-5 max-h-[52px] py-4 px-6 rounded-tl-xl rounded-tr-xl flex flex-row gap-4 justify-between">
          <div className="flex flex-row justify-center items-center align-middle gap-2">
            <img src={fire} alt="fire" />
            <p className="text-white">12</p>
          </div>
          <div className="flex flex-row justify-center items-center align-middle gap-2">
            <img src={streak} alt="streaking_badge" />
            <p className="text-white">12/1,439</p>
          </div>
          <div className="flex flex-row justify-center items-center align-middle gap-2">
            <img src={badge} alt="badge" />
            <p className="text-white">Starter</p>
          </div>
        </div>
      </div>
      <div className="sm:hidden">

      <Info />
      </div>
    </div>
  );
};

export default ProfileItems;
