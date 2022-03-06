import React from "react"
//dois componentes em um único arquivo

const CompA = props => //criando uma constante com uma função
    <h1>Sou o primeiro: {props.valor}</h1>

const CompB = props =>
    <h1>Sou o segundo: {props.valor}</h1>

export {CompA, CompB} // exportando os dois de uma vez