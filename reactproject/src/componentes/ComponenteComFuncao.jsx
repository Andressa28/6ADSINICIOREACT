import React from "react"

const aprovados = ["Andressa", "Lívia", "Rafael"]

export default props => {

    const gerarItens = itens => {
        return itens.map(item => <li>{item}</li>) 
    }

    return (
        <ul>
            {gerarItens(aprovados)}
        </ul>
    )
}