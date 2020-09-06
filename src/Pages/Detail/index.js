import React, { useEffect, useState } from 'react';
import './style.css';
import { getDetail } from '../../services/pokemonService';
import { useParams, useHistory } from "react-router-dom";
import Header from "../Header/index";

export default function () {
  const history = useHistory();
  const [pokemon, setPokemon] = useState(null);
  let { num } = useParams();

  useEffect(() => {
    getDetail(num).then(response => {
      setPokemon(response)
    });
  }, [num]);


  function handleDetail(num) {
    history.push(`/detail/${num}`);
  }

  if (pokemon === null) {
    return null
  } else {
    return (
      <>
        <Header />
        <div>
          <h3 className="name-pokemon">{pokemon.current.name} N°{pokemon.current.num}</h3>
          <div className="next-prev">
            <span className="next-previous" onClick={() => handleDetail(pokemon.previous.num)}> {pokemon.previous.name} N°{pokemon.previous.num}</span>
            <span className="next-previous" onClick={() => handleDetail(pokemon.next.num)}>{pokemon.next.name} N°{pokemon.next.num} </span>
          </div>
          <div className="data-pokemon">
            <div><img className="img" src={pokemon.current.img} />
              <div className="data-type">
                <label>TIPO</label>
                <ul id="type">
                  {pokemon.current.type.map(item => <li>{item}</li>)}
                </ul>
              </div>
            </div>
            <div className="data">
              <h3>Dados do Pokémon</h3>
              <div className="data-flex">
                <ul>
                  <li><label>ALTURA</label><label>{pokemon.current.height}</label></li>
                  <li><label>PESO</label><label>{pokemon.current.weight}</label></li>
                  <li><label>CANDY</label><label>{pokemon.current.candy}</label></li>
                  <li><label>CANDY COUNT</label><label >{pokemon.current.candy_count}</label></li>
                  <li><label>OVOS</label><label >{pokemon.current.egg}</label></li>
                  <li><label>CHANCE DE APARECER</label><label >{pokemon.current.spawn_chance}</label></li>
                  <li><label>MÉDIA</label><label >{pokemon.current.avg_spawns}</label></li>
                  <li><label>TEMPO DE DESOVA</label><label >{pokemon.current.spawn_time}</label></li>
                  <li><label>MULTIPLICADORES</label><label >{pokemon.current.multipliers}</label></li>
                  <li><label>FRAQUEZA</label><label>{pokemon.current.weaknesses}</label></li>
                </ul>
              </div>
            </div>
          </div>
          <ul className="evolu"></ul>
          <div className="btn-end">
            <button className="btn-explore"><a href="index.html">Explorar Mais Pokemons</a></button>
          </div>
        </div>
        <footer className="footer">© By Aline Rozetti & Mariana Barros - 2020</footer>
      </>
    )
  }
}