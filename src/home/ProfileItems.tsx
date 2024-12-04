import fire from "../assets/fire.svg";
import streak from "../assets/ranking-star.svg";
import badge from "../assets/Badge_01.svg";
import subImg from "../assets/Group.svg";
import { HiChevronRight } from "react-icons/hi2";


const ProfileItems = () => {
  return (
    <div className="flex flex-col gap-4 ">
      <div className="bg-bg-primary w-[773px] h-[166px] pt-5 px-8 rounded-xl mx-auto flex flex-col gap-8">
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
      <div className="flex flex-row justify-between align-middle items-center w-[773px] mx-auto bg-white rounded-xl px-4 py-4">
        <div className="flex flex-row gap-2">
          <img src={subImg} alt="group img" />
          <div >
            <h4 className="text-lg font-bold">2024 Predicted Questions</h4>
            <p className="text-base text-[#6C7E8E] leading-tight">
              Suspendisse enim quis hendrerit est volutpat nunc nisi nulla
              porttitor.
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-2 justify-center align-middle items-center">
			<h4 className="text-bg-primary font-bold">Subscribe</h4>
			<HiChevronRight className="text-bg-primary " />

		</div>
      </div>
    </div>
  );
};

export default ProfileItems;
