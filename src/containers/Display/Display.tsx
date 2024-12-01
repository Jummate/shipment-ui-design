import Icon from "../../components/ui/Icon/Icon";
import "./Display.css";
import Button from "../../components/ui/Button/Button";
import Tab from "../../components/ui/Tab/Tab";

function Display() {
  return (
    <main className="Display-container">
      <header>
        <h1>SHIPMENTS</h1>
        <input placeholder="Search shipments..." />

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
        <Tab />
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
    </main>
  );
}

export default Display;
