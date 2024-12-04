import subImg from "../assets/Group.svg";
import { HiChevronRight } from "react-icons/hi2";

const Info = () => {
  return (
	<div className="flex flex-row justify-between align-middle items-center w-[773px] sm:w-full mx-auto bg-white rounded-xl px-4 py-4 sm:rounded-xl">
        <div className="flex flex-row gap-2">
          <img src={subImg} alt="group img" />
          <div>
            <h4 className="text-lg font-bold">2024 Predicted Questions</h4>
            <p className="text-base sm:text-xs text-[#6C7E8E] leading-tight">
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
  )
}

export default Info