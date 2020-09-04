import React, { useEffect } from 'react';
import { useHistory, useParams } from "react-router-dom";


export default function () {
  const history = useHistory();

  const onClickPokemons = () => {
    history.push("/pokemons");
  };
  return (
    <>
      <div className="header">
        <nav>
          <div>
            <span onClick={onClickPokemons}>Pagina Inicial</span>
            <span onClick={onClickPokemons}>Pokemons</span>
            <span onClick={onClickPokemons}>Login</span>
          </div>
        </nav>
        <span><img className="title" src="https://fontmeme.com/permalink/200904/4694367609be71dac48b393fda107914.png"
          alt="fonte-de-pokemon-go" border="0" /></span>
      </div>
    </>
  )
}
