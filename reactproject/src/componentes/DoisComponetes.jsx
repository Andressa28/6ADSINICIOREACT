import React from "react"

const CompA = (props) =>
<h1>Sou o primeiro Componente: {props.valor}</h1>

const CompB = (props) =>
<h1> Sou o segundo Componente : {props.valor}</h1>

export {CompA, CompB}