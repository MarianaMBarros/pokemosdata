import React, { useEffect } from 'react';
import { useHistory, useParams } from "react-router-dom";


export default function () {
  const history = useHistory();

  const onClickPokemons = () => {
    history.push("/pokemons");
  };
  return (
    <>
      <nav>
        <div>
          <span onClick={onClickPokemons}>Pagina Inicial</span>
          <span onClick={onClickPokemons}>Pokemons</span>
          <span onClick={onClickPokemons}>Login</span>
        </div>
      </nav>
      <a><img class="title" src="https://fontmeme.com/permalink/200429/65da7acdb7f16431618ddbf607e03edc.png"
        alt="fonte-de-pokemon-go" border="0" /></a>
    </>
  )
}
