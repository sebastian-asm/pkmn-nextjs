import { FC } from 'react';

import { Grid } from '@nextui-org/react';

import { PokemonFavoriteCard } from './';

interface Props {
  pkmnFavorites: number[];
}

export const PokemonFavorites: FC<Props> = ({ pkmnFavorites }) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {pkmnFavorites.map((pkmnId) => (
        <PokemonFavoriteCard key={pkmnId} pkmnId={pkmnId} />
      ))}
    </Grid.Container>
  );
};
