import Image from "../../atoms/image/Image.component";

const Loader = () => {
  return (
    <div className="flex items-center justify-center p-12 mt-36">
      <Image
        src={"/pokemonBull.svg"}
        alt="Loading"
        className="animate-bounce fadeInOut scale-40 delay-0"
      />
      <Image
        src={"/pokemonBull.svg"}
        alt="Loading"
        className="animate-bounce fadeInOut scale-100 delay-150"
      />
      <Image
        src={"/pokemonBull.svg"}
        alt="Loading"
        className="animate-bounce fadeInOut scale-110 delay-300"
      />
      <Image
        src={"/pokemonBull.svg"}
        alt="Loading"
        className="animate-bounce fadeInOut scale-125 delay-450"
      />
    </div>
  );
};

export default Loader;
