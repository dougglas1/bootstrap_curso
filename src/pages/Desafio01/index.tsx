import React from 'react';

import './styles.css'; 
import logoIMG from '../../assets/logo.png';

const Desafio01 = () => {
  return (
    <>
      <header className="text-white d-flex">
        <div className="container d-flex justify-content-between align-items-center">
            <img src={logoIMG} alt="Pizzaria"/>
            <nav>
                <ul className="list-inline">
                    <li className="list-inline-item">Home</li>
                    <li className="list-inline-item">Cardápio</li>
                    <li className="list-inline-item">Contato</li>
                </ul>
            </nav>
        </div>
      </header>

      <section className="container">
        <div className="row">
            <nav className="col-md-3">
                <ul className="list-unstyled">
                    <li className="p-2">Home</li>
                    <li className="p-2">Cardápio</li>
                    <li className="p-2">Pizzas Tradicionais</li>
                    <li className="p-2">Pizzas Nobres</li>
                    <li className="p-2">Pizzas Doces</li>
                    <li className="p-2">Promoções</li>
                    <li className="p-2">Pedido Online</li>
                    <li className="p-2">Contato</li>
                </ul>
            </nav>
            <main className="col-md-9">
                <h1>Home</h1>
                Lorem <strong>ipsum</strong> dolor sit amet consectetur adipisicing elit. Suscipit omnis rem, autem <del className="text-danger">similique</del> beatae enim illum atque explicabo vel quam cupiditate dignissimos velit consequatur facere nisi sed officia reiciendis! Enim?
            </main>
        </div>
      </section>

      <footer className="text-white">
        <div className="container">
            <div className="row">
                <ul className="col-sm-6 list-unstyled">
                    <li><h6>Links</h6></li>
                    <li>Home</li>
                    <li>Cardápio</li>
                    <li>Contato</li>
                </ul>
                <ul className="col-sm-6 list-unstyled">
                    <li><h6>Pizzas</h6></li>
                    <li>Tradicionais</li>
                    <li>Nobres</li>
                    <li>Doces</li>
                </ul>
            </div>
        </div>
      </footer>
    </>
  )
}

export default Desafio01;