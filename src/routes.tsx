import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Exemplo_Grid from './pages/Exemplo_Grid';
import Exemplo_Grid2 from './pages/Exemplo_Grid2';
import Exemplo_Flexbox from './pages/Exemplo_Flexbox';
import Exemplo_Tipografia from './pages/Exemplo_Tipografia';
import Desafio01 from './pages/Desafio01';
import Exemplo_Imagem from './pages/Exemplo_Imagem';
import Exemplo_Tabela from './pages/Exemplo_Tabela';
import Exemplo_Alerta from './pages/Exemplo_Alerta';
import Exemplo_Button from './pages/Exemplo_Button';
import Exemplo_Badge from './pages/Exemplo_Badge';
import Exemplo_ListGroup from './pages/Exemplo_ListGroup';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={Exemplo_Grid} path="/exemplo-grid" />
      <Route component={Exemplo_Grid2} path="/exemplo-grid2" />
      <Route component={Exemplo_Flexbox} path="/exemplo-flexbox" />
      <Route component={Exemplo_Tipografia} path="/exemplo-tipografia" />
      <Route component={Desafio01} path="/desafio01" />
      <Route component={Exemplo_Imagem} path="/exemplo-imagem" />
      <Route component={Exemplo_Tabela} path="/exemplo-tabela" />
      <Route component={Exemplo_Alerta} path="/exemplo-alerta" />
      <Route component={Exemplo_Button} path="/exemplo-button" />
      <Route component={Exemplo_Badge} path="/exemplo-badge" />
      <Route component={Exemplo_ListGroup} path="/exemplo-listgroup" />
    </BrowserRouter>
  )
}

export default Routes;