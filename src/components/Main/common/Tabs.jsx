"use client";

export default function Tabs({ tabData, onSelect }) {
  const handleTabClick = (index) => {
    onSelect(index);
  };

  return (
    <div className="flex gap-7">
      {tabData &&
        tabData.map((tab, index) => (
          <div
            key={tab.id}
            onClick={() => handleTabClick(index)}
            className="cursor-pointer text-3xl hover:text-primary"
          >
            {tab.title}
          </div>
        ))}
    </div>
  );
}
