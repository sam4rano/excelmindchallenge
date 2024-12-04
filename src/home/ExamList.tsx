import React, { useState } from "react";
import PUtme from "./PUtme";


const ExamList = () => {
  // Step 1: Set up the state to track the active tab
  const [activeTab, setActiveTab] = useState(1);

  // Sample content for each tab
  const tabContent = [
    {
      id: 1,
      title: "POST UTME",
      content: <PUtme />,
    },
    {
      id: 2,
      title: "International",
      content: 'welcome to international exam',
    },
    {
      id: 3,
      title: "Professional",
      content: <PUtme />,
    },
  ];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleTabChange = (tabId:any) => {
    setActiveTab(tabId);
  };
  return (
    <div className="w-full max-w-3xl mx-auto mt-4">
		<h1 className="font-bold text-base text-text-dark">Other Exams</h1>
      {/* Step 2: Render the tabs */}
      <div className="flex flex-row justify-between items-center align-middle border-b-[1px] border-[#D1D5DB]">
        {tabContent.map((tab) => (
          <div
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={`cursor-pointer py-4 px-8 text-sm tracking-tight font-bold ${
              activeTab === tab.id
                ? "text-bg-primary border-b-[1.5px] border-bg-primary" // Active tab styles
                : "text-text-gray"
            }`}
          >
            {tab.title}
          </div>
        ))}
      </div>

      {/* Step 3: Render the content based on the active tab */}
      <div className=" flex items-center align-middle">
          {tabContent.map((tab) =>
            activeTab === tab.id ? (
              <div key={tab.id} className=" w-full flex  gap-8">
                {tab.content}
              </div>
            ) : null
          )}
        </div>
    </div>
  );
};

export default ExamList;
