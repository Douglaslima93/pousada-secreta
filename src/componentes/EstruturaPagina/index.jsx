import React from "react";
import Topo from '../Topo'
import Rodape from '../Rodape'
import Mapa from "../paginas/Mapa";

export default function EstruturaPagina(props) {
    return(
        <section>

            <Topo/>

            {props.children}
            
            <Rodape/>

        </section>
    )
}