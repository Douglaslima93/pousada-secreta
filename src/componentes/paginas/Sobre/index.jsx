import React from "react";
import './style.css'


export default function Sobre(props) {
    return(
        <section className="container-sobre-a-pousada">
            <div className="sobre-a-pousada">
                <strong>{props.titulo}</strong>
                <p>{props.sobre}</p>
                
            </div>

            <div className="sobre-a-pousada-img">
            <img src={props.img}/>
            </div>

        </section>
    )
}