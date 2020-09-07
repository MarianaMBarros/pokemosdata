import axios from 'axios'

export async function getDetail(num) {
  const response = await axios.get(`${process.env.PUBLIC_URL}/pokemon.json`);

  const current = response.data.find(item => item.num === num)
  let nextId = current.id + 1
  if (nextId === 152) {
    nextId = 1
  }
  let previousId = current.id - 1;
  if (previousId === 0) {
    previousId = 151
  }
  const next = response.data.find(item => item.id === nextId);
  const previous = response.data.find(item => item.id === previousId);
  return { current, next, previous }
}

export async function get(limit, type, name, orderBy) {
  const response = await axios.get(`${process.env.PUBLIC_URL}/pokemon.json`);
  let pokemons = response.data;
  if (type !== null && type !== "Todos") {
    pokemons = pokemons.filter(item => item.type.includes(type));
  }
  if (name !== null) {
    pokemons = pokemons.filter(item => item.name.toLowerCase().includes(name));
  }
  pokemons = pokemons.sort(dynamicSort(orderBy));
  return pokemons.slice(0, limit);
}

export async function getType() {
  const response = await axios.get(`${process.env.PUBLIC_URL}/pokemon.json`);
  let filterType = response.data.reduce((prev, curr) => [...prev, ...curr.type], [])
  const sortType = [...new Set(filterType)].sort();
  return ["Todos", ...sortType];
}

function dynamicSort(property) {
  let sortOrder = 1;
  if (property[0] === "-") {
    sortOrder = -1;
    property = property.substr(1);
  }
  return function (a, b) {
    if (sortOrder == -1) {
      return b[property].localeCompare(a[property]);
    } else {
      return a[property].localeCompare(b[property])
    }
  }
}