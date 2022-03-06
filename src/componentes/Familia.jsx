import React from "react";

export default props => 
//só os elementos filho, essa função tem um filho, tipo um div (fica vinculado) assim eu posso reaproveitar o mesmo codigo
// método do REACT para clonagem, sobrenome recebe as props lá do nome
//propragando o sobrenome, para todos os filhos
// as reticencias é um spread, pra nap precisar digitar: sobrenome:props.sobrenome, endereco:props.endereco, numero:props.cidade, estado:props.estado
 <div>
     <h1>Família</h1>
     {React.cloneElement(props.children, {...props})}
 </div>
 //gwegkwngwngklnweg