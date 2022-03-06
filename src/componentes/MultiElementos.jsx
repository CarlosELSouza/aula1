import React from "react";

export default(props) => 
    [ //exemplo de fragment, nesse, precisa de virgula depois de cada elemnto
        <h1>Teste 1</h1>,
        <h2>Teste 1</h2>,
        <h3>Teste 3</h3>
    ]
    
// Teste com múltiplos elementos
const Teste1 = props =>
    <>
        <h1>Olá teste 1 no H1</h1>
        <h2>Olá teste 1 no H2</h2>
    </>

const Teste2 = props =>
    <>
        <h1>Olá teste 2 no H1</h1>
        <h2>Olá teste 2 no H2</h2>
    </>

const Teste3 = props =>
    <>
        <h1>Olá teste 3 no H1</h1>
        <h2>Olá teste 3 no H2</h2>
    </>

export {Teste1, Teste2, Teste3}