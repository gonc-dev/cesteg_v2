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
import Home from './home';
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
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <div className='footer'>
      <section id="links">
        <div class="container">
            <div class="row m-auto">
                <div class="col-md-4">
                    <div class="row">
                        <a href="/products">Products</a>
                    </div>
                    <div class="row">
                        <a href="/services">Services</a>
                    </div>
                    <div class="row">
                        <a href="/news">News</a>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="row">
                        <a href="/case-studies">Case Studies</a>
                    </div>
                    <div class="row">
                        <a href="/about">About</a>
                    </div>
                    <div class="row">
                        <a href="/contact-us">Contact Us</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <footer class="text-center bg-foot" id="footer">
        <div class="container-fluid">
        <a href="www.google.com"><i class="social-icon fab fa-facebook-f"></i></a>
            <a href=""><i class="social-icon fab fa-twitter"></i></a>
            <a href=""><i class="social-icon fab fa-instagram"></i></a>
            <a href=""><i class="social-icon fas fa-envelope"></i></a>
            <p>CESTEG ENGINEERING © 2021.</p>
        </div>
    </footer>
      </div>
    </Router>
  );
}