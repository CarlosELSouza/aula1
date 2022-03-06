import React, { Fragment } from "react" //na versão mais nova, não precisa importar. mas né (aqui ele tá só importando o react, do proprio react)

//dá pra colocar vários dentro da div, se deixar em branco (tirar a div), vira um fragment (pra ter menos Divs no código)

// export default () => ( // é uma arrow function, é todo o código que tá comentado, só que em uma linha
//     <Fragment> 
//     <h1>Nosso componente Arrow</h1>
//     <h2>Olá</h2>
//     </Fragment>
// )
//  export default () => (5+6) // exemplo usando números, pra mostrar que ele exporta o componenete, não só a função

//  function func1() { //criando uma função 
//     return <h1>Nosso primeiro componente</h1> //um arquivo js, conseguindo chamar um HTML. No caso, essa func retorna um título HTML
//  }

var vf = false // exemplo usando boolean, criou uma variavel que armazena um valor falso

export default (props) => // props são propriedades (o professor escolheu esse nome). As chaves {} chamam o javascript. Aqui criou uma func, que retorna tudo que eu colocar no index, em H1
// e a soma, é uma função de soma, que eu defini isso lá no index   

// 3) Math é uma biblioteca (igual a do python) 
// 4 e 5) o random é pra aleatorio, e o pow é pra radiciação
// 6) chamou a variavel,  a interrogação é uma condição que se for verdade, mostra o primeiro texto e vice versa
    <div>
        <h1>{props.valor}</h1> 
        <h2>{props.soma}</h2>
        <p>3) Exemplo usando número aleatório: {Math.random()}</p>
        <p>4) 2 elevado a 8: {2**8}</p>
        <p>5) Mesma coisa, usando a biblio Math: {Math.pow(2,8)}</p>
        <p>6) Verdadeiro ou Falso? {vf ? ' Verdadeiro' : ' Falso'}</p>
    </div>

//export default func1 // exportando de modo padrão a func1, isso permite que eu possa chamar esse componente do lado de fora (no index)