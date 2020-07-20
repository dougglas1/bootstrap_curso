import React from 'react';

import './styles.css'; 

const Exemplo_Flexbox = () => {
  return (
    <>
      <div className="container">
        <div className="d-flex bg">
          <div className="bg p-2">1</div>
          <div className="bg p-2">2</div>
        </div>

        <div className="d-inline-flex bg">
          <div className="bg p-2">1</div>
          <div className="bg p-2">2</div>
        </div>

        <div className="d-inline-flex bg">
          <div className="bg p-2">1</div>
          <div className="bg p-2">2</div>
        </div>

        <div className="d-flex flex-row bg">
          <div className="bg p-2">1</div>
          <div className="bg p-2">2</div>
          <div className="bg p-2">3</div>
        </div>

        <div className="d-flex flex-row-reverse bg">
          <div className="bg p-2">1</div>
          <div className="bg p-2">2</div>
          <div className="bg p-2">3</div>
        </div>

        <div className="d-flex flex-column bg">
          <div className="bg p-2">1</div>
          <div className="bg p-2">2</div>
          <div className="bg p-2">3</div>
        </div>

        <div className="d-flex flex-column-reverse bg">
          <div className="bg p-2">1</div>
          <div className="bg p-2">2</div>
          <div className="bg p-2">3</div>
        </div>

        <div className="d-flex justify-content-start bg">
          <div className="bg p-2">1</div>
          <div className="bg p-2">2</div>
          <div className="bg p-2">3</div>
        </div>
        
        <div className="d-flex justify-content-end bg">
          <div className="bg p-2">1</div>
          <div className="bg p-2">2</div>
          <div className="bg p-2">3</div>
        </div>

        <div className="d-flex justify-content-center bg">
          <div className="bg p-2">1</div>
          <div className="bg p-2">2</div>
          <div className="bg p-2">3</div>
        </div>

        <div className="d-flex justify-content-between bg">
          <div className="bg p-2">1</div>
          <div className="bg p-2">2</div>
          <div className="bg p-2">3</div>
        </div>

        <div className="d-flex justify-content-around bg">
          <div className="bg p-2">1</div>
          <div className="bg p-2">2</div>
          <div className="bg p-2">3</div>
        </div>

        <div className="d-flex align-items-stretch bg" style={{ height:'200px'}}>
          <div className="bg p-2">1</div>
          <div className="bg p-2">2</div>
          <div className="bg p-2">3</div>
        </div>

        <div className="d-flex align-items-start bg" style={{ height:'200px'}}>
          <div className="bg p-2">1</div>
          <div className="bg p-2">2</div>
          <div className="bg p-2">3</div>
        </div>

        <div className="d-flex align-items-end bg" style={{ height:'200px'}}>
          <div className="bg p-2">1</div>
          <div className="bg p-2">2</div>
          <div className="bg p-2">3</div>
        </div>

        <div className="d-flex align-items-center bg" style={{ height:'200px'}}>
          <div className="bg p-2">1</div>
          <div className="bg p-2">2</div>
          <div className="bg p-2">3</div>
        </div>

        <div className="d-flex align-items-baseline bg" style={{ height:'200px'}}>
          <div className="bg p-2">1</div>
          <div className="bg p-2">2</div>
          <div className="bg p-2">3</div>
        </div>

        <div className="d-flex bg">
          <div className="bg flex-fill p-2">Aumenta o Espaço Conforme Conteúdo</div>
          <div className="bg flex-fill p-2">2</div>
          <div className="bg flex-fill p-2">3</div>
        </div>

        <div className="d-flex bg">
          <div className="bg flex-grow-1 p-2">Aumenta o Espaço Conforme Conteúdo</div>
          <div className="bg p-2">2</div>
          <div className="bg p-2">3</div>
        </div>

        <div className="d-flex bg">
          <div className="bg p-2 flex-shrink-1">1</div>
          <div className="bg p-2 w-100">2</div>
        </div>

        <div className="d-flex flex-nowrap bg" style={{ overflow: 'auto'}}>
          <div className="bg p-2">Item</div>
          <div className="bg p-2">Item</div>
          <div className="bg p-2">Item</div>
          <div className="bg p-2">Item</div>
          <div className="bg p-2">Item</div>
          <div className="bg p-2">Item</div>
          <div className="bg p-2">Item</div>
          <div className="bg p-2">Item</div>
          <div className="bg p-2">Item</div>
          <div className="bg p-2">Item</div>
          <div className="bg p-2">Item</div>
          <div className="bg p-2">Item</div>
          <div className="bg p-2">Item</div>
          <div className="bg p-2">Item</div>
        </div>
        
        <div className="d-flex flex-wrap bg">
          <div className="bg p-2">Item</div>
          <div className="bg p-2">Item</div>
          <div className="bg p-2">Item</div>
          <div className="bg p-2">Item</div>
          <div className="bg p-2">Item</div>
          <div className="bg p-2">Item</div>
          <div className="bg p-2">Item</div>
          <div className="bg p-2">Item</div>
          <div className="bg p-2">Item</div>
          <div className="bg p-2">Item</div>
          <div className="bg p-2">Item</div>
          <div className="bg p-2">Item</div>
          <div className="bg p-2">Item</div>
          <div className="bg p-2">Item</div>
        </div>

        <div className="d-flex flex-wrap-reverse bg">
          <div className="bg p-2">Item</div>
          <div className="bg p-2">Item</div>
          <div className="bg p-2">Item</div>
          <div className="bg p-2">Item</div>
          <div className="bg p-2">Item</div>
          <div className="bg p-2">Item</div>
          <div className="bg p-2">Item</div>
          <div className="bg p-2">Item</div>
          <div className="bg p-2">Item</div>
          <div className="bg p-2">Item</div>
          <div className="bg p-2">Item</div>
          <div className="bg p-2">Item</div>
          <div className="bg p-2">Item</div>
          <div className="bg p-2">Item</div>
        </div>

        <div className="d-flex flex-wrap bg">
          <div className="bg p-2">Item</div>
          <div className="bg p-2">Item</div>
          <div className="bg p-2">Item</div>
          <div className="bg p-2">Item</div>
          <div className="bg p-2">Item</div>
          <div className="bg p-2">Item</div>
          <div className="bg p-2">Item</div>
          <div className="bg p-2">Item</div>
          <div className="bg p-2">Item</div>
          <div className="bg p-2">Item</div>
          <div className="bg p-2">Item</div>
          <div className="bg p-2">Item</div>
          <div className="bg p-2">Item</div>
          <div className="bg p-2 order-first">Último Item</div>
        </div>

        <div 
          className="d-flex flex-wrap align-content-center bg"
          style={{ height: '20vh'}}
        >
          <div className="bg p-2">Item</div>
          <div className="bg p-2">Item</div>
          <div className="bg p-2">Item</div>
          <div className="bg p-2">Item</div>
          <div className="bg p-2">Item</div>
          <div className="bg p-2">Item</div>
          <div className="bg p-2">Item</div>
          <div className="bg p-2">Item</div>
          <div className="bg p-2">Item</div>
          <div className="bg p-2">Item</div>
          <div className="bg p-2">Item</div>
          <div className="bg p-2">Item</div>
          <div className="bg p-2">Item</div>
          <div className="bg p-2">Item</div>
        </div>

        <div 
          className="d-flex flex-wrap justify-content-center align-content-center bg"
          style={{ height: '20vh'}}
        >
          <div className="bg p-2">Item</div>
          <div className="bg p-2">Item</div>
          <div className="bg p-2">Item</div>
          <div className="bg p-2">Item</div>
          <div className="bg p-2">Item</div>
          <div className="bg p-2">Item</div>
          <div className="bg p-2">Item</div>
          <div className="bg p-2">Item</div>
          <div className="bg p-2">Item</div>
          <div className="bg p-2">Item</div>
          <div className="bg p-2">Item</div>
          <div className="bg p-2">Item</div>
          <div className="bg p-2">Item</div>
          <div className="bg p-2">Item</div>
        </div>
      </div>
    </>
  )
}

export default Exemplo_Flexbox;