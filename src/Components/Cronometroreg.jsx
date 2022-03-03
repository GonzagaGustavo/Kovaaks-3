import React, { useState } from 'react'

function Cronometroreg(props) {
const [display, setDisplay] = useState("")

  function startTimer(duration) {
    let timer = duration, minutes, seconds

    setInterval(() => {
      minutes = parseInt(timer / 60, 10)
      seconds = parseInt(timer % 60, 10)

      minutes = minutes < 10 ? "0" + minutes : minutes
      seconds = seconds < 10 ? "0" + seconds : seconds

      setDisplay(minutes + ":" + seconds)

      if(--timer < 0) {
        timer = duration
      }
      if(timer === 0) {
        props.acabou()
      }
    }, 900);
  }
    window.onload = () => {
      var duration = 20
      startTimer(duration)
    }
  return (
    <div className='cronometro'>
        <p>{display}</p>
    </div>
  )
}

export default Cronometroreg