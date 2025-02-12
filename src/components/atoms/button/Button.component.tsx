import ButtonProps from "../../../types/props/ButtonProps.type";

const Button = (props: ButtonProps) => {
  const { onClick, buttonValue, className = "", disabled = false } = props;

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition ${className}`}
    >
      {buttonValue}
    </button>
  );
};

export default Button;
