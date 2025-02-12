import InputProps from "../../../types/props/InputProps.type";

const Input = (props: InputProps) => {
  const { type, placeholder, value, onChange, className = "" } = props;

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`px-4 py-2 border text-black rounded-lg ${className}`}
    />
  );
};

export default Input;
