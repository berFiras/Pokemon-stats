import Select from "../../atoms/select/Select.component";
import Input from "../../atoms/input/Input.component";
import Button from "../../atoms/button/Button.component";
import { usePokemonFiltersStore } from "../../../store/filter.store";
import PokemonFiltersProps from "../../../types/props/PokemonFiltersProps.type";
import PokemonTypeListe from "../../../utils/PokemonTypeList.utils";
import PokemonStatsList from "../../../utils/PokemonStatsList.utlis";
import { useCallback, useMemo } from "react";

const PokemonFilters = (props: PokemonFiltersProps) => {
  const {
    onSearchByName,
    onSearchByStat,
    onSortByName,
    onSortByType,
    onResetFilters,
  } = props;

  const {
    searchName,
    selectedStat,
    statValue,
    setSearchName,
    setSelectedStat,
    setStatValue,
    resetFilters,
  } = usePokemonFiltersStore();

  // Handle seach by name
  const handleSearchByName = useCallback(() => {
    onSearchByName(searchName);
  }, [searchName]);

  // Handle Search by stats
  const handleSearchByStat = useCallback(() => {
    onSearchByStat(selectedStat, statValue);
  }, [selectedStat, statValue]);

  // Handle reset Filters
  const handleResetFilters = useCallback(() => {
    resetFilters();
    onResetFilters();
  }, []);

  const isFilterApplied = useMemo(
    () => searchName !== "" || selectedStat !== "attack" || statValue !== 0,
    [searchName, selectedStat, statValue]
  );

  return (
    <div className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Filters
          </h3>

          <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium text-gray-900 dark:text-white">
              Search by Name
            </label>
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="Enter Pokémon name..."
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
                className="flex-1 dark:bg-gray-700 dark:text-white dark:border-gray-600"
              />
              <Button buttonValue="Search" onClick={handleSearchByName} />
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium text-gray-900 dark:text-white">
              Search by Stat
            </label>
            <div className="flex gap-2">
              <Select
                value={selectedStat}
                onChange={(value) => setSelectedStat(value)}
                options={PokemonStatsList}
                className="flex-1 dark:bg-gray-700 dark:text-white dark:border-gray-600"
              />
              <Input
                type="number"
                placeholder="Value"
                value={statValue}
                onChange={(e) => setStatValue(Number(e.target.value))}
                className="w-24 dark:bg-gray-700 dark:text-white dark:border-gray-600"
              />
              <Button buttonValue="Search" onClick={handleSearchByStat} />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Sorting
          </h3>

          <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium text-gray-900 dark:text-white">
              Sort by Name
            </label>
            <Button buttonValue="Sort by Name" onClick={onSortByName} />
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium text-gray-900 dark:text-white">
              Sort by Type
            </label>
            <Select
              onChange={(value) => onSortByType(value)}
              options={PokemonTypeListe}
              className="w-full dark:bg-gray-700 dark:text-white dark:border-gray-600"
            />
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <Button
          buttonValue="Reset All Filters"
          onClick={handleResetFilters}
          className="bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700"
          disabled={!isFilterApplied}
        />
      </div>
    </div>
  );
};

export default PokemonFilters;
