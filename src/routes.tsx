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
import Exemplo_Dropdown from './pages/Exemplo_Dropdown';
import Exemplo_Formulario from './pages/Exemplo_Formulario';
import Exemplo_Formulario_Grid from './pages/Exemplo_Formulario_Grid';
import Desafio02 from './pages/Desafio02';
import Exemplo_Formulario_Inline from './pages/Exemplo_Formulario_Inline';
import Exemplo_Formulario_Validacao from './pages/Exemplo_Formulario_Validacao';
import Exemplo_Formulario_Validacao_Tooltip from './pages/Exemplo_Formulario_Validacao_Tooltip';
import Exemplo_Formulario_Custom from './pages/Exemplo_Formulario_Custom';
import Exemplo_MediaObject from './pages/Exemplo_MediaObject';
import Exemplo_Breadcrumb from './pages/Exemplo_Breadcrumb';

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
      <Route component={Exemplo_Dropdown} path="/exemplo-dropdown" />
      <Route component={Exemplo_Formulario} path="/exemplo-formulario" />
      <Route component={Exemplo_Formulario_Grid} path="/exemplo-formulario-grid" />
      <Route component={Desafio02} path="/desafio02" />
      <Route component={Exemplo_Formulario_Inline} path="/exemplo-formulario-inline" />
      <Route component={Exemplo_Formulario_Validacao} path="/exemplo-formulario-validacao" />
      <Route component={Exemplo_Formulario_Validacao_Tooltip} path="/exemplo-formulario-validacao-tooltip" />
      <Route component={Exemplo_Formulario_Custom} path="/exemplo-formulario-custom" />
      <Route component={Exemplo_MediaObject} path="/exemplo-mediaobject" />
      <Route component={Exemplo_Breadcrumb} path="/exemplo-breadcrumb" />
    </BrowserRouter>
  )
}

export default Routes;