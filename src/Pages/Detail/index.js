import React, { useEffect, useState } from 'react';
import './style.css';
import data from '../../data/pokemon.js';
import { useHistory, useParams } from "react-router-dom";

export default function () {
  const [pokemon, setPokemon] = useState({});
  let { num } = useParams();

  useEffect(() => {
    const poke = data.pokemon.find(item => item.num === num)
    setPokemon(poke)
  }, [num]);




  return (
    <>
      <header id="gif" class="fundo">
        <a>
          <img class="title" src="https://fontmeme.com/permalink/200429/65da7acdb7f16431618ddbf607e03edc.png"
            alt="fonte-de-pokemon-go" border="0" />
        </a>
      </header>
      <main>
        <h3 id="name" class="name-pokemon">{pokemon.name}</h3>
        <div class="next-prev">
          <a id="previous" class="next-previous"></a>
          <a id="next" class="next-previous"></a>
        </div>
        <div class="data-pokemon">
          <div>
            <img id="imgPoke" class="img" />
            <div class="data-type">
              <label>TIPO</label>
              <ul id="type"></ul>
            </div>
          </div>
          <div class="data">
            <h3>Dados do Pokémon</h3>
            <div class="data-flex">
              <ul>
                <li><label>ALTURA</label><label id="height">{pokemon.height}</label></li>
                <li><label>PESO</label><label id="weight">{pokemon.weight}</label></li>
                <li><label>CANDY</label><label id="candy">{pokemon.candy}</label></li>
                <li><label>CANDY COUNT</label><label id="candy-count">{pokemon.candy_count}</label></li>
                <li><label>OVOS</label><label id="egg">{pokemon.egg}</label></li>
                <li><label>CHANCE DE APARECER</label><label id="spawn_chance">{pokemon.spawn_chance}</label></li>
                <li><label>MÉDIA</label><label id="avg_spawns">{pokemon.avg_spawns}</label></li>
                <li><label>TEMPO DE DESOVA</label><label id="spawn_time">{pokemon.spawn_time}</label></li>
                <li><label>MULTIPLICADORES</label><label id="multipliers">{pokemon.multipliers}</label></li>
                <li><label>FRAQUEZA</label><label id="weaknesses">{pokemon.weaknesses}</label></li>
              </ul>
            </div>
          </div>
        </div>
        <ul id="evolution" class="evolu"></ul>
        <div class="btn-end">
          <button class="btn-explore"><a href="index.html">Explorar Mais Pokemons</a></button>
        </div>
      </main>
      <footer class="footer">© By Aline & Mariana - 2020</footer>
    </>
  )
}