import React from 'react';

import './styles.css'; 

const Exemplo_Breadcrumb = () => {
  return (
    <>
      <div className="container">
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item active">
              Home
            </li>
          </ol>
        </nav>
        <hr/>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              Home
            </li>
            <li className="breadcrumb-item active">
              Cursos
            </li>
          </ol>
        </nav>
        <hr/>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Cursos</a>
            </li>
            <li className="breadcrumb-item active">
              Bootstrap 4
            </li>
          </ol>
        </nav>
      </div>
    </>
  )
}

export default Exemplo_Breadcrumb;