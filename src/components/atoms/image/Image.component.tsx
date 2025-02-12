import ImageProps from "../../../types/props/ImageProps.type";

const Image = (props: ImageProps) => {
  const { src, alt, className } = props;

  return (
    <img src={src} alt={alt} className={`w-32 h-32 mx-auto ${className}`} />
  );
};

export default Image;
