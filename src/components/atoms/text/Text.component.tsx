import TextProps from "../../../types/props/TextProps.type";

const Text = (props: TextProps) => {
  const { children, className } = props;
  return <p className={`text-sm ${className}`}>{children}</p>;
};

export default Text;
