export const pokemonsState = {
  byId: {
    1: {
      id: 1,
      name: 'bulbasaur',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      stats: [
        {
          base_stat: 45,
          name: 'speed',
          id: 6
        },
        {
          base_stat: 65,
          name: 'special-defense',
          id: 5
        },
        {
          base_stat: 65,
          name: 'special-attack',
          id: 4
        },
        {
          base_stat: 49,
          name: 'defense',
          id: 3
        },
        {
          base_stat: 49,
          name: 'attack',
          id: 2
        },
        {
          base_stat: 45,
          name: 'hp',
          id: 1
        }
      ],
      types: [
        {
          name: 'poison',
          id: 4,
          pokemons: [{ id: 1, name: 'bulbasaur' }]
        },
        {
          name: 'grass',
          id: 12
        }
      ],
      height: 7,
      weight: 69,
      abilities: [
        {
          name: 'chlorophyll',
          id: 34,
          short_effect: 'Doubles Speed during strong sunlight.'
        },
        {
          name: 'overgrow',
          id: 65
        }
      ]
    },
    2: {
      abilities: [
        {
          name: 'chlorophyll',
          id: 34
        },
        {
          name: 'overgrow',
          id: 65
        }
      ],
      weight: 130,
      height: 10,
      id: 2,
      name: 'ivysaur',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
      stats: [
        {
          base_stat: 60,
          name: 'speed',
          id: 6
        },
        {
          base_stat: 80,
          name: 'special-defense',
          id: 5
        },
        {
          base_stat: 80,
          name: 'special-attack',
          id: 4
        },
        {
          base_stat: 63,
          name: 'defense',
          id: 3
        },
        {
          base_stat: 62,
          name: 'attack',
          id: 2
        },
        {
          base_stat: 60,
          effort: 0,
          name: 'hp',
          id: 1
        }
      ],
      types: [
        {
          name: 'poison',
          id: 4
        }
      ]
    },
    3: {
      id: 3,
      name: 'venusaur',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png'
    }
  },
  allIds: [1, 2, 3]
};