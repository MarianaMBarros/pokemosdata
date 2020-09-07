import React from 'react';
import './style.css';
import { useHistory, Link } from "react-router-dom";


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
        <span><img className="title" src="https://fontmeme.com/permalink/200906/7b92d99926934e43d9c374c8e8cd4e8f.png"
          alt="fonte-de-pokemon-go" border="0" /></span>
        <div className="nav">
          <Link onClick={onClickHome}>Home</Link>
          <Link onClick={onClickPokemons}>Pokemons</Link>
          <Link onClick={onClickLogin}>Login</Link>
        </div>
      </div>
    </>
  )
}
