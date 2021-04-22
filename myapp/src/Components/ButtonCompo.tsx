import React from 'react';

interface IButtonCompo {
    charOfButton?: string;
    onNumberChange?: () => void;
}

const ButtonCompo:React.FC<IButtonCompo> = ({ charOfButton, onNumberChange }) => {

    return (
        <button onClick={onNumberChange}>{charOfButton}</button>
    );
};
export default ButtonCompo;


