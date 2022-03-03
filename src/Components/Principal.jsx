import React, { useEffect, useState } from 'react'
import "../App.css";
import Cronometroreg from './Cronometroreg';

function Principal() {
    const [points, setPoints] = useState(0);
    const [quanto, setQuanto] = useState(false)
  
    useEffect(() => {
      document.title = points;
    }, [points]);
  
    function mudar() {
      let obj = document.querySelector(".point");
      let top = Math.floor(Math.random() * 69);
      let left = Math.floor(Math.random() * 92);
      obj.style.top = `${top}%`;
      obj.style.left = `${left}%`;
      setPoints(points + 1);
    }
    function acabou() {
      setQuanto(true)
    }
    function restart() {
      setQuanto(false)
      window.location.reload(false)
    }
    if(!quanto) {
    return (
      <div className="App">
        <header>
          <h1>Kovaak's 3.0</h1>
          <Cronometroreg acabou={acabou}/>
          <div className="info-header">
            <p className="pontos">Pontos: {points}</p>
            <p>1º: Gustavo Gonzaga <span className="pt">81pt</span></p>
            </div>
        </header>
        <div className="point" onMouseEnter={mudar}></div>
      </div>
    );} else {
      return (
        <div className="app2">
          <h1 className="para-bens">Parabéns!</h1>
          <div>
          <h2 className="h2">Pontos</h2>
          <p className="pontos-term">{points}</p>
          </div>
          <button className="btn-restart" onClick={restart}>Restart</button>
        </div>
      )
    }
}

export default Principal