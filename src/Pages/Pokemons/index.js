import React, { useEffect, useState } from 'react';
import './style.css';
import '../../Gallery/gallery.theme.css';
import '../../Gallery/gallery.min.css';
import { get, getType } from '../../services/pokemonService';
import Header from "../Header/index";
import { useHistory } from "react-router-dom";

export default function () {
  const history = useHistory();
  const [pokemons, setPokemons] = useState([]);
  const [typePokemons, setTypePokemons] = useState([]);
  const [limitPokemon, setLimitPokemon] = useState(10);
  const [typeSelected, setTypeSelected] = useState(null);
  const [searchName, setSearchName] = useState(null);
  // const [orderSelected, setOrderSelected] = useState(null);

  useEffect(() => {
    get(limitPokemon, typeSelected, searchName).then(response => {
      setPokemons(response)
    });
  }, [limitPokemon, typeSelected, searchName]);

  useEffect(() => {
    getType().then(response => {
      setTypePokemons(response)
    });
  }, []);

  function handleDetail(num) {
    history.push(`/detail/${num}`);
  }

  const onClickLimitPokemons = () => {
    setLimitPokemon(limitPokemon + 30)
  };

  const onClickTotalPokemons = () => {
    setLimitPokemon(151)
  };


  return (
    <>
      <Header />
      <div>
        <section className="container-search">
          <div className="container-search-type">
            <label for="">Buscar por tipo:</label>
            <select name="select" onChange={(e) => setTypeSelected(e.target.value)}>
              {typePokemons.map(item => (
                <option value={item}>{item}</option>
              ))
              }
            </select>
          </div>
          <div className="container-list-order">
            <label for="">Ordenar:</label>
            <select name="select" >
              <option value="">Selecionar</option>
              <option value="name-asc">A-Z</option>
              <option value="name-desc">Z-A</option>
              <option value="weight-asc">Peso min-max</option>
              <option value="weight-desc">Peso max-min</option>
              <option value="number-asc">menor-maior</option>
              <option value="number-desc">maior-menor</option>
            </select>
          </div>
          <div className="container-search-name">
            <input type="text" placeholder="Digite o Nome do Pokémon" onChange={(e) => setSearchName(e.target.value.toLowerCase())} />
          </div>
        </section>

        <section>
          <div className="text">
            <p className="hide" ></p>
            <ul className="list">
              {pokemons.map(poke => (
                <li onClick={() => handleDetail(poke.num)}><span> N°{poke.num}<img src={poke.img}
                /> {poke.name}</span></li>
              ))
              }
            </ul>
            {limitPokemon <= 150 ? (
              <>
                <button className="btn-load-more" onClick={onClickLimitPokemons}>Carregar Mais</button>
                <button className="btn-load-more" onClick={onClickTotalPokemons}>Carregar Tudo</button>
              </>
            ) : null
            }
          </div>
        </section>
      </div>
      <footer className="footer">© By Aline Rozetti & Mariana Barros - 2020</footer>
    </>
  );
}
