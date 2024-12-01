import React from "react";

const headerOptions = [
  "Shipment ID",
  "Commodity",
  "Destination",
  "Type",
  "Gross Weight",
];
function TableHeader() {
  return (
    <thead>
      <tr>
        {headerOptions.map((item, index) => (
          <th key={`${index}-${item}`}>{item}</th>
        ))}
        <th></th>
        <th></th>
      </tr>
    </thead>
  );
}

export default TableHeader;
