import React from "react";
import "./home.css";
import espelhoSolar from "../../assets/espelhoSolar.svg";

function Home() {

    return (
        <main className="artigoPessoal">
            <article className="biografia">
                <h4>Dos autores de:</h4>
                <h1>O sol que habita em Gesser</h1>
                <h2>Gesser P. N. L. F.</h2>
                <h5>Transformo ideias em realidade digital.</h5>
                <h5>5 anos criando experiências que conectam.</h5>
                <h5>Da Bahia para o mundo, código com axé.</h5>
                <h5>Ilumine e descubra meu universo criativo →</h5>
            </article>
            <figure>
                <img src={espelhoSolar} alt="Espelho"/>
            </figure>
        </main>
    )
}

export default Home;