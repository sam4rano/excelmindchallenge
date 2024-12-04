import waec from "../assets/waec.png";
import lock from "../assets/lock.png";
import ExamList from "./ExamList";
import Info from "./Info";

interface examInfoProps {
  id: number;
  title: string;
  image: string;
  exam_year: string;
  image_2: string;
}

const ExamInfo = () => {
  const examData: examInfoProps[] = [
    {
      id: 1,
      title: "Joint Admission Matriculation Examination",
      image: waec,
      exam_year: "1994",
      image_2: lock,
    },
    {
      id: 2,
      title: "Joint Admission Matriculation Examination",
      image: waec,
      exam_year: "1994",
      image_2: lock,
    },
    {
      id: 3,
      title: "Joint Admission Matriculation Examination",
      image: waec,
      exam_year: "1994",
      image_2: lock,
    },
  ];
  return (
    <div className="bg-white max-w-[774px] sm:max-w-full sm:w-full h-[656px] px-8 rounded-xl mx-auto flex flex-col gap-6 py-4 sm:overflow-clip">
      <div className="flex flex-row justify-between sm:w-full">
        <h1 className="text-lg font-bold">O'Level exams</h1>
        <p className="text-lg font-bold text-bg-primary">Subscribe</p>
      </div>
      <div className="flex flex-row  gap-4 scrollbar-custom bg-bg-gray overflow-x-scroll w-full p-0">
        {examData.map((data) => (
          <div
            key={data.id}
            className="flex flex-col  bg-white rounded-xl border-2 border-bg-gray min-w-[302px] h-[178px] gap-6  px-[15px] py-4"
          >
              <div className="flex flex-row justify-center align-middle items-center gap-4 w-full">
                  <img src={data.image} alt="image data" />
                <div className="w-full">
                  <h2 className="text-text-gray text-sm font-medium">
                    {data.exam_year}
                  </h2>
                  <p className="text-black text-sm font-bold">{data.title}</p>
                </div>
              </div>
              <div className="flex justify-center items-center align-middle  rounded-full bg-bg-gray-deep h-10 w-full">
                <img src={data.image_2} alt="image data" />
              </div>
          </div>
        ))}
      </div>
      <div className="lg:hidden xl:hidden">

      <Info />
      </div>
     
    
	  <ExamList/>
    </div>
  );
};

export default ExamInfo;
