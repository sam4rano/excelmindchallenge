import unilag from "../assets/unilag.png";

const PUtme = () => {
  interface putmeProps {
    id: number;
    year: string;
    title: string;
    image: string;
  }

  const putmeData: putmeProps[] = [
    { id: 1, year: "1993 - 2023", title: "University of Lagos", image: unilag },
    { id: 2, year: "1993 - 2023", title: "University of Lagos", image: unilag },
    { id: 3, year: "1993 - 2023", title: "University of Lagos", image: unilag },
  ];
  return (
    <div className="flex flex-row sm:flex-col gap-4 p-4 w-full">
      {putmeData.map((data) => (
        <div key={data.id} className="flex flex-col sm:flex-row gap-4 w-72 sm:justify-center sm:align-middle sm:items-center h-36 sm:w-full sm:h-auto rounded-xl border-[1px] border-[#E3E3E8] py-[9px] px-[19px]">
          <div className="w-full">
            <img src={data.image} alt="image unilag"  className="min-w-16 min-h-16"/>
          </div>
		  <div className="flex flex-col gap-[5px]">
			<p className="text-[12px] leading-3 text-text-gray font-medium">{data.year}</p>
			<h4 className="text-base text-text-dark">{data.title}</h4>
		  </div>
        </div>
      ))}
    </div>
  );
};

export default PUtme;
