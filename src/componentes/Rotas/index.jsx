import React from "react";
import {BrowserRouter, Routes, Route} from'react-router-dom'
import Home from '../paginas/Home'
import Sobre from '../paginas/Sobre'
import Acomodacoes from '../paginas/Acomodacoes'
import Mapa from '../paginas/Mapa'


const Rotas = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route exact path="/" element={ <Home/> }/>
            <Route exact path="/sobre" element={<Sobre/>}/>
            <Route exact path="/acomodacoes" element={ <Acomodacoes/> }/>
            <Route exact path="/mapa" element={ <Mapa/> }/>
        </Routes>
        </BrowserRouter>
    )
}

export default Rotas