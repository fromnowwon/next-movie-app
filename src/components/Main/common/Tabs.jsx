"use client";
import { useState } from "react";

export default function Tabs({ tabData, onSelect }) {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabClick = (index) => {
    setSelectedTab(index);
    onSelect(index);
  };

  return (
    <div className="flex gap-7">
      {tabData &&
        tabData.map((tab, index) => (
          <div
            key={tab.id}
            onClick={() => handleTabClick(index)}
            className={`cursor-pointer text-3xl hover:text-primary ${
              selectedTab === index ? "text-primary" : ""
            }`}
          >
            {tab.title}
          </div>
        ))}
    </div>
  );
}
