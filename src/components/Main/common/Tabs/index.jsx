"use client";

export default function Tabs({ tabData, onSelect }) {
  const handleTabClick = (index) => {
    onSelect(index);
  };

  return (
    <div className="flex justify-center">
      {tabData &&
        tabData.map((tab, index) => (
          <div key={tab.id} onClick={() => handleTabClick(index)}>
            {tab.title}
          </div>
        ))}
    </div>
  );
}
