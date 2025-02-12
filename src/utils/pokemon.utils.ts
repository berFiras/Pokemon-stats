import Pokemon from "../models/front/Pokemon.model";

// Filter by Name
export const filterPokemonByName = (pokemonList: Pokemon[], name: string) => {
  return pokemonList.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(name.toLowerCase())
  );
};

// Filter by Stat
export const filterPokemonByStat = (
  pokemonList: Pokemon[],
  stat: string,
  value: number
) => {
  return pokemonList.filter((pokemon) => {
    const statValue =
      pokemon.stats.find(
        (elm: { name: string; value: number }) => elm.name === stat
      )?.value || 0;
    return statValue >= value;
  });
};

// Sort by Name
export const sortPokemonByName = (
  pokemonList: Pokemon[],
  order: "asc" | "desc"
) => {
  return [...pokemonList].sort((a, b) =>
    order === "asc"
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name)
  );
};

// Filter by Type
export const filterPokemonByType = (pokemonList: Pokemon[], type: string) => {
  return type
    ? pokemonList.filter((pokemon) =>
        pokemon.types.some(
          (t: string) => t.toLowerCase() === type.toLowerCase()
        )
      )
    : pokemonList;
};
