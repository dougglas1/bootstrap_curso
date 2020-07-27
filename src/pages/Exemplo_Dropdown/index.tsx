import React from 'react';

import './styles.css'; 

const Exemplo_Dropdown = () => {
  return (
    <>
      <div className="container">
        <br/>
        
        <div className="dropdown">
          <button 
            type="button"
            className="btn btn-primary dropdown-toggle"
            data-toggle="dropdown"
          > Menu
          </button>
          <div className="dropdown-menu">
            <a href="#" className="dropdown-item">1</a>
            <a href="#" className="dropdown-item">2</a>
            <a href="#" className="dropdown-item">3</a>
          </div>
        </div>

        <hr/>

        <div className="dropdown">
          <button 
            type="button"
            className="btn btn-primary dropdown-toggle"
            data-toggle="dropdown"
          > Menu
          </button>
          <div className="dropdown-menu">
            <a href="#" className="dropdown-item">1</a>
            <a href="#" className="dropdown-item">2</a>
            <div className="dropdown-divider"></div>
            <a href="#" className="dropdown-item">3</a>
          </div>
        </div>

        <hr/>

        <div className="dropdown">
          <button 
            type="button"
            className="btn btn-primary dropdown-toggle"
            data-toggle="dropdown"
          > Menu
          </button>
          <div className="dropdown-menu" style={{ maxWidth: '200px'}}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti laudantium illum nostrum nam enim, sunt fugiat beatae vitae amet quia eaque culpa expedita alias quo quasi qui, error quaerat adipisci.</p>
          </div>
        </div>

        <hr/>

        <div className="btn-group">
          <button 
            type="button"
            className="btn btn-primary"
          > Menu
          </button>
          <button 
            type="button"
            className="btn btn-primary dropdown-toggle-split dropdown-toggle"
            data-toggle="dropdown"
          >
            <span className="sr-only">Toggle</span>
          </button>  
          <div className="dropdown-menu">
            <a href="#" className="dropdown-item">1</a>
            <a href="#" className="dropdown-item">2</a>
            <a href="#" className="dropdown-item">3</a>
          </div>
        </div>

        <hr/>
        
        <div className="dropdown">
          <button 
            type="button" 
            data-toggle="dropdown" 
            className="btn btn-primary btn-lg dropdown-toggle"
          > Menu
          </button>
          <div className="dropdown-menu">
            <a href="#" className="dropdown-item">1</a>
            <a href="#" className="dropdown-item">2</a>
            <a href="#" className="dropdown-item">3</a>
          </div>
        </div>

        <hr/>

        <div className="dropdown">
          <button 
            type="button" 
            data-toggle="dropdown" 
            className="btn btn-primary btn-sm dropdown-toggle"
          > Menu
          </button>
          <div className="dropdown-menu">
            <a href="#" className="dropdown-item">1</a>
            <a href="#" className="dropdown-item">2</a>
            <a href="#" className="dropdown-item">3</a>
          </div>
        </div>

        <hr/>

        <div className="dropdown">
          <button 
            type="button" 
            data-toggle="dropdown" 
            className="btn btn-primary dropdown-toggle"
          > Menu
          </button>
          <div className="dropdown-menu">
            <span className="dropdown-item-text">Lorem</span>
            <a href="#" className="dropdown-item">1</a>
            <a href="#" className="dropdown-item">2</a>
            <a href="#" className="dropdown-item disabled">3</a>
          </div>
        </div>

        <hr/>

        <div className="dropdown">
          <button 
            type="button" 
            data-toggle="dropdown" 
            className="btn btn-primary dropdown-toggle"
          > Menu
          </button>
          <div className="dropdown-menu">
            <button className="dropdown-item">1</button>
            <button className="dropdown-item">2</button>
            <button className="dropdown-item" disabled>3</button>
          </div>
        </div>

        <hr/>

        <div className="dropdown">
          <button 
            type="button" 
            data-toggle="dropdown" 
            className="btn btn-primary dropdown-toggle"
          > Menu
          </button>
          <div className="dropdown-menu">
            <h6 className="dropdown-header">Lorem</h6>
            <button className="dropdown-item">1</button>
            <button className="dropdown-item">2</button>
            <button className="dropdown-item" disabled>3</button>
          </div>
        </div>

        <hr/>

        <div className="dropdown dropup">
          <button 
            type="button" 
            data-toggle="dropdown" 
            className="btn btn-primary dropdown-toggle"
          > Menu
          </button>
          <div className="dropdown-menu">
            <span className="dropdown-item-text">Lorem</span>
            <a href="#" className="dropdown-item">1</a>
            <a href="#" className="dropdown-item">2</a>
            <a href="#" className="dropdown-item disabled">3</a>
          </div>
        </div>

        <hr/>

        <div className="dropdown dropright">
          <button 
            type="button" 
            data-toggle="dropdown" 
            className="btn btn-primary dropdown-toggle"
          > Menu
          </button>
          <div className="dropdown-menu">
            <span className="dropdown-item-text">Lorem</span>
            <a href="#" className="dropdown-item">1</a>
            <a href="#" className="dropdown-item">2</a>
            <a href="#" className="dropdown-item disabled">3</a>
          </div>
        </div>

        <hr/>
        
        <div className="dropdown dropleft">
          <button 
            type="button" 
            data-toggle="dropdown" 
            className="btn btn-primary dropdown-toggle"
          > Menu
          </button>
          <div className="dropdown-menu">
            <span className="dropdown-item-text">Lorem</span>
            <a href="#" className="dropdown-item">1</a>
            <a href="#" className="dropdown-item">2</a>
            <a href="#" className="dropdown-item disabled">3</a>
          </div>
        </div>

        <hr/>

        <div className="dropdown">
          <button 
            type="button" 
            data-toggle="dropdown" 
            className="btn btn-primary dropdown-toggle"
          > Menu
          </button>
          <div className="dropdown-menu dropdown-menu-right">
            <span className="dropdown-item-text">Lorem</span>
            <a href="#" className="dropdown-item">1</a>
            <a href="#" className="dropdown-item">2</a>
            <a href="#" className="dropdown-item disabled">3</a>
          </div>
        </div>

        <hr/>
      </div>
    </>
  )
}

export default Exemplo_Dropdown;