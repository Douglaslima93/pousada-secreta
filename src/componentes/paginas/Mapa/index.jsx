import React from "react";
import './style.css'
import Topo from "../../Topo";
import Rodape from "../../Rodape";

export default function Mapa() {
    return(
        <section>
        <Topo/>

        <div className="container-mapa">
            <h2>Rota</h2>
            <p>Veja como chegar até a pousada</p>
            <iframe className="mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234967.28343293877!2d-44.5205425423281!3d-23.047120248067284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9c5253944d458d%3A0xd96796845bd7fd3!2sAngra%20dos%20Reis%2C%20RJ!5e0!3m2!1spt-BR!2sbr!4v1689780800082!5m2!1spt-BR!2sbr"
             allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        </section>
    )
}