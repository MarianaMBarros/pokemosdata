import React, { useEffect, useState } from 'react';
import './style.css';
import data from '../../data/pokemon.js';
import { useParams, useHistory } from "react-router-dom";
import Header from "../Header/index";

export default function () {
  const history = useHistory();
  const [pokemon, setPokemon] = useState(null);
  let { num } = useParams();


  function handleDetail(num) {
    history.push(`/detail/${num}`);
  }

  useEffect(() => {
    const current = data.pokemon.find(item => item.num === num)
    let nextId = current.id + 1
    if (nextId === 152) {
      nextId = 1
    }
    let previousId = current.id - 1;
    if (previousId === 0) {
      previousId = 151
    }
    const next = data.pokemon.find(item => item.id === nextId)
    const previous = data.pokemon.find(item => item.id === previousId)
    setPokemon({ current, next, previous })
  }, [num]);

  if (pokemon === null) {
    return null
  } else {
    return (
      <>
        <Header />
        <div>
          <h3 id="name" class="name-pokemon">{pokemon.current.name} N°{pokemon.current.num}</h3>
          <div class="next-prev">
            <span id="previous" class="next-previous" onClick={() => handleDetail(pokemon.previous.num)}> {pokemon.previous.name} N°{pokemon.previous.num}</span>
            <span id="next" class="next-previous" onClick={() => handleDetail(pokemon.next.num)}>{pokemon.next.name} N°{pokemon.next.num} </span>
          </div>
          <div class="data-pokemon">
            <div><img class="img" src={pokemon.current.img} />
              <div class="data-type">
                <label>TIPO</label>
                <ul id="type">
                  {pokemon.current.type.map(item => <li>{item}</li>)}
                </ul>
              </div>
            </div>
            <div class="data">
              <h3>Dados do Pokémon</h3>
              <div class="data-flex">
                <ul>
                  <li><label>ALTURA</label><label id="height">{pokemon.current.height}</label></li>
                  <li><label>PESO</label><label id="weight">{pokemon.current.weight}</label></li>
                  <li><label>CANDY</label><label id="candy">{pokemon.current.candy}</label></li>
                  <li><label>CANDY COUNT</label><label id="candy-count">{pokemon.current.candy_count}</label></li>
                  <li><label>OVOS</label><label id="egg">{pokemon.current.egg}</label></li>
                  <li><label>CHANCE DE APARECER</label><label id="spawn_chance">{pokemon.current.spawn_chance}</label></li>
                  <li><label>MÉDIA</label><label id="avg_spawns">{pokemon.current.avg_spawns}</label></li>
                  <li><label>TEMPO DE DESOVA</label><label id="spawn_time">{pokemon.current.spawn_time}</label></li>
                  <li><label>MULTIPLICADORES</label><label id="multipliers">{pokemon.current.multipliers}</label></li>
                  <li><label>FRAQUEZA</label><label id="weaknesses">{pokemon.current.weaknesses}</label></li>
                </ul>
              </div>
            </div>
          </div>
          <ul id="evolution" class="evolu"></ul>
          <div class="btn-end">
            <button class="btn-explore"><a href="index.html">Explorar Mais Pokemons</a></button>
          </div>
        </div>
        <footer class="footer">© By Aline & Mariana - 2020</footer>
      </>
    )
  }
}