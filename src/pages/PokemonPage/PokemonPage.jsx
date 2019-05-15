import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent } from '@material-ui/core';
import styled from 'styled-components';
import { compose } from 'redux';
import { connect } from 'react-redux';
import isEmpty from 'lodash.isempty';
import history from 'utils/history';

import { withPageLayout } from 'components/PageLayout';
import HeaderInfo from './containers/HeaderInfo';
import PokeImage from './containers/PokeImage';
import PokeTypes from './containers/PokeTypes';
import PokeProfile from './containers/PokeProfile';
import PokeEvolution from './containers/PokeEvolution';
import { selectors, actions } from 'store/ducks/pokemons';

const CardContentStyled = styled(CardContent)`
  && {
    padding-top: 0px;
  }
`;

class PokemonPage extends Component {
  componentDidMount() {
    const { pokemon, match, fetchPokemon } = this.props;
    if (isEmpty(pokemon)) fetchPokemon(match.params.id);
  }

  render() {
    if (isEmpty(this.props.pokemon)) return <span>Loading...</span>;

    return (
      <Card>
        <HeaderInfo />
        <CardContentStyled>
          <PokeImage />
          <PokeTypes />
          <PokeProfile />
          <PokeEvolution />
        </CardContentStyled>
      </Card>
    );
  }
}

PokemonPage.propTypes = {
  pokemon: PropTypes.object,
  match: PropTypes.object.isRequired,
  fetchPokemon: PropTypes.func.isRequired
};

const mapStateToProps = (state, { match }) => ({
  pokemon: selectors.getPokemonById(state, match.params.id)
});

const mapDispatchToProps = {
  fetchPokemon: actions.fetchPokemon.request
};

const handleBackClick = () => {
  const { state } = history.location;
  if (state) {
    history.push(state.from);
    return;
  }

  history.push('/');
};

export default compose(
  withPageLayout({
    title: 'Pokémon Detail',
    onBackClick: handleBackClick
  }),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(PokemonPage);
