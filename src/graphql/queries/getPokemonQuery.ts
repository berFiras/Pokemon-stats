import { gql } from "@apollo/client";

export const GET_POKEMONS = gql`
  query GetPokemons($limit: Int, $offset: Int) {
    pokemon_v2_pokemon(limit: $limit, offset: $offset) {
      id
      name
      sprites: pokemon_v2_pokemonsprites {
        sprite: sprites
      }
      stats: pokemon_v2_pokemonstats {
        base_stat
        stat_name: pokemon_v2_stat {
          name
        }
      }
      types: pokemon_v2_pokemontypes {
        type: pokemon_v2_type {
          name
        }
      }
    }
  }
`;
