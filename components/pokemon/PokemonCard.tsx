import { FC } from 'react';
import { useRouter } from 'next/router';

import { Card, Grid, Row, Text } from '@nextui-org/react';

import { SmallPokemon } from '../../interfaces';

interface Props {
  pokemon: SmallPokemon;
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {
  const { push } = useRouter();
  const { id, name, img } = pokemon;

  const handleClick = () => push(`/name/${name}`);

  return (
    <Grid key={id} xs={12} sm={6} md={4} lg={3}>
      <Card onClick={handleClick} hoverable clickable>
        <Card.Body>
          <Card.Image src={img} width="100%" height={140} />
        </Card.Body>

        <Card.Footer>
          <Row justify="space-between">
            <Text weight="bold" transform="capitalize">
              {name}
            </Text>
            <Text>#{id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
