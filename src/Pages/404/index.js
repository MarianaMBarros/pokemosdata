import React from 'react';
import './style.css';
import Header from "../Header/index";

export default function () {
  return (
    <>
      <Header />
      <div className="container">
        <span className="sub-title">Página em Construção!</span>
        <img className="gif" src={`${process.env.PUBLIC_URL}/img/pikachu.gif`} />
      </div>
    </>
  )
}