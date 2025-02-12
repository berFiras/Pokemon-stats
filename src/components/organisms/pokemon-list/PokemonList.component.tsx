import { useCallback, useEffect, useState } from "react";
import PokemonService from "../../../services/pokemon-service/PokemonService";
import PokemonDetails from "../../molecules/pokemon-details/PokemonDetails.component";
import Pokemon from "../../../models/front/Pokemon.model";

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  const getPokemonList = useCallback(async () => {
    const result = await PokemonService.getPokemonsList();
    setPokemonList(result);
  }, []);

  useEffect(() => {
    getPokemonList().catch(() => {});
  }, [getPokemonList]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Pokemon List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {pokemonList?.map((item: Pokemon) => (
          <PokemonDetails pokemon={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
