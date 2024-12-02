// import React from "react";

import Button from "../ui/Button/Button";
import { ShipmentItem } from "../../types";

type TableRowProps = {
  rowData: ShipmentItem;
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
