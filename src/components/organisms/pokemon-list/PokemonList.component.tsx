import { useCallback, useEffect, useState } from "react";
import PokemonService from "../../../services/pokemon-service/PokemonService";
import PokemonDetails from "../../molecules/pokemon-details/PokemonDetails.component";
import Pokemon from "../../../models/front/Pokemon.model";
import { useHttp } from "../../../hooks/use-http/useHttp.hooks";
import Loader from "../../molecules/loader/Loader.component";

const PAGE_SIZE = 8;

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  console.log("pokemonList: ", pokemonList);
  const [offset, setOffset] = useState(0);
  console.log("offset: ", offset);
  const { sendRequest, isLoading } = useHttp();

  useEffect(() => {
    getPokemonList().catch(() => {});
  }, []);

  // Get Intianl Pokemon List
  const getPokemonList = useCallback(async () => {
    const { response } = await sendRequest(
      PokemonService.getPokemonsList,
      PAGE_SIZE,
      0
    );

    if (response) {
      setPokemonList(response as Pokemon[]);
    }
  }, []);

  //Handle load more Pokemons
  const handleLoadMore = useCallback(async () => {
    const nextOffset = offset + PAGE_SIZE;

    const { response } = await sendRequest(
      PokemonService.getPokemonsList,
      PAGE_SIZE,
      nextOffset
    );
    if (response) {
      setPokemonList((prevList) => [...prevList, ...(response as Pokemon[])]);
      setOffset(nextOffset);
      // Scroll to page bottom after load more
      setTimeout(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      }, 0);
    }
  }, [offset]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Pokémon List</h1>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {pokemonList.map((item: Pokemon) => (
              <PokemonDetails pokemon={item} key={item.id} />
            ))}
          </div>
          <div className="flex justify-center mt-6">
            <button
              onClick={handleLoadMore}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Load More
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default PokemonList;
