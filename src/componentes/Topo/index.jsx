import React from "react";
import './style.css'
import {Link} from 'react-router-dom'

export default function Topo() {
    return(
        <header className="header">
            <p>Pousada <strong>Secreta</strong></p>

            <nav className="nav">
                <Link className="nav-link" to='/'>Home</Link>
                <Link className="nav-link" to='/sobre'>Sobre</Link>
                <Link className="nav-link" to='/acomodacoes'>Acomodações</Link>
                <Link className="nav-link" to='/mapa'>Rota</Link>
            </nav>
        </header>
    )
}