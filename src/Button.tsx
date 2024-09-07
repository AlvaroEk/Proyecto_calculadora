import React from "react";
import { ButtonProps } from './ButtonProps';// Importamos la interfaz desde su propio archivo 

const Button: React.FC<ButtonProps> = ({ value, onClick }) => {
    return (

        <button className="operator" onClick={onClick}>
        {value}
        </button>

    );
};
export default Button;