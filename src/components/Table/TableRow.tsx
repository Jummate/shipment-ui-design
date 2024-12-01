import React from "react";

import Button from "../ui/Button/Button";

type RowData = {
  shipmentID: string;
  commodity: string;
  destination: string;
  type: string;
  grossWeight: string;
  status: string;
};

type TableRowProps = {
  rowData: RowData;
};

function TableRow({
  rowData: { shipmentID, commodity, destination, type, grossWeight, status },
}: TableRowProps) {
  return (
    <tr>
      <td>{shipmentID}</td>
      <td>{commodity}</td>
      <td>{destination}</td>
      <td>{type}</td>
      <td>{grossWeight}</td>
      <td>
        <Button>Generate Tender</Button>
      </td>
      <td>
        <Button customStyles="bg-blue">{status}</Button>
      </td>
    </tr>
  );
}

export default TableRow;
