import React, { useState } from 'react';

import './styles.css'; 

const Exemplo_Alerta = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      <div className="container">
        <div className="alert alert-success" role="alert">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos distinctio quidem natus est nobis, at animi minus commodi. Ea fugit fugiat corrupti voluptate laboriosam voluptatibus reprehenderit et est inventore accusamus.
        </div>
        
        <div className="row">
          <div className="col">
            <div className="alert alert-secondary">
              Hello World
            </div>
          </div>
          <div className="col">
            <div className="alert alert-primary">
              Hello World
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="alert alert-danger">
              Hello World
            </div>
          </div>
          <div className="col">
            <div className="alert alert-warning">
              Hello World
            </div>
          </div>
        </div>

        <div className="alert alert-info">
          Information! <a href="Teste">Teste</a>
        </div>

        <div className="alert alert-dark">
          <h4>Título</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque necessitatibus voluptates sequi aperiam ratione! Ipsa, similique. Sequi dignissimos alias itaque, non hic quidem et animi inventore voluptatum, iste sit culpa?</p>
          <hr/>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium tempore fugit obcaecati temporibus. Sed laudantium excepturi rem rerum asperiores autem pariatur animi est. Unde ad porro incidunt reiciendis error perspiciatis?</p>
        </div>

        { show && 
        <div className="alert alert-success alert-dismissible fade show" role="alert">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat delectus amet quasi necessitatibus non perferendis, excepturi esse optio modi perspiciatis adipisci nisi alias placeat, ipsum eum hic. Suscipit, necessitatibus sequi.
          <button 
            className="close"
            onClick={() => setShow(false)}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        }
      </div>
    </>
  )
}

export default Exemplo_Alerta;