import React, { useEffect } from 'react';
import './style.css';
import '../../Gallery/gallery.theme.css';
import '../../Gallery/gallery.min.css';
import Header from "../Header/index";

export default function () {
  return (
    <>
      <header >
        <Header />
        <section className="gallery autoplay items-3">
          <div id="item-1" className="control-operator"></div>
          <div id="item-2" className="control-operator"></div>
          <div id="item-3" className="control-operator"></div>
          <figure className="item">
            <div>
              <span className="top">Top 3 - Ataque</span>
            </div>
            <a href="./detail?num=150"><img className="img-top3" src="http://www.serebii.net/pokemongo/pokemon/150.png" /></a>
            <a href="./detail?num=065"><img className="img-top3" src="http://www.serebii.net/pokemongo/pokemon/065.png" /></a>
            <a href="./detail?num=149"><img className="img-top3" src="http://www.serebii.net/pokemongo/pokemon/149.png" /></a>
          </figure>

          <figure className="item">
            <div>
              <span className="top">Top 3 - Defesa</span>
            </div>
            <a href="./detail?num=091"><img className="img-top3" src="http://www.serebii.net/pokemongo/pokemon/091.png" /></a>
            <a href="./detail?num=095"><img className="img-top3" src="http://www.serebii.net/pokemongo/pokemon/095.png" /></a>
            <a href="./detail?num=144"><img className="img-top3" src="http://www.serebii.net/pokemongo/pokemon/144.png" /></a>
          </figure>

          <figure className="item">
            <div>
              <span className="top">Top 3 - HP</span>
            </div>
            <a href="./detail?num=113"><img className="img-top3" src="http://www.serebii.net/pokemongo/pokemon/113.png" /></a>
            <a href="./detail?num=143"><img className="img-top3" src="http://www.serebii.net/pokemongo/pokemon/143.png" /></a>
            <a href="./detail?num=134"><img className="img-top3" src="http://www.serebii.net/pokemongo/pokemon/134.png" /></a>
          </figure>

          <div className="controls">
            <a href="#item-1" className="control-button"><i className="fas fa-hand-rock"></i></a>
            <a href="#item-2" className="control-button"><i className="fas fa-dizzy"></i></a>
            <a href="#item-3" className="control-button"><i className="fas fa-heart"></i></a>
          </div>
        </section>
      </header>
      <div className="title-home">
        <span className="sub-title">Descubra o Universo Pokemon!!!</span>
        <div className="text-pokemon">
          <h1>O que são Pokémon?</h1>
          <p>Pokémon são criaturas de todas as formas e tamanhos que convivem com os humanos na natureza.
          Na grande maioria, os Pokémon não falam, exceto para proferir seus nomes.
          Os Pokémon são criados e comandados por seus donos (os chamados "Treinadores").
          No decorrer das aventuras, os Pokémon crescem e ganham experiência, podendo até mesmo evoluir para
          Pokémon mais fortes. Alguns Pokémon, como Pikachu, Piplup e Charizard, possuem papéis de destaque na
          série de videogames, no jogo Estampas Ilustradas e nos programas de TV, mas eles são apenas algumas
          das quase 500 criaturas que habitam o universo dos Pokémon.</p>
        </div>
      </div>
    </>
  )
}
