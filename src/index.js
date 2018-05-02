import React from 'react';
import { render } from 'react-dom';
import { Switch, Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

import Loader from './components/Loader';
import Home from './pages/Home';
import asyncComponent from './asyncComponent';

//  Common bundle
// import About from './pages/About';
// import Products from './pages/Products';
// import Lectures from './pages/Lectures';
// import Contact from './pages/Contact';

const About = asyncComponent(() => import('./pages/About'), Loader);
const Products = asyncComponent(() => import('./pages/Products'), Loader);
const Lectures = asyncComponent(() => import('./pages/Lectures'), Loader);
const Contact = asyncComponent(() => import('./pages/Contact'), Loader);

import NavBar from './components/NavBar';

import './styles/app.scss'


const App = () => (
  <div>
    <BrowserRouter>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/products" component={Products} />
          <Route path="/contact" component={Contact} />
          <Route path="/lectures" component={Lectures} />
        </Switch>
      </div>
    </BrowserRouter>
  </div>
)


render(<App />, document.querySelector('.root'));