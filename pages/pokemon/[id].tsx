import { useState, useEffect } from 'react';
import { GetStaticProps, GetStaticPaths, NextPage } from 'next';

import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';
import confetti from 'canvas-confetti';

import { Layout } from '../../components/layouts';
import { Pokemon } from '../../interfaces';
import { toggleFavorites, inFavorites } from '../../utils/localStorage';
import { getPokemonInfo } from '../../utils';

interface Props {
  pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  const [isInFavorites, setIsInFavorites] = useState(false);

  // useEffect para tener disponible el localStorage, en vista que Next primero ejecutar
  // del lado del servidor y despues del lado del cliente y asi tener el object window
  useEffect(() => setIsInFavorites(inFavorites(pokemon.id)), [
    setIsInFavorites,
    pokemon,
  ]);

  const handleToggleFavorite = () => {
    toggleFavorites(pokemon.id);
    setIsInFavorites(!isInFavorites);

    if (!isInFavorites)
      confetti({
        zIndex: 2,
        particleCount: 100,
        spread: 160,
        angle: -160,
        origin: {
          x: 1,
          y: 0,
        },
      });
  };

  return (
    <Layout title={pokemon.name}>
      <Grid.Container css={{ marginTop: '5px' }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card hoverable css={{ padding: '30px' }}>
            <Card.Body>
              <Card.Image
                src={
                  pokemon.sprites.other?.dream_world.front_default ||
                  '/no-image.png'
                }
                alt={pokemon.name}
                width="100%"
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header
              css={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <Text h1 transform="capitalize">
                {pokemon.name}
              </Text>
              <Button
                onClick={handleToggleFavorite}
                ghost={!isInFavorites}
                color="gradient"
              >
                {isInFavorites ? 'En favoritos' : 'Agregar a favoritos'}
              </Button>
            </Card.Header>

            <Card.Body>
              <Text size={30}>Sprites</Text>
              <Container display="flex" direction="row">
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

// indicando todos los path que hay disponible en el momento de build
// static path siempre necesita static props
export const getStaticPaths: GetStaticPaths = async () => {
  const pkmn151 = [...Array(151)].map((v, i) => `${i + 1}`);

  return {
    // el id del path es el nombre del archivo [id]
    paths: pkmn151.map((id) => ({ params: { id } })),
    // fallback: false, // si el path no existe manda 404
    // blocking es lo que nos permite implementar ISG
    fallback: 'blocking',
  };
};

// una vez que se ejecuta static paths pasa a static props
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  const pokemon = await getPokemonInfo(id);

  // incremental static generation (ISG)
  // si se recibe null por parte de la funcion, se entiende que el pkmn no existe
  // en ese caso volvemos al usuario al home
  if (!pokemon) {
    return {
      redirect: {
        destination: '/',
        permanent: false, // se indica si es una redireccion permanente o no
      },
    };
  }

  return {
    props: {
      pokemon,
    },
    // incremental static regeneration (ISR): actualizar continuamente la pagina segun el tiempo indicado
    // recibe el valor en segundos
    revalidate: 86400, // 24 horas
  };
};

export default PokemonPage;
