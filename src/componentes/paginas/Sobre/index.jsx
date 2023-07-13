import React from "react";
import './style.css'


export default function Sobre(props) {
    return(
        <section>
            <div>
                <h2>Sobre a Pousada!</h2>
                <p>Conheça um pouco sobre nossa pousada</p>
            </div>

            <div>
                <p>{props.titulo}</p>
                <p>{props.sobre}</p>
                <img src={props.img}/>
            </div>
        </section>
    )
}