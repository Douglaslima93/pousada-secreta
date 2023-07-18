import React from "react";
import './style.css'

export default function Rodape() {
    return(
        <footer>
            <div className="contato">
                <h3>Entre em contato conosco:</h3>
                <a href="#Mapa"><img src="../icones/endereco.png" alt="Endereço"/>Endereco Av.123,222 - Rio de Janeiro RJ</a>
                
                <a href="tel:+552100000000"><img src="../icones/telefone.png" alt="Telefone"/>Cel: (21)0000-0000</a>

                <a href="https://www.booking.com/index.pt-br.html?label=gen173nr-
                1BCAEoggI46AdIM1gEaCCIAQGYAS24ARfIAQzYAQHoAQGIAgGoAgO4AuGTxqUGwAIB0gIkN2Q3ZWMxZDAtZTc3MS00MGY4LWExOT
                ktZWM2YWE0MjZkOTY32AIF4AIB&sid=da8a2b4f81970fd5d6e507e135a40d98&keep_landing=1&sb_price_type=total&">
                <img src="../icones/calendario.png" alt="Calendario"/>Faça sua reserva pelo Booking.com</a>
            </div>

            <div className="patente">
                <span>&copy; Copyright - PousadaSecreta</span>
            </div>
        </footer>
    )
}