import React, { useState } from 'react';

import './styles.css'; 

const Exemplo_Badge = () => {
  const [qtd, setQtd] = useState(0);

  return (
    <>
      <h1>Hello World <span className="badge badge-primary">Novo</span></h1>

      <hr/>

      <button className="btn btn-primary" type="button" onClick={() => setQtd(qtd + 1)}>
        Clique <span className="badge badge-light">{qtd}</span>
      </button>

      <hr/>

      <button type="button" className="btn btn-primary">
        Caixa de Entrada <span className="badge badge-light">5</span>
        <span className="sr-only">Há 5 mensagens não lidas</span>
      </button>

      <hr/>

      <button type="button" className="btn btn-primary">
        Caixa de Entrada <span className="badge badge-light badge-pill">5</span>
        <span className="sr-only">Há 5 mensagens não lidas</span>
      </button>
    </>
  )
}

export default Exemplo_Badge;