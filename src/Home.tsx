import ChartContainer from "./home/ChartContainer";
import ExamInfo from "./home/ExamInfo";
import Info from "./home/Info";
import InfoContainer from "./home/InfoContainer";
import LeaderBoard from "./home/LeaderBoard";
import ProfileItems from "./home/ProfileItems";
import { ProgressBar } from "./home/ProgressBar";
import Subscribe from "./home/Subscribe";


const Home = () => {
  return (
    <div className="flex flex-row sm:flex-col gap-4  pl-4 sm:w-full sm:pl-0 py-4 sm:py-0 font-productSans">
      <div className="flex flex-col gap-6 sm:gap-0">
        <Subscribe />
        <ProfileItems />
        <ExamInfo />
       
      </div>
      <div className="bg-white w-full p-4 h-auto sm:hidden">
        <LeaderBoard />
        <ProgressBar />
        <ChartContainer />
        <InfoContainer />
      </div>
     
    </div>
  );
};

export default Home;
