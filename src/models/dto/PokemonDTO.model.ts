export interface PokemonDTO {
  id: number;
  name: string;
  sprites?: {
    sprite: Record<string, string>;
  }[];
  stats: {
    base_stat: number;
    stat_name: {
      name: string;
    };
  }[];
  types: {
    type: {
      name: string;
    };
  }[];
}
