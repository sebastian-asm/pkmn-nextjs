import { useState, useEffect } from 'react';

import { Layout } from '../../components/layouts';
import { NoFavorites } from '../../components/ui';
import { pokemons } from '../../utils';
import { PokemonFavorites } from '../../components/pokemon';

const Favorites = () => {
  const [pkmnFavorites, setPkmnFavorites] = useState<number[]>([]);

  useEffect(() => setPkmnFavorites(pokemons()), []);

  return (
    <Layout title="Lista de PKMNs favoritos">
      {pkmnFavorites.length > 0 ? (
        <PokemonFavorites pkmnFavorites={pkmnFavorites} />
      ) : (
        <NoFavorites />
      )}
    </Layout>
  );
};

export default Favorites;
