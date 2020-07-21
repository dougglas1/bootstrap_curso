import React from 'react';

import './styles.css'; 

const Exemplo_ListGroup = () => {
  return (
    <>
      <ul className="list-group">
        <li className="list-group-item active">1</li>
        <li className="list-group-item">2</li>
        <li className="list-group-item">3</li>
        <li className="list-group-item list-group-item-primary">4</li>
        <li className="list-group-item list-group-item-warning">5</li>
      </ul>

      <hr/>

      <ul className="list-group">
        <a href="Teste" className="list-group-item list-group-item-action">1</a>
        <a href="Teste" className="list-group-item list-group-item-action active">2</a>
        <a href="Teste" className="list-group-item list-group-item-action">3</a>
        <a href="Teste" className="list-group-item list-group-item-action disabled">4</a>
        <a href="Teste" className="list-group-item list-group-item-action">5</a>
      </ul>

      <hr/>

      <ul className="list-group">
        <button className="list-group-item list-group-item-action">1</button>
        <button className="list-group-item list-group-item-action">2</button>
        <button className="list-group-item list-group-item-action">3</button>
        <button className="list-group-item list-group-item-action">4</button>
        <button className="list-group-item list-group-item-action disabled">5</button>
      </ul>

      <br/>

      <div className="container">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">1</li>
          <li className="list-group-item">2</li>
          <li className="list-group-item">3</li>
          <li className="list-group-item">4</li>
          <li className="list-group-item">5</li>
          <li className="list-group-item">6</li>
        </ul>

        <br/>

        <ul className="list-group list-group-flush list-group-horizontal-sm">
          <li className="list-group-item">1</li>
          <li className="list-group-item">2</li>
          <li className="list-group-item">3</li>
          <li className="list-group-item">4</li>
          <li className="list-group-item">5</li>
          <li className="list-group-item">6</li>
        </ul>

        <br/>
        
        <ul className="list-group">
          <li 
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            Bootstrap <span className="badge badge-primary badge-pill">4</span>
          </li>
          <li className="list-group-item">2</li>
          <li className="list-group-item">3</li>
          <li className="list-group-item">4</li>
        </ul>

        <br/>

        <div className="row">
          <div className="col">
            <div className="list-group">
              <a href="Teste" className="list-group-item list-group-item-action">
                <span className="d-flex justify-content-between">
                  <h5>Título</h5>
                  <small>há pouco</small>
                </span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, ipsa placeat. Est, quasi! Nostrum mollitia et dolores ad quasi sit, praesentium necessitatibus ipsa corrupti magni velit obcaecati sed reiciendis rem?</p>
                <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro optio ullam vero numquam veniam facilis, quaerat aut incidunt ipsum deleniti explicabo ratione consequatur sed sint ad temporibus quod ea esse!</small>
              </a>
            </div>
          </div>
        </div>

        <br/>
      </div>
    </>
  )
}

export default Exemplo_ListGroup;