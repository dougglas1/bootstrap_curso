import React, { useState } from 'react';

import './styles.css'; 

const Exemplo_Button = () => {
  const [pressed, setPressed] = useState(false);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <button className="btn btn-primary">Adicionar</button>
            <button className="btn btn-secondary">Adicionar</button>
            <button className="btn btn-success">Adicionar</button>
            <button className="btn btn-danger">Adicionar</button>
            <button className="btn btn-warning">Adicionar</button>
            <button className="btn btn-info">Adicionar</button>
            <button className="btn btn-dark">Adicionar</button>
            <button className="btn btn-light">Adicionar</button>
            <button className="btn btn-link">Adicionar</button>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <input type="button" className="btn btn-primary" value="OK"/>
            <a href="" className="btn btn-primary">OK</a>
            <button className="btn btn-primary">OK</button>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <button className="btn btn-outline-primary">OK</button>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <button className="btn btn-success btn-lg">OK</button>
            <button className="btn btn-success btn-sm">OK</button>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <button className="btn btn-success btn-block">OK</button>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <a href="OK" className="btn btn-success active btn-block">Link</a>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <a href="OK" className="btn btn-success active btn-block disabled">Link</a>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <button 
              className="btn btn-success" 
              id="btn-auto-save"
              data-toggle="button"
              aria-pressed={pressed}
            >
              Auto Save
            </button>
          </div>
        </div>

        <br/>

        <div className="row">
          <div className="col">
            <div 
              className="btn-group btn-group-toggle"
              data-toggle="buttons"
            >
              <label 
                htmlFor="option1"
                className="btn btn-secondary active"
              >
                1
                <input 
                  type="radio" 
                  name="options" 
                  id="option1"
                  checked
                />
              </label>
              <label 
                htmlFor="option2" 
                className="btn btn-secondary"
              >
                2
                <input 
                  type="radio" 
                  name="options" 
                  id="option2"
                />
              </label>
              <label 
                htmlFor="option3" 
                className="btn btn-secondary"
              >
                3
                <input 
                  type="radio" 
                  name="options" 
                  id="option3"
                />
              </label>
            </div>
          </div>
        </div>
        <br/>
        
        <button 
          className="btn btn-primary" 
          id="btn-click"
          onClick={() => setPressed(pressed ? false : true)}
        >
          Ativa/Desativa Auto Save
        </button>
      </div>
    </>
  )
}

export default Exemplo_Button;