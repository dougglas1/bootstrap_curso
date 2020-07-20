import React from 'react';

import './styles.css'; 

const Exemplo_Tipografia = () => {
  return (
    <>
      <div className="container">
        <h1>Hello World</h1>
        <h2>Hello World</h2>
        <h3>Hello World</h3>
        <h4>Hello World</h4>
        <h5>Hello World</h5>
        <h6>Hello World</h6>

        <p className="h1">Hello World</p>
        <p className="h2">Hello World</p>
        <p className="h3">Hello World</p>
        <p className="h4">Hello World</p>
        <p className="h5">Hello World</p>
        <p className="h6">Hello World</p>

        <h1>Hello <small>World</small></h1>
        <h2>Hello <small>World</small></h2>
        <h3>Hello <small>World</small></h3>
        <h4>Hello <small>World</small></h4>
        <h5>Hello <small>World</small></h5>
        <h6>Hello <small>World</small></h6>

        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia quae, id et ut dolores in corrupti esse architecto culpa. Odit recusandae quasi sit voluptatem. Dolor quam numquam molestias exercitationem rerum?</p>
        <p className="lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, officiis consectetur suscipit non quasi harum quidem, ipsum iste quam voluptatem facere magnam doloremque, quibusdam repellendus dolore repudiandae consequatur ex amet!</p>
        <p><mark>Hello</mark> World</p>
        <p><del>Hello</del> World</p>
        <p><s>Hello</s> World</p>
        <p><ins>Hello</ins> World</p>
        <p><u>Hello</u> World</p>
        <p><small>Hello</small> World</p>
        <p><strong>Hello</strong> World</p>
        <p><em>Hello</em> World</p>

        <p><abbr title="Olá">Hello</abbr> World</p>

        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi maxime facilis blanditiis natus quo dolorum, rem omnis ullam numquam quibusdam neque esse dicta, delectus, et placeat amet maiores alias? Cupiditate?</p>

        <blockquote className="blockquote">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi maxime facilis blanditiis natus quo dolorum, rem omnis ullam numquam quibusdam neque esse dicta, delectus, et placeat amet maiores alias? Cupiditate?</p>
        </blockquote>

        <blockquote className="blockquote">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi maxime facilis blanditiis natus quo dolorum, rem omnis ullam numquam quibusdam neque esse dicta, delectus, et placeat amet maiores alias? Cupiditate?</p>
          <footer className="blockquote-footer">
            Douglas S. <cite title="Desenvolvedor">Desenvolvedor</cite>
          </footer>
        </blockquote>

        <blockquote className="blockquote text-center">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi maxime facilis blanditiis natus quo dolorum, rem omnis ullam numquam quibusdam neque esse dicta, delectus, et placeat amet maiores alias? Cupiditate?</p>
          <footer className="blockquote-footer">
            Douglas S. <cite title="Desenvolvedor">Desenvolvedor</cite>
          </footer>
        </blockquote>

        <blockquote className="blockquote text-right">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi maxime facilis blanditiis natus quo dolorum, rem omnis ullam numquam quibusdam neque esse dicta, delectus, et placeat amet maiores alias? Cupiditate?</p>
          <footer className="blockquote-footer">
            Douglas S. <cite title="Desenvolvedor">Desenvolvedor</cite>
          </footer>
        </blockquote>

        <ul className="list-unstyled">
          <li>Conteudo 01</li>
          <li>Conteudo 02</li>
          <li>Conteudo 03</li>
          <li>Conteudo 04</li>
        </ul>

        <ul className="list-inline">
          <li className="list-inline-item">Conteudo 01</li>
          <li className="list-inline-item">Conteudo 02</li>
          <li className="list-inline-item">Conteudo 03</li>
          <li className="list-inline-item">Conteudo 04</li>
        </ul>

        <dl>
          <dt>Título</dt>
          <dd>Conteúdo</dd>

          <dt>Título</dt>
          <dd>Conteúdo</dd>

          <dt>Título</dt>
          <dd>Conteúdo</dd>
        </dl>

        <dl className="row">
          <dt className="col-sm-3">Título</dt>
          <dd className="col-sm-9">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum commodi recusandae nostrum, odio similique eligendi nam beatae eum optio. Voluptatem ex sint architecto exercitationem corrupti iste, non dolor aliquam? Quam?</dd>

          <dt className="col-sm-3">Título</dt>
          <dd className="col-sm-9">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum doloremque minus nobis, beatae earum atque animi voluptate explicabo quidem voluptates consectetur asperiores laudantium alias, illo quod delectus consequatur est tempora?</dd>

          <dt className="col-sm-3">Título</dt>
          <dd className="col-sm-9">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptates temporibus magni minus vitae, tempora officia cumque eos distinctio. Sapiente eius quia, obcaecati hic iure ut maiores odit culpa consectetur.</dd>
        </dl>

        <div 
          className="text-wrap"
          style={{ width:'150px'}}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus est asperiores pariatur iure illo, deleniti explicabo architecto expedita non eveniet exercitationem debitis necessitatibus minus, itaque ipsum eius? Quo, asperiores commodi?
        </div>

        <br/>
        <div 
          className="text-nowrap"
          style={{ width:'150px'}}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus est asperiores pariatur iure illo, deleniti explicabo architecto expedita non eveniet exercitationem debitis necessitatibus minus, itaque ipsum eius? Quo, asperiores commodi?
        </div>

        <br/>
        <div 
          className="text-truncate"
          style={{ width:'150px'}}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus est asperiores pariatur iure illo, deleniti explicabo architecto expedita non eveniet exercitationem debitis necessitatibus minus, itaque ipsum eius? Quo, asperiores commodi?
        </div>

        <br/>
        <p className="text-lowercase">Conteudo Minuculos</p>
        <p className="text-uppercase">Conteudo Maiusuclo</p>
        <p className="text-capitalize">Cada palavra com inicial maiusculo</p>
        <br/>
        
        <p className="font-weight-bold">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, iure! Aliquid vero quae possimus excepturi nam, iusto in odio repudiandae ad magnam neque magni sequi vitae cupiditate assumenda sit ex?
        </p>

        <p className="font-weight-bolder">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, iure! Aliquid vero quae possimus excepturi nam, iusto in odio repudiandae ad magnam neque magni sequi vitae cupiditate assumenda sit ex?
        </p>

        <p className="font-weight-normal">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, iure! Aliquid vero quae possimus excepturi nam, iusto in odio repudiandae ad magnam neque magni sequi vitae cupiditate assumenda sit ex?
        </p>

        <p className="font-weight-light">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, iure! Aliquid vero quae possimus excepturi nam, iusto in odio repudiandae ad magnam neque magni sequi vitae cupiditate assumenda sit ex?
        </p>

        <p className="font-weight-lighter">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, iure! Aliquid vero quae possimus excepturi nam, iusto in odio repudiandae ad magnam neque magni sequi vitae cupiditate assumenda sit ex?
        </p>

        <p className="font-italic">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, iure! Aliquid vero quae possimus excepturi nam, iusto in odio repudiandae ad magnam neque magni sequi vitae cupiditate assumenda sit ex?
        </p>

        <p className="text-monospace">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, iure! Aliquid vero quae possimus excepturi nam, iusto in odio repudiandae ad magnam neque magni sequi vitae cupiditate assumenda sit ex?
        </p>

        <p>
          Acesse o Site <a href="Teste" className="text-reset">World</a>
        </p>

        <p>
          Acesse o Site <a href="Teste" className="text-decoration-none">World</a>
        </p>

        <p className="text-primary">Texto</p>
        <p className="text-secondary">Texto</p>
        <p className="text-success">Texto</p>
        <p className="text-danger">Texto</p>
        <p className="text-warning">Texto</p>
        <p className="text-info">Texto</p>
        <p className="text-light bg-dark">Texto</p>
        <p className="text-body">Texto</p>
        <p className="text-muted">Texto</p>
        <p className="text-white bg-dark">Texto</p>
        <p className="text-black-50">Texto</p>
        <p className="text-white-50 bg-dark">Texto</p>
        <br/>

        <p>Use as teclas <kbd>CTRL</kbd> + 
        <kbd>P</kbd> para imprimir.</p>
      </div>
    </>
  )
}

export default Exemplo_Tipografia;