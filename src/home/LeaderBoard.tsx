import workout from "../assets/Workout.png";
import crownAll from '../assets/crownall.png'

const LeaderBoard = () => {
  return (
    <div className="flex flex-col gap-4 w-[302px] mx-auto px-8 py-4">
      <h1 className="text-dark text-sm font-bold">Leaderboard position</h1>
      <div className="flex flex-row gap-4 justify-between items-center align-middle">
        <div className="flex flex-col align-middle items-center justify-center gap-2">
          <img src={crownAll} alt="user pics" />
          <h2 className="font-semibold text-xs">Out of 500 students</h2>
        </div>
		<div className="border-l-2 border-bg-gray-deep"></div>
        <div className="flex flex-col gap-4">
          <img src={workout} alt="user pics" />
		  <div>
			<h2 className="text-sm">Total points</h2>
			<p className="font-bold text-base text-black">15 pts</p>
		  </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderBoard;
