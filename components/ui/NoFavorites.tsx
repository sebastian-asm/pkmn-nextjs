import { Container, Text } from '@nextui-org/react';

export const NoFavorites = () => {
  return (
    <Container
      css={{
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh - 100px)',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
      }}
    >
      <Text h1>Aún no tienes PKMNs favoritos agregados</Text>
    </Container>
  );
};
