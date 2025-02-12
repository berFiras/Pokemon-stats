import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { GET_POKEMONS } from "../../graphql/queries/getPokemonQuery";
import Pokemon from "../../models/front/Pokemon.model";
import { PokemonDTO } from "../../models/dto/PokemonDTO.model";

class PokemonService {
  private static client: ApolloClient<NormalizedCacheObject>;

  private static getClient(): ApolloClient<NormalizedCacheObject> {
    if (!PokemonService.client) {
      PokemonService.client = new ApolloClient({
        uri: "https://beta.pokeapi.co/graphql/v1beta", // PokeAPI Endpoint
        cache: new InMemoryCache(),
      });
    }
    return PokemonService.client;
  }

  public static async getPokemonsList() {
    try {
      const { data } = await PokemonService.getClient().query({
        query: GET_POKEMONS,
      });
      console.log("data: ", data);
      const result = PokemonService.transformPokemonList(data.pokemon_v2_pokemon)
      console.log('result: ', result);
      return PokemonService.transformPokemonList(data.pokemon_v2_pokemon);
    } catch (error) {
      console.error("Error fetching Pokemon list:", error);
      return [];
    }
  }

  // Format the pokemons list response
  private static transformPokemonList(data: PokemonDTO[]) {
    return data.map((p: PokemonDTO) => new Pokemon(p));
  }
}

export default PokemonService;
