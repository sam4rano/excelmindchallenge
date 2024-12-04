import img_score from "../assets/Icon Style.svg";
import img_book from "../assets/basil_book-solid.svg";
import calendar from "../assets/solar_calendar-bold.svg";
import illustration from '../assets/Illustration.svg';

const InfoContainer = () => {
  return (
    <div className="mx-auto p-4">
      <div className="flex flex-row gap-2 bg-bg-form rounded-xl w-[302px] h-[70px] p-2 mx-auto">
        <img src={img_score} alt="score img" className="h-6 w-6" />
        <div>
          <h2 className="text-sm font-medium text-black ">Average score</h2>
          <h2 className="text-sm font-semibold text-black ">80%</h2>
        </div>
      </div>
      <div className="w-[302px] h-[95px] flex flex-row mx-auto justify-between my-2 ">
        <div className="flex bg-bg-form flex-col gap-4 rounded-xl p-2 w-[145px]">
          <img src={img_book} alt="book" className="h-4 w-4" />
          <div>
            <h2 className="text-xs text-black">No of exams done</h2>
            <p>14</p>
          </div>
        </div>
        <div className="flex bg-bg-form flex-col gap-4 rounded-xl p-2 w-[145px]">
          <img src={calendar} alt="book" className="h-4 w-4"  />
          <div>
            <h2 className="text-xs text-black">Years completed</h2>
            <p>56</p>
          </div>
        </div>
      </div>
	  <div className="flex flex-col gap-2 bg-bg-form rounded-xl w-[302px] h-[70px] p-2 mx-auto">
          <h2 className="text-sm text-black ">Best Subject</h2>
          <h2 className="text-sm font-semibold text-black ">Biology</h2>
        <div>
        </div>
      </div>
	  <div className="flex flex-col gap-6 bg-bg-form rounded-[15px] w-[302px] my-2 mx-auto p-4">
        <img src={illustration} alt="score img" className="h-16 w-16" />
        <div>
          <h2 className="text-sm font-bold text-black ">Daily Motivation</h2>
          <h2 className="text-sm text-black tracking-tight">Every day is a new opportunity to be better than yesterday. No matter how small the step you take towards your goal, as long as you're moving forward, you're making progress. So don't give up, keep pushing, and remember that every small win counts. You've got this!%</h2>
        </div>
      </div>
    </div>
  );
};

export default InfoContainer;
 