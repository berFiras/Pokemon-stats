import { PokemonDTO } from "../dto/PokemonDTO.model";

class Pokemon {
  id: number;
  name: string;
  image: string;
  stats: { name: string; value: number }[];
  types: string[];

  constructor(ref: PokemonDTO) {
    this.id = ref.id;
    this.name = ref.name;
    this.image = ref.sprites?.[0].sprite?.back_default || "";
    this.stats = defineStats(ref) ?? [];
    this.types = ref.types?.map((t) => t.type.name) || [];
  }
}

function defineStats(ref: PokemonDTO) {
  if (!ref?.stats) return;
  return ref?.stats?.map((elm) => ({
    name: elm.stat_name.name,
    value: elm.base_stat,
  }));
}

export default Pokemon;
