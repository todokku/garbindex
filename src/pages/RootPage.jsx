import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

const PokedexPage = lazy(() => import('./PokedexPage'));
const HuntingPage = lazy(() => import('./HuntingPage'));
const PokemonPage = lazy(() => import('./PokemonPage'));
const NotFoundPage = lazy(() => import('./NotFoundPage'));

function RootPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={PokedexPage} />
        <Route exact path="/pokemons" component={HuntingPage} />
        <Route exact path="/pokemons/:id(\d+)" component={PokemonPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Suspense>
  );
}

export default RootPage;
