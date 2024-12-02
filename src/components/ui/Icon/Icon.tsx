import { ReactNode } from "react";
import "./Icon.css";

type IconProps = {
  customStyles: string;
  children: ReactNode;
};

function Icon({ customStyles = "", children }: IconProps) {
  return <div className={`Icon ${customStyles}`}>{children}</div>;
}

export default Icon;
