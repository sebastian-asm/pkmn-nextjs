import { FC } from 'react';
import Head from 'next/head';

import { Navbar } from '../ui';

interface Props {
  title?: string;
}

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'PKMN Web'}</title>
        <meta name="author" content="Sebastián" />
        <meta name="description" content="Información del Pokémon..." />
      </Head>
      <Navbar />
      <main style={{ padding: '0 20px' }}>{children}</main>
    </>
  );
};
