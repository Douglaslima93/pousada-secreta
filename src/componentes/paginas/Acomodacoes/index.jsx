import React from "react";
import './style.css'
import Topo from "../../Topo";

export default function Acomodacoes() {
    return(
        <section>
            <Topo/>
            <div className="acomodacoes">
                <div className="acomodacoes-quartos">
                    <h3>Quarto Solteiro</h3>
            
                    <img src="../img/quarto-solteiro1.jpg" alt="Quarto Solteiro"/>
                    <img src="../img/quarto-solteiro2.jpg" alt="Quarto Solteiro"/>
                    <img src="../img/quarto-solteiro3.jpg" alt="Quarto Solteiro"/> 
                </div>

                <div className="acomodacoes-quartos">
                    <h3>Quarto Casal</h3>
                    
                    <img src="../img/quarto-casal1.jpg" alt="Quarto Casal"/>
                    <img src="../img/quarto-casal2.jpg" alt="Quarto Casal"/>
                    <img src="../img/quarto-casal3.jpg" alt="Quarto Casal"/> 
                </div>

                <div className="acomodacoes-quartos">
                    <h3>Quarto Familia</h3>
                    
                    <img src="../img/quarto-familia1.jpg" alt="Quarto Familia"/>
                    <img src="../img/quarto-familia2.jpg" alt="Quarto Familia"/>
                    <img src="../img/quarto-familia3.jpg" alt="Quarto Familia"/> 
                </div>
            </div>
        </section>
    )
}