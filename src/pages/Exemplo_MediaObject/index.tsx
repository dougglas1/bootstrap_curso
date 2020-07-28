import React from 'react';

import './styles.css'; 
import imageIMG from '../../assets/image.jpg';

const Exemplo_MediaObject = () => {
  return (
    <>
      <div className="container">
        <div className="media">
          <img 
            src={imageIMG} 
            alt="Imagem" 
            style={{ width: '200px', height: '200px' }}
            className="mr-3"
          />
          <div className="media-body">
            <h6 className="mb-0">Lorem ipsum dolor sit</h6>
            amet consectetur adipisicing elit. Obcaecati quam voluptatem odio dicta neque eius facere nostrum quaerat maiores quod natus unde veritatis consectetur earum, doloremque iusto enim magni repudiandae?
          </div>
        </div>

        <hr/>

        <div className="media">
          <img 
            src={imageIMG} 
            alt="Imagem" 
            style={{ width: '200px', height: '200px' }}
            className="mr-3 rounded-circle"
          />
          <div className="media-body">
            <h6 className="mb-0">Lorem ipsum dolor sit</h6>
            amet consectetur adipisicing elit. Obcaecati quam voluptatem odio dicta neque eius facere nostrum quaerat maiores quod natus unde veritatis consectetur earum, doloremque iusto enim magni repudiandae?
          </div>
        </div>

        <hr/>

        <div className="media">
          <img 
            src={imageIMG} 
            alt="Imagem" 
            style={{ width: '50px', height: '50px' }}
            className="mr-3 align-self-center"
          />
          <div className="media-body">
            <h6 className="mb-0">Lorem ipsum dolor sit</h6>
            amet consectetur adipisicing elit. Obcaecati quam voluptatem odio dicta neque eius facere nostrum quaerat maiores quod natus unde veritatis consectetur earum, doloremque iusto enim magni repudiandae?
          </div>
        </div>

        <hr/>

        <div className="media">
          <img 
            src={imageIMG} 
            alt="Imagem" 
            style={{ width: '50px', height: '50px' }}
            className="mr-3"
          />
          <div className="media-body">
            <h6 className="mb-0">Lorem ipsum dolor sit</h6>
            amet consectetur adipisicing elit. Obcaecati quam voluptatem odio dicta neque eius facere nostrum quaerat maiores quod natus unde veritatis consectetur earum, doloremque iusto enim magni repudiandae?
            <hr/>
            <div className="media">
              <img 
                src={imageIMG} 
                alt="Imagem" 
                style={{ width: '50px', height: '50px' }}
                className="mr-3"
              />
              <div className="media-body">
                <h6 className="mb-0">Lorem ipsum dolor sit</h6>
                amet consectetur adipisicing elit. Obcaecati quam voluptatem odio dicta neque eius facere nostrum quaerat maiores quod natus unde veritatis consectetur earum, doloremque iusto enim magni repudiandae?
              </div>
            </div>
          </div>
        </div>

        <hr/>

        <ul className="list-unstyled">
          <li className="media">
            <img 
              src={imageIMG} 
              alt="Imagem" 
              style={{ width: '50px', height: '50px' }}
              className="mr-3"
            />
            <div className="media-body">
              <h6 className="mb-0">Lorem ipsum dolor sit</h6>
              amet consectetur adipisicing elit. Obcaecati quam voluptatem odio dicta neque eius facere nostrum quaerat maiores quod natus unde veritatis consectetur earum, doloremque iusto enim magni repudiandae?
            </div>
          </li>
          <li className="media my-4">
            <img 
              src={imageIMG} 
              alt="Imagem" 
              style={{ width: '50px', height: '50px' }}
              className="mr-3"
            />
            <div className="media-body">
              <h6 className="mb-0">Lorem ipsum dolor sit</h6>
              amet consectetur adipisicing elit. Obcaecati quam voluptatem odio dicta neque eius facere nostrum quaerat maiores quod natus unde veritatis consectetur earum, doloremque iusto enim magni repudiandae?
            </div>
          </li>
          <li className="media">
            <img 
              src={imageIMG} 
              alt="Imagem" 
              style={{ width: '50px', height: '50px' }}
              className="mr-3"
            />
            <div className="media-body">
              <h6 className="mb-0">Lorem ipsum dolor sit</h6>
              amet consectetur adipisicing elit. Obcaecati quam voluptatem odio dicta neque eius facere nostrum quaerat maiores quod natus unde veritatis consectetur earum, doloremque iusto enim magni repudiandae?
            </div>
          </li>
        </ul>
        <hr/>
      </div>
    </>
  )
}

export default Exemplo_MediaObject;