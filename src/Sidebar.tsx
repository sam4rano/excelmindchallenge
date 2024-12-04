import { useEffect, useState } from "react";
import Exams from "./components/Exams";
import MyExams from "./components/MyExams";
import Forum from "./components/Forum";
import More from "./components/More";
import Home from "./Home";
import home from "./assets/home.svg";
import book from "./assets/book.svg";
import messages from "./assets/messages.svg";
import books from "./assets/book1.svg";
import category from "./assets/category.svg";

interface SidebarItem {
  id: number;
  label: string;
  image: string;
}

const sidebarData: SidebarItem[] = [
  {
    id: 1,
    label: "Home",
    image: home,
  },
  {
    id: 2,
    label: "My Exams",
    image: book,
  },
  {
    id: 3,
    label: "Exams",
    image: books,
  },
  {
    id: 4,
    label: "Forum",
    image: messages,
  },
  {
    id: 5,
    label: "More",
    image: category,
  },
];

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (tabId: number) => {
    setActiveTab(tabId);
  };

  const [isMobile, setIsMobile] = useState(false);


  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    // Initialize isMobile on mount
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    return () => {
      // Cleanup on unmount
      window.removeEventListener("resize", handleResize);
    };
  }, []); 

  return (
    <div className="w-full flex flex-row ">
      {!isMobile && (
      <ul className="flex flex-col gap-4 pt-10 max-w-[200px] w-full border-r-2 border-[#F4F4F6]">
        {sidebarData.map((data) => (
          <li
            key={data.id}
            onClick={() => handleTabChange(data.id)}
            className={`flex flex-row align-middle items-center gap-2 cursor-pointer h-12 pl-6 ${
              activeTab === data.id ? "text-bg-primary" : "text-gray-800"
            }`}
          >
            <div
              className={`text-gray-800 ${
                activeTab === data.id ? "text-bg-primary" : ""
              }`}
            >
              <img
                src={data.image}
                alt="items image"
                className={`${
                  activeTab === data.id ? "text-bg-primary" : "text-gray-800"
                }`}
              />
            </div>
            <span
              className={`text-lg font-bold ${
                activeTab === data.id ? "text-bg-primary" : "text-gray-800"
              }`}
            >
              {data.label}
            </span>
          </li>
        ))}
      </ul>
      )}
      <div className="w-full bg-bg-gray">
        {activeTab === 1 && <Home />}
        {activeTab === 2 && <MyExams />}
        {activeTab === 3 && <Exams />}
        {activeTab === 4 && <Forum />}
        {activeTab === 5 && <More />}
      </div>
    </div>
  );
};

export default Sidebar;
