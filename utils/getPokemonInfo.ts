import { pokeApi } from '../api';
import { Pokemon } from '../interfaces';

export const getPokemonInfo = async (value: string) => {
  // value recibe el nombre o id del pkmn
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${value}`);

  // optimizando la data recibida por la API
  return {
    id: data.id,
    name: data.name,
    sprites: data.sprites,
  };
};
