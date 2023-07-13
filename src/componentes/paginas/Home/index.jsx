import React from "react";
import './style.css'
import EstruturaPagina from "../../EstruturaPagina";
import Banner from "../../Banner";
import Acomodacoes from '../Acomodacoes'

const Home = () => {
    return(
        <EstruturaPagina>
            <main>
                <Banner/>
                <section className="container-bem-vindo">

                <div className="texto-bem-vindo">
                <h2>Seja Bem-Vindo(A!)</h2>
                <p>Relaxe em nossas acomodações e curta o melhor de Angra dos Reis.</p>
                <p>Temos quartos para solteiro, casal ou familia.</p>
                </div>

                <div className="container-quartos">

                   <div className="quartos">
                    <img src="../img/quarto-solteiro1.jpg" alt="solteiro1"/>
                    <strong>Quarto de Solteiro</strong>
                    </div> 

                    <div className="quartos">
                        <img src="../img/quarto-casal1.jpg" alt="casal1"/>
                        <strong>Quarto de Casal</strong>
                    </div>

                    <div className="quartos">
                        <img src="../img/quarto-familia1.jpg" alt="familia1"/>
                        <strong>Quarto de Familia</strong>
                    </div>
                </div>
                </section> 

            </main>
        </EstruturaPagina>
    )
}

export default Home