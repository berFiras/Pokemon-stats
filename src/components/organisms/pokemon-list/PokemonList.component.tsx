import { useCallback, useEffect, useState } from "react";
import PokemonService from "../../../services/pokemon-service/PokemonService";
import PokemonDetails from "../../molecules/pokemon-details/PokemonDetails.component";
import Pokemon from "../../../models/front/Pokemon.model";
import { useHttp } from "../../../hooks/use-http/useHttp.hooks";
import Loader from "../../molecules/loader/Loader.component";

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const { sendRequest, isLoading } = useHttp();
  console.log("isLoading: ", isLoading);

  const getPokemonList = useCallback(async () => {
    const { response } = await sendRequest(PokemonService.getPokemonsList);
    setPokemonList(response as Pokemon[]);
  }, []);

  useEffect(() => {
    getPokemonList().catch(() => {});
  }, [getPokemonList]);

  return (
    <div className="container mx-auto p-4">
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <h1 className="text-3xl font-bold text-center mb-8">Pokemon List</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {pokemonList?.map((item: Pokemon) => (
              <PokemonDetails pokemon={item} key={item.id} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default PokemonList;
