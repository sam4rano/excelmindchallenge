import ChartContainer from "./home/ChartContainer";
import ExamInfo from "./home/ExamInfo";
import InfoContainer from "./home/InfoContainer";
import LeaderBoard from "./home/LeaderBoard";
import ProfileItems from "./home/ProfileItems";
import { ProgressBar } from "./home/ProgressBar";
import Subscribe from "./home/Subscribe";


const Home = () => {
  return (
    <div className="flex flex-row gap-4 pl-4 py-4 font-productSans">
      <div className="flex flex-col gap-6">
        <Subscribe />
        <ProfileItems />
        <ExamInfo />
       
      </div>
      <div className="bg-white w-full p-4 h-auto">
        <LeaderBoard />
        <ProgressBar />
        <ChartContainer />
        <InfoContainer />
      </div>
     
    </div>
  );
};

export default Home;
