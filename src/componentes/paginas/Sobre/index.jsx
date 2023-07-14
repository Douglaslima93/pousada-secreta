import React from "react";
import './style.css'


export default function Sobre(props) {
    return(
        <section className="container-sobre-a-pousada">
            <div className="sobre-a-pousada">
                <strong>{props.titulo}</strong>
                <p>{props.sobre}</p>
            </div>

            <img className="sobre-a-pousada-img" src={props.img}/>
            
        </section>
    )
}