import React from 'react';

import './styles.css'; 

const Exemplo_Formulario_Grid = () => {
  return (
    <>
      <div className="container">
        <br/>

        <form action="">
          <div className="row">
            <div className="col">
              <input 
                type="text" 
                placeholder="Primeiro Nome"
                className="form-control"
              />
            </div>
            <div className="col">
              <input 
                type="text" 
                placeholder="Segundo Nome"
                className="form-control"
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary">Enviar</button>
        </form>

        <hr/>

        <form action="">
          <div className="form-row">
            <div className="col form-group">
              <label htmlFor="">Primeiro Nome</label>
              <input 
                type="text" 
                placeholder="Primeiro Nome"
                className="form-control"
              />
            </div>
            <div className="col form-group">
              <label htmlFor="">Segundo Nome</label>
              <input 
                type="text" 
                placeholder="Segundo Nome"
                className="form-control"
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
      </div>
    </>
  )
}

export default Exemplo_Formulario_Grid;