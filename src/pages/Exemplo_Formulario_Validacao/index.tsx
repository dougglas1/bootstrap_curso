import React, { FormEvent } from 'react';

import './styles.css'; 

const Exemplo_Formulario_Validacao = () => {
  function salvar(event: FormEvent) {
    event.preventDefault();

    const form = document.querySelector('form');

    if (form?.checkValidity() === false) {
      form.classList.add('was-validated');
    }
  }

  return (
    <>
      <div className="container">
        <form onSubmit={salvar} noValidate className="needs-validation">
          <div className="form-row">
            <div className="col form-group">
              <label htmlFor="">Primeiro Nome</label>
              <input 
                type="text" 
                className="form-control"
                required
              />
            </div>
            <div className="col form-group">
              <label htmlFor="">Último Nome</label>
              <input 
                type="text"
                className="form-control"
              />
            </div>
          </div>

          <hr/>
          
          <div className="form-row">
            <div className="col-sm-3 form-group">
              <label htmlFor="">CEP</label>
              <input type="text" className="form-control"/>
            </div>
          </div>          

          <div className="form-row">
            <div className="col-sm-9 form-group">
              <label htmlFor="">Endereço</label>
              <input type="text" className="form-control" placeholder="Rua, Av..."/>
            </div>

            <div className="col-sm-3 form-group">
              <label htmlFor="">Número</label>
              <input type="number" className="form-control"/>
            </div>
          </div>

          <div className="form-row">
            <div className="col-sm-6 form-group">
              <label htmlFor="">Complemento</label>
              <input type="text" className="form-control"/>
            </div>

            <div className="col-sm-6 form-group">
              <label htmlFor="">Bairro</label>
              <input type="text" className="form-control"/>
            </div>
          </div>

          <div className="form-row">
            <div className="col-sm-4 form-group">
              <label htmlFor="">Cidade</label>
              <input type="text" className="form-control"/>
            </div>

            <div className="col-6 col-sm-4 form-group">
              <label htmlFor="">Estado</label>
              <input type="text" className="form-control"/>
            </div>

            <div className="col-6 col-sm-4 form-group">
              <label htmlFor="">País</label>
              <input type="text" className="form-control"/>
            </div>
          </div>

          <div className="form-row">
            <button type="submit" className="btn btn-primary btn-block">Salvar</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Exemplo_Formulario_Validacao;