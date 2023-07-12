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
                <Acomodacoes>
                <h2>Seja Bem Vindo(A)!</h2>
                
                </Acomodacoes>

                
                    
            </main>
        </EstruturaPagina>
    )
}

export default Home