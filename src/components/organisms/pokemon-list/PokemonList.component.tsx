import { useCallback, useEffect, useState } from "react";
import PokemonService from "../../../services/pokemon-service/PokemonService";
import PokemonDetails from "../../molecules/pokemon-details/PokemonDetails.component";
import Pokemon from "../../../models/front/Pokemon.model";
import { useHttp } from "../../../hooks/use-http/useHttp.hooks";
import Loader from "../../molecules/loader/Loader.component";
import PokemonFilters from "../../molecules/pokemon-filters/PokemonFilters.component";
import { usePokemonFiltersStore } from "../../../store/filter.store";
import {
  filterPokemonByName,
  filterPokemonByStat,
  sortPokemonByName,
  filterPokemonByType,
} from "../../../utils/pokemon.utils";

const PAGE_SIZE = 8;

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [filteredPokemonList, setFilteredPokemonList] = useState<Pokemon[]>([]);
  const [offset, setOffset] = useState(0);
  const { sendRequest, isLoading } = useHttp();

  const {
    searchName,
    selectedStat,
    statValue,
    sortBy,
    sortOrder,
    setSortOrder,
  } = usePokemonFiltersStore();

  useEffect(() => {
    getPokemonList().catch(() => {});
  }, []);

  // Get Initial Pokemon List
  const getPokemonList = useCallback(async () => {
    const { response } = await sendRequest(
      PokemonService.getPokemonsList,
      PAGE_SIZE,
      0
    );

    if (response) {
      setPokemonList(response as Pokemon[]);
      applyFilters(response as Pokemon[]);
    }
  }, []);

  // Apply filters and sorting
  const applyFilters = useCallback(
    (list: Pokemon[]) => {
      let filteredList = list;

      if (searchName) {
        filteredList = filterPokemonByName(filteredList, searchName);
      }

      if (selectedStat && statValue > 0) {
        filteredList = filterPokemonByStat(
          filteredList,
          selectedStat,
          statValue
        );
      }

      if (sortBy === "name") {
        filteredList = sortPokemonByName(filteredList, sortOrder);
        setSortOrder(sortOrder === "asc" ? "desc" : "asc");
      } else if (sortBy === "type") {
        filteredList = filterPokemonByType(filteredList, sortOrder);
      }

      setFilteredPokemonList(filteredList);
    },
    [searchName, selectedStat, statValue, sortBy, sortOrder, setSortOrder]
  );

  // Handle Load More Pokemons
  const handleLoadMore = useCallback(async () => {
    const nextOffset = offset + PAGE_SIZE;

    const { response } = await sendRequest(
      PokemonService.getPokemonsList,
      PAGE_SIZE,
      nextOffset
    );
    if (response) {
      const newPokemonList = [...pokemonList, ...(response as Pokemon[])];
      setPokemonList(newPokemonList);
      applyFilters(newPokemonList);
      setOffset(nextOffset);
      // Scroll to page bottom after load more
      setTimeout(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      }, 0);
    }
  }, [offset, pokemonList, applyFilters]);

  // Handle Reset all filters
  const onResetFilters = useCallback(() => {
    setFilteredPokemonList(pokemonList);
  }, [pokemonList]);

  return (
    <div className="container mx-auto p-4">
      <PokemonFilters
        onSearchByName={() => applyFilters(pokemonList)}
        onSearchByStat={() => applyFilters(pokemonList)}
        onSortByName={() => applyFilters(pokemonList)}
        onSortByType={() => applyFilters(pokemonList)}
        onResetFilters={onResetFilters}
      />
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredPokemonList.map((item: Pokemon) => (
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
