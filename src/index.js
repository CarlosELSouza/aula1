import React from "react" //to trabalhando com React, vou importar ele sempre
import ReactDOM from "react-dom" // serve pra renderizar a página 
import Familia from "./componentes/Familia"
import Nome from "./componentes/Nome"
// import FamiliaGomes from "./componentes/FamiliaGomes"
// import FamiliaSilva from "./componentes/FamiliaSilva"

//import Componente1 from './componentes/Componente1' //to importando meu componente do arquivo componentes 
//import {CompA, CompB as B} from './componentes/DoisComponentes' //arquivo DoisComponentes, e ainda dei apelido pra eles, usando alias

//import MultiElementos from "./componentes/MultiElementos"
import {Teste1, Teste2, Teste3} from "./componentes/MultiElementos"

const element = document.getElementById('root') // tudo que eu colocar aqui, vai pra dentro da root, que é o html que vai ser exibido (ela tá lá no index do public)

ReactDOM.render( //aqui ele tá renderizando, usando o ReactDOM, renderizando o componente que criei
    <div>
        {/*<Componente1 valor = "Boa noite"/>*/}
        {/*<CompA valor="Aqui é o componente A"/>
        <B valor="Aqui é o componente B"/>*/}

        {/* <Teste1/>
        <Teste2/>
        <Teste3/> */}
        {/* <h1>Familia Gomes</h1>
        <FamiliaGomes sobrenome=" Gomes"/> 

        <h1>Familia Silva</h1>
        <FamiliaSilva sobrenome=" Silva"/> */}


        <Familia sobrenome= "Gomes " endereco="Rua tal " numero="900 " cidade="Franca " estado="- SP "> 
        {/* tudo que eu colocar aqui vai ser clonado pros filhos */}
            <Nome nome= "Isabela "/>
        </Familia>
        

        {/* <Familia>
            <Nome nome= "Jõao " sobrenome= "Souza"/>
            <Nome nome= "Jane " sobrenome= "Souza"/>
        </Familia> */}

        
    </div>,
    element //aqui tá renderizando isso, lá naquele html, tá levando pro root
)