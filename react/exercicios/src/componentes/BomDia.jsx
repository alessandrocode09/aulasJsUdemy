import React from 'react'

export default props => [
    <h1 key='chave1'>Bom dia {props.nome}!!!</h1>,
    <h2 key='chave2'>Inteh Breve!</h2>
]



/*export default props => 
    <React.Fragment>
        <h1>Bom dia {props.nome}!!!</h1>
        <h2>Inteh Breve!</h2>
    </React.Fragment>

    <div>
        <h1>Bom dia {props.nome}!!!</h1>
        <h2>Inteh Breve!</h2>
    <div>
    
    
    */