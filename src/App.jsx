import React from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Inicio from "./Components/Inicio";
import Principal from "./Components/Principal";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/Jogar" element={<Principal />}></Route>
      <Route path="/" element={<Inicio />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
