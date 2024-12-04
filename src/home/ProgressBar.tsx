import { Progress } from "@/components/ui/progress";
import badge from "../assets/Badge_01.svg";

export function ProgressBar() {
  const maxSize = 200;
  const userProgress = 130;
  const progressPercentage = (userProgress / maxSize) * 100;

  const getProgressColor = (value: number) => {
    if (value < 50) {
      return "bg-red-500"; // red for low progress
    } else if (value < 75) {
      return "bg-yellow-500"; // yellow for medium progress
    } else {
      return "bg-gray-200"; // green for high progress
    }
  };

  return (
    <div className="mx-auto flex flex-col px-4 gap-2 py-4 rounded-xl border-[1px] border-bg-form my-4 w-[302px]">
      <div className="flex flex-row justify-between align-middle">
        <div>
          <div className="flex flex-row gap-2">
            <img src={badge} alt="badge" />
            <p className="text-black font-bold text-sm">Starter</p>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center align-middle gap-2">
          <p className="text-black font-bold text-sm">
            {userProgress}/{maxSize}
          </p>
        </div>
      </div>
      <Progress
        value={progressPercentage}
        className={`bg-yellow-400 h-3 ${getProgressColor(progressPercentage)}`}
      />
    </div>
  );
}
