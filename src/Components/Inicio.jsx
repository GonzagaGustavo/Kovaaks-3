import React from 'react'
import { Link } from 'react-router-dom'

function Inicio() {
  return (
    //Tela de inicio
  
    <div className="inicio">
        <h1>Olá seja bem vindo</h1>
        <h2 className="jogo">Vamos jogar?</h2>
        <Link to={'/Jogar'}><button>Start!</button></Link>
    </div>

  )
}

export default Inicio