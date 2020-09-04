import React, { useEffect } from 'react';
import './style.css';
import '../../Gallery/gallery.theme.css';
import '../../Gallery/gallery.min.css';
import data from '../../data/pokemon.js';
import Header from "../Header/index";
import { useHistory } from "react-router-dom";

export default function () {
  const history = useHistory();

  function handleDetail(num) {
    history.push(`/detail/${num}`);
  }

  return (
    <>
      <Header />
      <div>
        <section className="container-search">
          <div className="container-search-type">
            <label for="">Buscar por tipo:</label>
            <select name="select">
            </select>
            <button className="btn-header">Buscar</button>
          </div>
          <div className="container-search-name">
            <label for="">Buscar por nome:</label>
            <input id="search" type="text" placeholder="Digite o nome do pokemon" />
            <button className="btn-header" >Buscar</button>
          </div>
          <div className="container-list-order">
            <label for="">Ordenar:</label>
            <select name="select" id="select-order">
              <option value="">Selecionar</option>
              <option value="name-asc">A-Z</option>
              <option value="name-desc">Z-A</option>
              <option value="weight-asc">Peso min-max</option>
              <option value="weight-desc">Peso max-min</option>
              <option value="number-asc">menor-maior</option>
              <option value="number-desc">maior-menor</option>
            </select>
            <button class="btn-header" id="btn-order">Ordenar</button>
          </div>
        </section>

        <section>
          <div className="text">
            <p className="hide" ></p>
            <ul className="list">
              {data.pokemon.map(poke => (
                <li onClick={() => handleDetail(poke.num)}><span> N°{poke.num}<img src={poke.img}
                /> {poke.name}</span></li>
              ))
              }
            </ul>
            <button className="show btn-load-more">Carregar Mais</button>
            <button className="hide btn-load-more">Carregar Tudo</button>
          </div>
        </section>
      </div>
      <footer className="footer">© By Aline Rozetti & Mariana Barros - 2020</footer>
    </>
  );
}
