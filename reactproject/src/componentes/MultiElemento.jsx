import React, { Fragment } from "react"

const Teste1 = (props) =>

<div>
    <h1>Teste1</h1>
    <h2>Teste2</h2>
</div>

const Teste2 = (props) =>
<Fragment>
    <h1>Teste1</h1>
    <h2>Teste2</h2>
</Fragment>

const Teste3 = (props) =>
[
    <h1>Teste1</h1>,
    <h2>Teste2</h2>
]

export {Teste1,Teste2,Teste3}
