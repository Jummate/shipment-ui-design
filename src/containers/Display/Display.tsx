import { useState, useEffect } from "react";

import Icon from "../../components/ui/Icon/Icon";
import "./Display.css";
import Button from "../../components/ui/Button/Button";
import Tab from "../../components/ui/Tab/Tab";
import Table from "../../components/Table/Table";
import { ShipmentItem } from "../../types";

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
  {
    shipmentID: "S/080124/004",
    commodity: "Gloves",
    destination: "India",
    type: "Sea",
    grossWeight: "3000 KG",
    status: "Processing",
  },
  {
    shipmentID: "S/080124/005",
    commodity: "Cape rubber",
    destination: "China",
    type: "Sea",
    grossWeight: "1000 KG",
    status: "Completed",
  },
  {
    shipmentID: "S/080124/006",
    commodity: "Pillows",
    destination: "Brasil",
    type: "Air",
    grossWeight: "2300 KG",
    status: "Processing",
  },
];

const tabOptions = ["All Shipments", "Sea Freight", "Air Freight"];

function Display() {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [originalShipmentData] = useState<ShipmentItem[]>(tableData);
  const [shipmentData, setShipmentData] = useState<ShipmentItem[]>(tableData);
  //   const [searchKeyword, setSearchKeyword] = useState<string>("");

  const handleDataFiltering = () => {
    if (tabOptions[selectedTab] == "All Shipments") {
      setShipmentData(originalShipmentData);
    } else if (tabOptions[selectedTab] == "Sea Freight") {
      const filteredData = originalShipmentData.filter(
        (item) => item.type == "Sea"
      );
      setShipmentData(filteredData);
    } else if (tabOptions[selectedTab] == "Air Freight") {
      const filteredData = originalShipmentData.filter(
        (item) => item.type == "Air"
      );
      setShipmentData(filteredData);
    }
  };

  const handleDataSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setShipmentData(originalShipmentData);
    } else {
      const filteredData = originalShipmentData.filter(
        (item) =>
          item.shipmentID.toLowerCase().includes(e.target.value) ||
          item.commodity.toLowerCase().includes(e.target.value) ||
          item.destination.toLowerCase().includes(e.target.value) ||
          item.type.toLowerCase().includes(e.target.value) ||
          item.grossWeight.toLowerCase().includes(e.target.value)
      );
      setShipmentData(filteredData);
    }
  };

  useEffect(() => {
    handleDataFiltering();
  }, [selectedTab]);
  return (
    <main className="Display-container">
      <header>
        <h1>SHIPMENTS</h1>
        <input
          placeholder="Search shipments..."
          //   value={searchKeyword}
          onChange={handleDataSearch}
        />

        <div className="icons-container">
          <Icon customStyles="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#5f6368"
            >
              <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
            </svg>
          </Icon>
          <Icon customStyles="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#5f6368"
            >
              <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
            </svg>
          </Icon>
          <Icon customStyles="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#5f6368"
            >
              <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
            </svg>
          </Icon>
        </div>
      </header>
      <div className="table-operations-container">
        <Tab
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
        <div className="action-buttons-container">
          <Button customStyles="bg-green">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#5f6368"
            >
              <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
            </svg>{" "}
            Add Shipment
          </Button>
          <Button customStyles="bg-blue">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#5f6368"
            >
              <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
            </svg>{" "}
            All Time
          </Button>
        </div>
      </div>

      <div>
        <Table shipmentData={shipmentData} />
      </div>
    </main>
  );
}

export default Display;
