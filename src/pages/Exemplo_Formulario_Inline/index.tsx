import React from 'react';

import './styles.css'; 

const Exemplo_Formulario_Inline = () => {
  return (
    <>
      <div className="container">
        <form action="" className="form-inline">

          <label htmlFor="">E-mail</label>
          <input type="text" className="form-control mr-sm-2 mb-2"/>

          <label htmlFor="">Senha</label>
          <input type="text" className="form-control mr-sm-2 mb-2"/>
          
          <button type="submit" className="btn btn-primary mb-2">Enviar</button>
        </form>

        <hr/>

        <form action="">
          <div className="form-group row">
            <label htmlFor="" className="col-sm-2 col-form-label">E-mail</label>
            <div className="col-sm-10">
              <input type="text" className="form-control"/>
              <small className="text-muted">Digite E-mail Válido</small>
            </div>
          </div>
          
          <div className="form-group row">
            <label htmlFor="" className="col-sm-2 col-form-label">Senha</label>
            <div className="col-sm-10">
              <input type="text" className="form-control"/>
              <small className="text-muted">Digite Senha Válida</small>
            </div>
          </div>
        </form>

        <hr/>

        <fieldset className="form-group">
          <div className="row">
            <legend className="col-sm-2 col-form-label">Opções</legend>
            <div className="col-sm-10">
              <div className="form-check">
                <input 
                  type="radio" 
                  name="option" 
                  id="option1" 
                  value="1"
                  className="form-check-input"
                  checked
                />
                <label htmlFor="option1" className="form-check-label">Opção 1</label>
              </div>

              <div className="form-check">
                <input 
                  type="radio" 
                  name="option" 
                  id="option2" 
                  value="2"
                  className="form-check-input"
                />
                <label htmlFor="option2" className="form-check-label">Opção 2</label>
              </div>

              <div className="form-check">
                <input 
                  type="radio" 
                  name="option" 
                  id="option3" 
                  value="3"
                  className="form-check-input"
                />
                <label htmlFor="option3" className="form-check-label">Opção 3</label>
              </div>
            </div>
          </div>
        </fieldset>

        <div className="form-group row">
          <div className="offset-sm-2 col-sm-10">
            <button type="submit" className="btn btn-primary">Entrar</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Exemplo_Formulario_Inline;