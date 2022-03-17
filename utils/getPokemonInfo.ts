import { pokeApi } from '../api';
import { Pokemon } from '../interfaces';

export const getPokemonInfo = async (value: string) => {
  // manejando el parametro recibido en la url en caso de recibir un valor
  // fuera del rango total de la cantidad de los pkmns
  try {
    // value recibe el nombre o id del pkmn
    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${value}`);

    // optimizando la data recibida por la API
    return {
      id: data.id,
      name: data.name,
      sprites: data.sprites,
    };
  } catch {
    return null;
  }
};
