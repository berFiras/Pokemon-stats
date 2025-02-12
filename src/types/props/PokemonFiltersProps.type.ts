interface PokemonFiltersProps {
  onSearchByName: (name: string) => void;
  onSearchByStat: (stat: string, value: number) => void;
  onSortByName: () => void;
  onSortByType: (type: string) => void;
  onResetFilters: () => void;
}

export default PokemonFiltersProps;
