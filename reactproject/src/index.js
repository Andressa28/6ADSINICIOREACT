import React from 'react';
import ReactDOM from 'react-dom';

import Componente1 from './componentes/Componente1';
import { CompA, CompB} from "./componentes/DoisComponetes";
import MultiElemento from './componentes/MultiElemento';

import { Teste1,Teste2,Teste3 } from './componentes/MultiElemento';

import FamiliaPortela from './componentes/FamiliaPortela';

import Familia from './componentes/Familia';
import Nome from './componentes/Nome';
import ComponenteComFuncao from './componentes/ComponenteComFuncao';

const element = document.getElementById('root')

ReactDOM.render(
    <div>

      {/* <Componente1 valor="Olá pessoal!" soma={3+4}/> */}

      {/* <CompA valor = "Primeiro Componente"/> */}
      {/* <CompB valor = "Segundo Componente"/> */}

      {/* <Teste1/>
      <Teste2/>
      <Teste3/> */}

      {/* <FamiliaPortela/> */}

      {/* <Familia>
        <Nome nome="Júlio " sobrenome="Portela"/>
        <Nome nome="Juliano " sobrenome="Portela"/>
        <Nome nome="Lesley " sobrenome="Portela"/>
      </Familia> */}

      {/* <Familia>
        <Nome nome="Mateus " sobrenome="Centeno"/>
        <Nome nome="Darcy " sobrenome="Centeno"/>
        <Nome nome="Paulo " sobrenome="Centeno"/>
      </Familia> */}

      {/* <Familia sobrenome="Portela " endereco= "Rua Tal " numero= "1750 " cidade="Franca " estado="São Paulo " />
        <Nome nome="Andressa"/>
        <Nome nome="Lívia"/>
        <Nome nome="Rafael"/>
      <Familia/> */}

      <ComponenteComFuncao/>

    </div>
  , element
)




