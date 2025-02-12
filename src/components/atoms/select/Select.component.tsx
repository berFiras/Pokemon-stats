import SelectProps from "../../../types/props/SelectProps.type";

const Select = (props: SelectProps) => {
  const { value, onChange, options, className = "" } = props;

  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`px-4 py-2 border text-black rounded-lg ${className}`}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
