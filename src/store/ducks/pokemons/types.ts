export enum ActionTypes {
  FETCH_POKEMON_REQUEST = '@@pokemons/FETCH_POKEMON_REQUEST',
  FETCH_POKEMON_SUCCESS = '@@pokemons/FETCH_POKEMON_SUCCESS',
  FETCH_POKEMON_FAILURE = '@@pokemons/FETCH_POKEMON_FAILURE',
  FETCH_EVOLUTION_CHAIN_REQUEST = '@@pokemons/FETCH_EVOLUTION_CHAIN_REQUEST',
  FETCH_EVOLUTION_CHAIN_SUCCESS = '@@pokemons/FETCH_EVOLUTION_CHAIN_SUCCESS',
  FETCH_EVOLUTION_CHAIN_FAILURE = '@@pokemons/FETCH_EVOLUTION_CHAIN_FAILURE',
  FETCH_POKEMONS_BYTYPE_REQUEST = '@@pokemons/FETCH_POKEMONS_BYTYPE_REQUEST',
  FETCH_POKEMONS_BYTYPE_SUCCESS = '@@pokemons/FETCH_POKEMONS_BYTYPE_SUCCESS',
  FETCH_POKEMONS_BYTYPE_FAILURE = '@@pokemons/FETCH_POKEMONS_BYTYPE_FAILURE',
  FETCH_SHORT_EFFECT_BYABILITY_REQUEST = '@@pokemons/FETCH_SHORT_EFFECT_BYABILITY_REQUEST',
  FETCH_SHORT_EFFECT_BYABILITY_SUCCESS = '@@pokemons/FETCH_SHORT_EFFECT_BYABILITY_SUCCESS',
  FETCH_SHORT_EFFECT_BYABILITY_FAILURE = '@@pokemons/FETCH_SHORT_EFFECT_BYABILITY_FAILURE'
}

export type PokemonType = {
  id: number;
  name: string;
  pokemons: Array<{
    id: number;
    name: string;
  }>;
};

export type PokemonAbility = {
  id: number;
  name: string;
  short_effect?: string;
};

export type PokemonStat = {
  id: number;
  name: string;
  base_stat: number;
};

export type Pokemon = {
  id: number;
  name: string;
  image: string;
  evolvedFrom?: string;
  abilitiesById: IDictionary<PokemonAbility>;
  height: number;
  weight: number;
  stats: Array<PokemonStat>;
  typesById: IDictionary<PokemonType>;
};

export type PokemonState = Readonly<{
  byId: Readonly<IDictionary<Pokemon>>;
}>;
