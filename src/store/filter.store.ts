import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import PokemonFiltersState from "../types/pokemon-filters-state/PokemonFiltersState.type";

export const usePokemonFiltersStore = create<PokemonFiltersState>()(
  persist(
    (set, get) => ({
      searchName: "",
      selectedStat: "",
      statValue: 0,
      typeValue: "",
      sortBy: "name",
      sortOrder: "asc",

      setSearchName: (name) => set({ searchName: name }),
      setSelectedStat: (stat) => set({ selectedStat: stat }),
      setStatValue: (value) => set({ statValue: value }),
      setTypeValue: (value) => set({ typeValue: value }),
      setSortBy: (sortBy) => set({ sortBy }),
      setSortOrder: (order) => set({ sortOrder: order }),

      applyFilters: () => {
        const {
          searchName,
          selectedStat,
          statValue,
          sortBy,
          sortOrder,
          typeValue,
        } = get();
        return {
          searchName,
          selectedStat,
          statValue,
          sortBy,
          sortOrder,
          typeValue,
        };
      },

      resetFilters: () =>
        set({
          searchName: "",
          selectedStat: "",
          typeValue: "",
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
