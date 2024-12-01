import React, { useState } from "react";
import "./Tab.css";

const tabOptions = ["All Shipments", "Sea Freight", "Air Freight"];

function Tab() {
  const [selectedTab, setSelectedTab] = useState<Number>(0);
  return (
    <div className="Tab-wrapper">
      {tabOptions
        ? tabOptions.map((item, index) => (
            <div
              key={`${index}-${item}`}
              className={`Tab-item ${selectedTab == index ? "Tab-active" : ""}`}
              onClick={() => setSelectedTab(index)}
            >
              {item}
            </div>
          ))
        : null}
    </div>
  );
}

export default Tab;
