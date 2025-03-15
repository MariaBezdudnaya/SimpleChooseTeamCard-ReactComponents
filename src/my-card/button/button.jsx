import { JsStyles } from './button-styles';
import { Data } from "../../data/data";

export const Button = ({ onClick, active }) => {

  const ButtonStyles = {
    ...JsStyles,
    color: active ? "#d0d9c9" : "#3e395e",
    backgroundColor: active ? "#3e395e" : "#d0d9c9",  
  };

  return (
    <button
      onClick={onClick}
      style={ButtonStyles}
    >
      {Data.buttonText}
    </button>
  );
};