import React from 'react';

import './styles.css'; 

const Exemplo_Formulario = () => {
  return (
    <>
      <div className="container">
        <br/>

        <form action="">
          <label htmlFor="email">E-mail</label>
          <input type="email" name="email" id="email"/>
          
          <label htmlFor="password">Senha</label>
          <input type="password" name="password" id="password"/>

          <button type="submit">Acessar</button>
        </form>

        <hr/>

        <form action="">
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input className="form-control" type="email" name="email" id="email"/>
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <input className="form-control" type="password" name="password" id="password"/>
          </div>

          <button type="submit" className="btn btn-primary">Acessar</button>
        </form>

        <hr/>

        <form action="">
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input className="form-control" type="email" name="email" id="email"/>
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <input className="form-control" type="password" name="password" id="password"/>
          </div>

          <div className="form-group">
            <label htmlFor="state">Estado</label>
            <select name="state" id="state" className="form-control">
              <option value="SP">São Paulo</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="SC">Samta Catarina</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="state">Estado</label>
            <select 
              name="state" 
              id="state" 
              className="form-control"
              size={5}
              multiple
            >
              <option value="SP">São Paulo</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="SC">Samta Catarina</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Mensagem</label>
            <textarea 
              name="message" 
              id="message" 
              cols={30}
              rows={10}
              className="form-control"
            >
            </textarea>
          </div>

          <div className="form-group">
            <label htmlFor="file">Foto</label>
            <input 
              type="file" 
              name="file" 
              id="file"
              className="form-control-file"
            />
          </div>

          <button type="submit" className="btn btn-primary">Acessar</button>
          
        </form>

        <hr/>

        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input 
            type="email" 
            className="form-control form-control"
            placeholder="douglas@douglas.com.br"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input 
            type="email" 
            className="form-control form-control-lg"
            placeholder="douglas@douglas.com.br"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input 
            type="email"
            className="form-control form-control-sm"
            placeholder="douglas@douglas.com.br"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input 
            type="email"
            className="form-control"
            placeholder="douglas@douglas.com.br"
            readOnly
          />
        </div>

        <div className="form-group">
          <label htmlFor="volume">Volume</label>
          <input 
            type="range"
            className="form-control-range"
            name="volume"
            id="volume"
          />
        </div>

        <div className="form-check">
          <input 
            type="radio"
            name="gender"
            id="gender-m"
            className="form-check-input"
            value="M"
          />
          <label htmlFor="gender-m" className="form-check-label">Masculino</label>
        </div>
        <div className="form-check">
          <input 
            type="radio"
            name="gender"
            id="gender-f"
            className="form-check-input"
            value="F"
          />
          <label htmlFor="gender-f" className="form-check-label">Feminino</label>
        </div>

        <hr/>

        <div className="form-check-inline">
          <input 
            type="radio"
            name="gender"
            id="gender-m"
            className="form-check-input"
            value="M"
          />
          <label htmlFor="gender-m" className="form-check-label">Masculino</label>
        </div>
        <div className="form-check-inline">
          <input 
            type="radio"
            name="gender"
            id="gender-f"
            className="form-check-input"
            value="F"
          />
          <label htmlFor="gender-f" className="form-check-label">Feminino</label>
        </div>
        <hr/>

          <div className="form-check">
            <input 
              type="checkbox"
              name="gender"
              id="gender"
              className="form-check-input"
              value="M"
            />
            <label htmlFor="gender-m" className="form-check-label">Aceito Termos de Uso</label>
          </div>
          <div className="form-check">
            <input 
              type="checkbox"
              name="gender"
              id="gender"
              className="form-check-input"
              value="F"
            />
            <label htmlFor="gender" className="form-check-label">Desejo Receber Informações</label>
          </div>
        <hr/>
      </div>
    </>
  )
}

export default Exemplo_Formulario;