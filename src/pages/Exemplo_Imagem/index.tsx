import React from 'react';

import './styles.css'; 
import imagemIMG from '../../assets/image.jpg';

const Exemplo_Imagem = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <img src={imagemIMG} alt="imagem" className="img-fluid"/>
          </div>
          <div className="col">
            <img src={imagemIMG} alt="imagem" className="img-fluid"/>
          </div>
        </div>

        <div className="p-2">
          <img src={imagemIMG} alt="imagem" className="img-thumbnail" style={{ width: '256px'}}/>
        </div>

        <div className="p-2">
          <img src={imagemIMG} alt="imagem" className="img-fluid rounded" style={{ width: '256px'}}/>
        </div>
        
        <div className="p-2">
          <img src={imagemIMG} alt="imagem" className="rounded d-block mx-auto" style={{ width: '256px'}}/>
        </div>

        <div className="p-2">
          <picture>
            <source srcSet={imagemIMG}/>
            <img src={imagemIMG} alt="imagem" className="img-fluid img-thumbnail" style={{ width: '256px'}}/>
          </picture>
        </div> 

        <figure className="figure">
          <img src={imagemIMG} alt="imagem" className="figure-mg img-fluid" style={{ width: '256px'}}/>
          <figcaption className="figute-caption">
            Legenda da Imagem
          </figcaption>
        </figure>

        <figure className="figure">
          <img src={imagemIMG} alt="imagem" className="figure-mg img-fluid" style={{ width: '256px'}}/>
          <figcaption className="figute-caption text-right">
            Legenda da Imagem
          </figcaption>
        </figure>

        <figure className="figure">
          <img src={imagemIMG} alt="imagem" className="figure-mg img-fluid" style={{ width: '256px'}}/>
          <figcaption className="figute-caption text-center">
            Legenda da Imagem
          </figcaption>
        </figure>
      </div>
    </>
  )
}

export default Exemplo_Imagem;