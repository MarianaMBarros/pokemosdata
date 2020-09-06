import axios from 'axios'

export async function getDetail(num) {
  const response = await axios.get("/pokemon.json");

  const current = response.data.find(item => item.num === num)
  let nextId = current.id + 1
  if (nextId === 152) {
    nextId = 1
  }
  let previousId = current.id - 1;
  if (previousId === 0) {
    previousId = 151
  }
  const next = response.data.find(item => item.id === nextId)
  const previous = response.data.find(item => item.id === previousId)
  return { current, next, previous }
}

export async function get(limit, type) {
  const response = await axios.get("/pokemon.json");
  let pokemons = response.data;
  if (type !== null) {
    pokemons = pokemons.filter(item => item.type.includes(type))
  }

  return pokemons.slice(0, limit);
}

export async function getType() {
  const response = await axios.get("/pokemon.json");
  let filterType = response.data.reduce((prev, curr) => [...prev, ...curr.type], [])
  return [...new Set(filterType)].sort();
}