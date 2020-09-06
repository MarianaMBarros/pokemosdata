import React from 'react';
import { useHistory } from "react-router-dom";


export default function () {
  const history = useHistory();

  const onClickPokemons = () => {
    history.push("/pokemons");
  };
  const onClickHome = () => {
    history.push("/");
  };
  const onClickLogin = () => {
    history.push("/login");
  };

  return (
    <>
      <div className="header">
        <nav>
          <div>
            <span onClick={onClickHome}>Pagina Inicial</span>
            <span onClick={onClickPokemons}>Pokemons</span>
            <span onClick={onClickLogin}>Login</span>
          </div>
        </nav>
        <span><img className="title" src="https://fontmeme.com/permalink/200904/4694367609be71dac48b393fda107914.png"
          alt="fonte-de-pokemon-go" border="0" /></span>
      </div>
    </>
  )
}
