import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './components/App.css'
import App1 from './components/Login';
import App2 from './components/Products';
import App3 from './components/Categories';
import App4 from './components/Sales';
import App5 from './components/Pass';
import App6 from './components/CreateProduct';
import App7 from './components/CreateCategory';
import App8 from './components/TableFruits';
import App9 from './components/TableVegetables';
import App10 from './components/TableSnacks';

const Title = (props) => {
  const { children } = props;
  return (
    <>
      {children}
    </>
  );
}


class App extends Component {
    render () {
        return (
            <>
            <Router>
              <Title>
                  <article id= "article">
                    <Link to="/">
                      <header >Inventario</header>
                    </Link>
                  </article>
                  <nav id="main-nav">
                    <ul id="main-menu">
                        <li id="main-menu__item">
                          <Link to="/login" id="main-menu__item">
                            <p>Login</p>
                          </Link>
                        </li>
                        <li id="main-menu__item">
                          <Link to="/Products" id="main-menu__item">
                            <p>Productos</p>
                          </Link>
                        </li>
                        <li id="main-menu__item">
                          <Link to= "/Categories" id="main-menu__item">
                            <p>Categorías</p>
                          </Link>
                        </li>
                        <li id="main-menu__item">
                          <Link to = "Sales" id="main-menu__item">
                            <p>Ventas</p>
                          </Link>
                        </li>
                    </ul>
                  </nav>
              </Title>
              <Switch>
                <Route path="/login">
                  <App1/>
                </Route>
                <Route path="/Products">
                  <App2 />
                </Route>
                <Route path="/Categories">
                  <App3 />
                </Route>
                <Route path="/Sales">
                  <App4 />
                </Route>
                <Route path="/Pass">
                  <App5 />
                </Route>
                <Route path="/CreateProduct">
                  <App6 />
                </Route>
                <Route path="/CreateCategory">
                  <App7 />
                </Route>
                <Route path="/TableFruits">
                  <App8 />
                </Route>
                <Route path="/TableVegetables">
                  <App9 />
                </Route>
                <Route path="/TableSnacks">
                  <App10 />
                </Route>
              </Switch>
            </Router>
            </>
        );
   }
}




export default App;