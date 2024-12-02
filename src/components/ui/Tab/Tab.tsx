// import React, { useState } from "react";
import "./Tab.css";

type TabProps = {
  selectedTab: number;
  setSelectedTab: React.Dispatch<React.SetStateAction<number>>;
};

const tabOptions = ["All Shipments", "Sea Freight", "Air Freight"];

function Tab({ selectedTab, setSelectedTab }: TabProps) {
  return (
    <div className="Tab-wrapper">
      {tabOptions
        ? tabOptions.map((item, index) => (
            <div
              key={`${index}-${item}`}
              className={`Tab-item ${selectedTab == index ? "Tab-active" : ""}`}
              onClick={() => {
                setSelectedTab(index);
              }}
            >
              {item}
            </div>
          ))
        : null}
    </div>
  );
}

export default Tab;
