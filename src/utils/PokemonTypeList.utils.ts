import { POKEMON_TYPE_COLORS } from "./PokemonTypeColors";

const PokemonTypeList = Object.keys(POKEMON_TYPE_COLORS).map((item) => ({
  label: item.toUpperCase(),
  value: item,
}));

export default PokemonTypeList;
