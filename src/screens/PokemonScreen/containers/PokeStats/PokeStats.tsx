import React from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';

import usePokemonId from '../../hooks/usePokemonId';
import PokeStatsItem from './PokeStatsItem';
import { selectors } from 'store/ducks/pokemons';

function PokeStats() {
  const pokemonId = usePokemonId();
  const { stats } = useSelector(selectors.getPokemonById(pokemonId));

  return (
    <Grid container direction="column" spacing={1}>
      {stats.map(({ id, name, base_stat }) => (
        <PokeStatsItem key={id} name={name} value={base_stat} />
      ))}
    </Grid>
  );
}

export default PokeStats;
