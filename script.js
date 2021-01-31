const types = [
  'fire',
  'grass',
  'electric',
  'water',
  'ground',
  'rock',
  'fairy',
  'poison',
  'bug',
  'dragon',
  'psychic',
  'flying',
  'fighting',
  'normal',
];

const POKEMON_COUNT = 12;

const getType = (data) => {
  const apiType = data.map(type => type.name);
  console.log(apiType);  
}

const fetchPokemon = async (number) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${number}`; 
  const response = await fetch(url).then((response) => response.json());
  const {id, name, types } = response;
  const type = getType(types);

  console.log(id, name, types);
  console.log(response);
}

fetchPokemon(1);