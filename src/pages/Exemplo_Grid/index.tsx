import React from 'react';

import './styles.css'; 

const Exemplo_Grid = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
          <header>header</header>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <nav>Menu</nav>
          </div>
          <div className="col-8">
            <main>Content</main>
          </div>
        </div>
      </div>
    </>
  )
}

export default Exemplo_Grid;