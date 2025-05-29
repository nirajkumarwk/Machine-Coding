import React, { useState } from "react";

function Tabs({ tabs }) {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTab = (index) => {
    setSelectedTab(index);
  };
  return (
    <div className="m-6">
      {tabs.length === 0 ? (
        <div>
            No tabs available
        </div>
      ) : (
        <>
        <div className="flex space-x-3 bg-amber-100">
        {tabs.map((tab, index) => {
          return (
            <div className="" key={index}>
              <button
                onClick={() => handleTab(index)}
                className={`p-6  flex flex-col cursor-pointer ${
                  index === selectedTab ? "border-b-2 border-b-blue-500" : ""
                }`}
              >
                {tab.title || `Tab ${index + 1}`}
              </button>
            </div>
          );
        })}
      </div>
      <div className="bg-amber-300 h-svh">{tabs[selectedTab]?.content || `No Content available`}</div>
        </>
      )}
    </div>
  );
}

export default Tabs;
