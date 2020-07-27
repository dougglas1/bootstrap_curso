import React from 'react';

import './styles.css'; 

const Exemplo_Formulario_Custom = () => {
  return (
    <>
      <div className="container">
        
        <div className="custom-control custom-checkbox">
          <input 
            type="checkbox"
            name="gender"
            id="gender-m"
            className="custom-control-input"
            value="M"
          />
          <label 
            htmlFor="gender-m" 
            className="custom-control-label"
          >
            Aceito os termos de uso
          </label>
        </div>

        <hr/>

        <div className="custom-control custom-switch">
          <input 
            type="checkbox"
            name="gender"
            id="switch"
            className="custom-control-input"
          />
          <label 
            htmlFor="switch"
            className="custom-control-label"
          >
            Manter Conectado
          </label>
        </div>

        <hr/>

        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">R$</span>
          </div>
          <input 
            type="text" 
            className="form-control"
            placeholder="0,00"
          />
        </div>

        <hr/>

        <div className="input-group">
          <input 
            type="text" 
            className="form-control"
            placeholder="0"
          />
          <div className="input-group-append">
            <span className="input-group-text">,00</span>
          </div>
        </div>

        <hr/>
        
        <div className="form-group">
          <label htmlFor="slug">URL</label>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                http://localhost:3000/
              </span>
            </div>
            <input type="text" className="form-control" id="slug" placeholder="Slug"/>
          </div>
        </div>

        <hr/>

        <div className="form-group">
          <label htmlFor="slug">URL</label>
          <div className="input-group flex-nowrap input-group-sm">
            <div className="input-group-prepend">
              <span className="input-group-text">
                http://localhost:3000/
              </span>
            </div>
            <input type="text" className="form-control" id="slug" placeholder="Slug"/>
          </div>
        </div>

        <hr/>

        <div className="form-group">
          <label htmlFor="slug">URL</label>
          <div className="input-group flex-nowrap input-group-lg">
            <div className="input-group-prepend">
              <span className="input-group-text">
                http://localhost:3000/
              </span>
            </div>
            <input type="text" className="form-control" id="slug" placeholder="Slug"/>
          </div>
        </div>

        <hr/>

        <div className="form-group">
          <div className="input-group flex-nowrap">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <input type="checkbox"/>
              </div>              
            </div>
            <input type="text" className="form-control" id="slug" placeholder="Slug"/>
          </div>
        </div>

        <hr/>

        <div className="input-group">
          <div className="input-group-prepend">
            <button type="button" className="btn btn-primary">OK</button>
          </div>
          <input type="text" className="form-control" placeholder="Primeiro Nome"/>
        </div>
      </div>
    </>
  )
}

export default Exemplo_Formulario_Custom;