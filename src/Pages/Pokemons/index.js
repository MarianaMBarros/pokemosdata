import React, { useEffect } from 'react';
import './style.css';
import '../../Gallery/gallery.theme.css';
import '../../Gallery/gallery.min.css';
import data from '../../data/pokemon.js';
import { useHistory } from "react-router-dom";

export default function () {
  const history = useHistory();

  function handleDetail(num) {
    history.push(`/detail/${num}`);
  }

  return (
    <>
      <div>
        <section class="container-search">
          <div class="container-search-type">
            <label for="">Buscar por tipo:</label>
            <select name="select" id="select-element">
            </select>
            <button class="btn-header" id="btn-element">Buscar</button>
          </div>
          <div class="container-search-name">
            <label for="">Buscar por nome:</label>
            <input id="search" type="text" placeholder="Digite o nome do pokemon" />
            <button class="btn-header" id="btn-name">Buscar</button>
          </div>
          <div class="container-list-order">
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

        <section id="container-list">
          <div class="text">
            <p class="hide" id="statistics"></p>
            <ul id="list" class="list">
              {data.pokemon.map(poke => (
                <li onClick={() => handleDetail(poke.num)}><span> N°{poke.num}<img src={poke.img}
                /> {poke.name}</span></li>
              ))
              }
            </ul>
            <button id="loadMore" class="show btn-load-more">Carregar Mais</button>
            <button id="loadAll" class="hide btn-load-more">Carregar Tudo</button>
          </div>
        </section>
      </div>
      <footer class="footer">© By Aline & Mariana - 2020</footer>
    </>
  );
}
