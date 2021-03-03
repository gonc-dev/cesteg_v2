import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Products from './products';
import Department from './department';
import Product from './product';
import Navbar from './nav';

export default function App() {
  return (
    <Router>
      <div class="body">
        <Navbar />
        <Switch>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/product/:id">
            <Product />
          </Route>
          <Route path="/department/:id">
            <Department />
          </Route>
          <Route path="/services">
            <About />
          </Route>
          <Route path="/case-studies">
            <About />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact-us">
            <Users />
          </Route>
        </Switch>
      </div>
      <div className='footer'></div>
    </Router>
  );
}


function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}