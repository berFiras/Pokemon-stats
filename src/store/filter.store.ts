import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import PokemonFiltersState from "../types/pokemon-filters-state/PokemonFiltersState.type";

export const usePokemonFiltersStore = create<PokemonFiltersState>()(
  persist(
    (set) => ({
      searchName: "",
      selectedStat: "attack",
      statValue: 0,
      sortBy: "name",
      sortOrder: "asc",
      setSearchName: (name) => set({ searchName: name }),
      setSelectedStat: (stat) => set({ selectedStat: stat }),
      setStatValue: (value) => set({ statValue: value }),
      setSortBy: (sortBy) => set({ sortBy }),
      setSortOrder: (order) => set({ sortOrder: order }),
      resetFilters: () =>
        set({
          searchName: "",
          selectedStat: "attack",
          statValue: 0,
          sortBy: "name",
          sortOrder: "asc",
        }),
    }),
    {
      name: "pokemon-filters",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
