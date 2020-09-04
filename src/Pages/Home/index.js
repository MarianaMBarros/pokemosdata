import React, { useEffect } from 'react';
import './style.css';
import '../../Gallery/gallery.theme.css';
import '../../Gallery/gallery.min.css';
import data from '../../data/pokemon.js';
import { useHistory } from "react-router-dom";

function App() {
  const history = useHistory();

  function handleDetail(id) {
    history.push(`/detail/${id}`);
  }

  return (
    <div>
      <header class="fundo">
        <h1>
          <a>
            <img class="title" src="https://fontmeme.com/permalink/200429/65da7acdb7f16431618ddbf607e03edc.png"
              alt="fonte-de-pokemon-go" border="0" />
          </a>
        </h1>

        <section class="gallery autoplay items-3">

          <div id="item-1" class="control-operator"></div>
          <div id="item-2" class="control-operator"></div>
          <div id="item-3" class="control-operator"></div>

          <figure class="item">
            <div>
              <a>
                <img class="top" src="https://fontmeme.com/permalink/200429/196ada5df6b06cbbd0b9ee6f014559b4.png"
                  alt="fonte-de-pokemon-go" border="0" />
              </a>
            </div>
            <a href="./detail?num=150"><img class="img-top3" src="http://www.serebii.net/pokemongo/pokemon/150.png" /></a>
            <a href="./detail?num=065"><img class="img-top3" src="http://www.serebii.net/pokemongo/pokemon/065.png" /></a>
            <a href="./detail?num=149"><img class="img-top3" src="http://www.serebii.net/pokemongo/pokemon/149.png" /></a>
          </figure>data

          <figure class="item">
            <div>
              <a>
                <img class="top" src="https://fontmeme.com/permalink/200429/8aac5fd1cefbdfee2d39542be186b792.png"
                  alt="fonte-de-pokemon-go" border="0" />
              </a>
            </div>
            <a href="./detail?num=091"><img class="img-top3" src="http://www.serebii.net/pokemongo/pokemon/091.png" /></a>
            <a href="./detail?num=095"><img class="img-top3" src="http://www.serebii.net/pokemongo/pokemon/095.png" /></a>
            <a href="./detail?num=144"><img class="img-top3" src="http://www.serebii.net/pokemongo/pokemon/144.png" /></a>
          </figure>

          <figure class="item">
            <div>
              <a>
                <img class="top" src="https://fontmeme.com/permalink/200429/0a4dce5e5599f1eee1fd33563b17a86c.png"
                  alt="fonte-de-pokemon-go" border="0" />
              </a>
            </div>
            <a href="./detail?num=113"><img class="img-top3" src="http://www.serebii.net/pokemongo/pokemon/113.png" /></a>
            <a href="./detail?num=143"><img class="img-top3" src="http://www.serebii.net/pokemongo/pokemon/143.png" /></a>
            <a href="./detail?num=134"><img class="img-top3" src="http://www.serebii.net/pokemongo/pokemon/134.png" /></a>
          </figure>

          <div class="controls">
            <a href="#item-1" class="control-button"><i class="fas fa-hand-rock"></i></a>
            <a href="#item-2" class="control-button"><i class="fas fa-dizzy"></i></a>
            <a href="#item-3" class="control-button"><i class="fas fa-heart"></i></a>
          </div>

        </section>
      </header>

      <main>
        <p class="sub-title">Descubra o Universo Pokemon!!!</p>
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

      </main>
      <footer class="footer">© By Aline & Mariana - 2020</footer>
    </div>
  );
}

export default App;
