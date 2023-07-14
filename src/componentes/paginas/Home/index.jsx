import React from "react";
import './style.css'
import EstruturaPagina from "../../EstruturaPagina";
import Banner from "../../Banner";
import Acomodacoes from '../Acomodacoes'
import Sobre from "../Sobre";
import imgPousada from '../../../../public/img/img1.jpg'
import imgAlimentacao from '../../../../public/img/img2.jpg'
import imgQuartos from '../../../../public/img/img3.jpg'
import imgRecepcao from '../../../../public/img/img5.jpg'

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

                <section className="sobre-pousada">
                <div className="sobre-texto">
                <h2>Sobre a Pousada!</h2>
                <p>Conheça um pouco sobre nossa pousada</p>
                </div>

                <Sobre
                titulo= "A pousada"
                sobre= "A Pousada dispôe de estacionamento privativo gratuito, piscina ao ar livre e bar."
                img={imgPousada}
                />

                <Sobre 
                titulo="Alimentação"
                sobre="A pousada serve café da manhã em estilo continental ou buffet. Nossos restaurantes funcionam 24hrs."
                img={imgAlimentacao}
                />

                <Sobre
                titulo="Nossos quartos"
                sobre="Os quartos possuem TV de tela plana a cabo, cozinha compacta e área para refeição. Além disso,
                as unidades da Pousada contam com ar-condicionado e guarda-roupa."
                img={imgQuartos}
                />

                <Sobre
                titulo="Recepção"
                sobre="Nossa recepção fica aberta 24hrs."
                img={imgRecepcao}
                />
                </section>

            </main>
        </EstruturaPagina>
    )
}

export default Home