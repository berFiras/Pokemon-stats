import Image from "../../atoms/image/Image.component";
import Text from "../../atoms/text/Text.component";
import Badge from "../../atoms/badge/Badge.component";
import PokemonDetailsProps from "../../../types/props/PokemonDeatilsProps.type";

const PokemonDetails = (props: PokemonDetailsProps) => {
  const { pokemon } = props;

  return (
    <div className="p-2 border rounded-xl shadow-lg bg-white dark:bg-gray-800 hover:shadow-xl transition-shadow duration-300 w-80">
      <div className="flex justify-center">
        <Image
          src={pokemon.image}
          alt={pokemon.name ?? "name"}
          className="w-36 h-36 object-contain"
        />
      </div>

      <h2 className="text-2xl font-bold text-center capitalize text-gray-800 dark:text-white mb-4">
        {`#${pokemon.id} ${pokemon.name}`}
      </h2>

      <div className="grid grid-cols-3 gap-2">
        {pokemon.stats?.map((stat) => (
          <div
            key={stat.name}
            className="flex flex-col items-center bg-gray-200 dark:bg-gray-700 p-2 rounded-lg"
          >
            <Text className="text-xs font-medium text-gray-600 dark:text-gray-300 capitalize">
              {stat.name}
            </Text>
            <Text className="text-sm font-bold text-gray-800 dark:text-white">
              {stat.value}
            </Text>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {pokemon.types.map((type) => (
          <Badge key={type} text={type} />
        ))}
      </div>
    </div>
  );
};

export default PokemonDetails;
