import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import App2 from './Products';
import App5 from './Pass';

const Title = (props) => {
    const { children } = props;
    return (
      <>
        {children}
      </>
    );
}

const Article = (props) => {
    const { children } = props;
    return (
      <>
        {children}
      </>
    );
}
const Div = (props) => {
    const { children } = props;
    return (
      <>
        {children}
      </>
    );
}

const App1 = () => {
        return (
            <Router>
            <div id="container">
                <Title>
                  <article id= "article">
                  <h2>Registro</h2>
                  </article>
                </Title>
                <Article>
                  <p id="description">Ingresa tu email y contraseña para ingresar a tu inventario</p>
                </Article>
                <Div>
                    <div id="input">
                        <input id="uno" type="text" placeholder="Email" name="Email"  required />
                        <input id="dos"  type="password" placeholder="Contraseña" name="uname"  required></input>
                            <a href="/Products">
                              <button id="button">
                               Sign in
                              </button>
                            </a>
                    </div>
                    <main id="mainone">
                      <div>
                        <a href="/Pass">
                          <p>
                            Olvidó su contraseña
                          </p>
                        </a>
                      </div>
                    </main>
                </Div>
            </div>
            <Switch >
                <Route path="/Products">
                    <App2></App2>
                </Route>
                <Route path="/Pass">
                    <App5></App5>
                </Route>
            </Switch>
            </Router>
        )

      };



export default App1;