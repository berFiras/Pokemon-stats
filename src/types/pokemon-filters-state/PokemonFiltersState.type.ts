interface PokemonFiltersState {
  searchName: string;
  selectedStat: string;
  statValue: number;
  sortBy: "name" | "type";
  sortOrder: "asc" | "desc";
  setSearchName: (name: string) => void;
  setSelectedStat: (stat: string) => void;
  setStatValue: (value: number) => void;
  setSortBy: (sortBy: "name" | "type") => void;
  setSortOrder: (order: "asc" | "desc") => void;
  resetFilters: () => void;
}

export default PokemonFiltersState;
