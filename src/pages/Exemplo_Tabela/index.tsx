import React from 'react';

import './styles.css'; 

const Exemplo_Tabela = () => {
  return (
    <>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>NOME</th>
              <th>IDADE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Douglas</td>
              <td>25</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Pâmela</td>
              <td>28</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Ana</td>
              <td>23</td>
            </tr>
          </tbody>
        </table>

        <br/>

        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th>ID</th>
              <th>NOME</th>
              <th>IDADE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Douglas</td>
              <td>25</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Pâmela</td>
              <td>28</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Ana</td>
              <td>23</td>
            </tr>
          </tbody>
        </table>

        <br/>

        <table className="table table-hover table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>NOME</th>
              <th>IDADE</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-primary">
              <td>1</td>
              <td>Douglas</td>
              <td>25</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Pâmela</td>
              <td>28</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Ana</td>
              <td>23</td>
            </tr>
          </tbody>
        </table>

        <br/>

        <table className="table table-bordered table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>NOME</th>
              <th>IDADE</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-primary">
              <td>1</td>
              <td>Douglas</td>
              <td>25</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Pâmela</td>
              <td>28</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Ana</td>
              <td>23</td>
            </tr>
          </tbody>
        </table>

        <br/>

        <table className="table table-borderless table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>NOME</th>
              <th>IDADE</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-primary">
              <td>1</td>
              <td>Douglas</td>
              <td>25</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Pâmela</td>
              <td>28</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Ana</td>
              <td>23</td>
            </tr>
          </tbody>
        </table>

        <br/>
      </div>
    </>
  )
}

export default Exemplo_Tabela;