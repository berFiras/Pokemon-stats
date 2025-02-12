import { PokemonDTO } from "../dto/PokemonDTO.model";

class Pokemon {
  id: number;
  name: string;
  image: string;
  hp: number;
  attack: number;
  defense: number;
  speed: number;
  types: string[];

  constructor(ref: PokemonDTO) {
    this.id = ref.id;
    this.name = ref.name;
    this.image = ref.sprites?.[0].sprite?.back_default || "";
    this.hp = ref.stats?.[0]?.base_stat || 0;
    this.attack = ref.stats?.[1]?.base_stat || 0;
    this.defense = ref.stats?.[2]?.base_stat || 0;
    this.speed = ref.stats?.[5]?.base_stat || 0;
    this.types = ref.types?.map((t) => t.type.name) || [];
  }
}

export default Pokemon;
