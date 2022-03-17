import { FC } from 'react';
import { useRouter } from 'next/router';

import { Grid, Card } from '@nextui-org/react';

interface Props {
  pkmnId: number;
}

export const PokemonFavoriteCard: FC<Props> = ({ pkmnId }) => {
  const { push } = useRouter();

  return (
    <Grid key={pkmnId} xs={6} sm={3} xl={1}>
      <Card
        onClick={() => push(`/pokemon/${pkmnId}`)}
        css={{ padding: '10px' }}
        hoverable
        clickable
      >
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pkmnId}.svg`}
          width="100%"
          height={140}
        ></Card.Image>
      </Card>
    </Grid>
  );
};
