import { FC } from 'react';
import Head from 'next/head';

import { Navbar } from '../ui';

interface Props {
  title?: string;
}

// comprobar cuando este el object window disponible
const origin = typeof window !== 'undefined' ? window.location.origin : '';

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'PKMN Web'}</title>
        <meta name="author" content="Sebastián" />
        <meta name="description" content={`Información del Pokémon ${title}`} />

        {/* open graph meta tags */}
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content={`Información del Pokémon ${title}`}
        />
        {/* se recomineda que la url de la imagen sea su ruta absoluta */}
        <meta property="og:image" content={`${origin}/assets/img/banner.png`} />
      </Head>
      <Navbar />
      <main style={{ padding: '0 20px' }}>{children}</main>
    </>
  );
};
