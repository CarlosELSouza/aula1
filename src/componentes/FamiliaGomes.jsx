import React from "react";
import Nome from "./Nome";

export default props => //exportando os nomes, usando outro componente para formatar
    <div>  
        <Nome nome="Alexandre" sobrenome={props.sobrenome}/>
        <Nome nome="Jõao" sobrenome={props.sobrenome}/>
        <Nome nome="Ricardo" sobrenome={props.sobrenome}/>
        <Nome nome="Alex" sobrenome={props.sobrenome}/>
        <Nome nome="José" sobrenome={props.sobrenome}/>
        <Nome nome="Gerson" sobrenome={props.sobrenome}/>
    </div>