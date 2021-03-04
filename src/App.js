import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Products from './products';
import Department from './department';
import Product from './product';
import Services from './services';
import Service from './service';
import News from './news';
import Article from './article';
import About from './about';
import Navbar from './nav';
import ContactPage from './contact';
import CaseStudies from './case_studies';

export default function App() {
  return (
    <Router>
      <div className="body">
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
            <Services />
          </Route>
          <Route path="/service/:id">
            <Service />
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/article/:id">
            <Article />
          </Route>
          <Route path="/case-studies">
            <CaseStudies />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact-us">
            <ContactPage />
          </Route>
        </Switch>
      </div>
      <div className='footer'></div>
    </Router>
  );
}