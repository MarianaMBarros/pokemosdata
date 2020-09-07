import React from 'react';
import './style.css';
import { Link } from "react-router-dom";


export default function () {

  return (
    <>
      <div className="header">
        <span><img className="title" src="https://fontmeme.com/permalink/200906/7b92d99926934e43d9c374c8e8cd4e8f.png"
          alt="fonte-de-pokemon-go" border="0" /></span>
        <div className="nav">
          <Link to="/">Home</Link>
          <Link to="/pokemons">Pokemons</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </>
  )
}
