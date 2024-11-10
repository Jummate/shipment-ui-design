import { ReactNode } from "react";
import "./Button.css";


type ButtonProps = {
    customStyles: string;
    children:ReactNode
} 

function Button({customStyles, children}:ButtonProps) {
    return (
        <button className={`button ${customStyles}`}>
            {children}
        </button>
    );
}

export default Button;