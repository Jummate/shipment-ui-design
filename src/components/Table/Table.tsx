import TableHeader from "./TableHeader";
import "./Table.css";
import TableRow from "./TableRow";

const tableData = [
  {
    shipmentID: "S/080124/001",
    commodity: "Gloves",
    destination: "China",
    type: "Sea",
    grossWeight: "1500 KG",
    status: "Processing",
  },
  {
    shipmentID: "S/080124/002",
    commodity: "Cape rubber",
    destination: "Greece",
    type: "Sea",
    grossWeight: "1700 KG",
    status: "Completed",
  },
  {
    shipmentID: "S/080124/003",
    commodity: "Pillows",
    destination: "Brasil",
    type: "Air",
    grossWeight: "2300 KG",
    status: "Processing",
  },
];

function Table() {
  return (
    <table className="Table">
      <TableHeader />
      {tableData.map((item) => (
        <TableRow
          key={item.shipmentID}
          rowData={item}
        />
      ))}
    </table>
  );
}

export default Table;
