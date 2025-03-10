import React, { useState } from "react";

const Tabs = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <div>
        {items.map((item, index) => (
          <button key={index} onClick={() => setActiveIndex(index)}>
            {item.label}
          </button>
        ))}
      </div>
      <div>
        {items[activeIndex].content}
      </div>
    </div>
  );
};

const App = () => {
  const tabsData = [
    { label: "Tab 1", content: "This is the content of Tab 1." },
    { label: "Tab 2", content: "This is the content of Tab 2." },
    { label: "Tab 3", content: "This is the content of Tab 3." },
  ];

  return <Tabs items={tabsData} />;
};

export default App;