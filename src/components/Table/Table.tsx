import TableHeader from "./TableHeader";
import "./Table.css";
import TableRow from "./TableRow";
import { ShipmentItem } from "../../types";

type TableProps = {
  shipmentData: ShipmentItem[];
};

function Table({ shipmentData }: TableProps) {
  return (
    <table className="Table">
      <TableHeader />
      <tbody>
        {shipmentData.map((item) => (
          <TableRow
            key={item.shipmentID}
            rowData={item}
          />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
