import React from 'react';

import './styles.css'; 

const Exemplo_Grid2 = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">auto</div>
          <div className="col-6">seis colunas</div>
          <div className="col">auto</div>
        </div>

        <div className="row">
          <div className="col-sm-8">.col-sm-8</div>
          <div className="col-sm-4">.col-sm-4</div>
        </div>

        <div className="row">
          <div className="col-sm">.auto sm</div>
          <div className="col-sm-5">.col-sm-5</div>
          <div className="col-sm">auto sm</div>
        </div>

        <div className="row">
          <div className="col-12 col-sm-4">1</div>
          <div className="col-6 col-sm-8">2</div>
        </div>

        <div className="row">
          <div className="col-6 col-md-4">col-6 col-md-4</div>
          <div className="col-6 col-md-4">col-6 col-md-4</div>
          <div className="col-6 col-md-4">col-6 col-md-4</div>
        </div>

        <div className="row">
          <div className="col-6">col-6</div>
          <div className="col-6">col-6</div>
        </div>

        <div className="row">
          <div className="col col-md-3 order-sm-3">Primeiro</div>
          <div className="col col-md-3 order-sm-2">Segundo</div>
          <div className="col col-md-6 order-sm-1">Terceiro</div>
        </div>

        <div className="row">
          <div className="col-sm-4">A</div>
          <div className="col-sm-4 offset-sm-4">C</div>
        </div>

        <div className="row">
          <div className="col-12">
            Nível: 1

            <div className="row">
              <div className="col-8">

                Nível: 2
                
                <div className="row">
                  <div className="col-3">3</div>
                  <div className="col-9">9</div>
                </div>
              </div>
              <div className="col-4">4</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Exemplo_Grid2;