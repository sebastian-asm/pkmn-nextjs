const LS_FAVORITES = 'favorites';

export const toggleFavorites = (id: number) => {
  let favorites: number[] = JSON.parse(
    localStorage.getItem(LS_FAVORITES) || '[]'
  );

  if (favorites.includes(id)) {
    favorites = favorites.filter((pokeId) => pokeId !== id);
  } else {
    favorites.push(id);
  }

  localStorage.setItem(LS_FAVORITES, JSON.stringify(favorites));
};

export const inFavorites = (id: number): boolean => {
  // otra opcion para esperar hasta que el objeto window este disponible
  // y utilizar el localStorage
  // if (typeof window === 'undefined') return false;

  const favorites: number[] = JSON.parse(
    localStorage.getItem(LS_FAVORITES) || '[]'
  );
  return favorites.includes(id);
};

export const pokemons = (): number[] => {
  return JSON.parse(localStorage.getItem(LS_FAVORITES) || '[]');
};
