import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import {useEffect} from 'react'
import AOS from 'aos'
import LatestPosts from './latest_posts'
var Carousel = require('react-responsive-carousel').Carousel;

const Home = (props) => {
    useState()
    useEffect(() =>{
        AOS.init()

    }, [])
    return (
    <div className="main-div">
        <div className="parallax">
            <div >
                <div className="row">
                    <div className="col-md-6"></div>
                    <div className="col-md-6">
                        <div class="wrap">
                            <div class="car-text-one text-center">
                                <h1 >Products</h1>
                                <p >We have Various Products For Sale!</p>
                                <button className="btn btn-primary"><a href="/products">Check It Out</a></button>   
                            </div>
                            <div class="car-text-two text-center">
                                <h1 >Partners</h1>
                                <p >We have over 20 partners with us!</p>
                            </div>
                            <div class="car-text-three text-center">
                                <h1 >Services</h1>
                                <p >We Provide Quality Services For Our Clients</p>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
        <section id="hero">
            <div className="row">
                <div className="col-md-6 text-center" data-aos="fade-right" data-aos-duration="2000" >
                    <img src="/images/logo-transparent.png" width="100%"/>
                </div>
                <div className="col-md-6 text-center" data-aos="fade-left" data-aos-duration="2000">
                <h2 className="logo-header text-center">Welcome to CESTEG Engineering</h2>
                    <h4 className="text-center">CESTEG Engineering is a mechanical, Automation & Electrical Engineering Company and a provider of innovative approaches to construction and other related engineering services throughout the country of Southern Africa</h4>
                </div>
            </div>    
        </section>
        <hr className="my-4"/>
        <section id="lorem">
            <div className="row">
                <div className="col-md-6">
                    <h4 data-aos="fade-up" data-aos-duration="2000">Who are We?</h4>
                    <p data-aos="fade-up" data-aos-duration="3000">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sollicitudin, tellus dictum convallis egestas, lectus lorem imperdiet enim, in tristique ligula odio sit amet augue. Phasellus id ex nec purus sodales congue in vel turpis.
                        Maecenas non feugiat orci. In pellentesque hendrerit urna quis efficitur. Curabitur quis ligula mi. Morbi in venenatis lorem, a laoreet tellus. Nullam nibh tortor, sodales eget nibh at, ultrices eleifend purus. Praesent malesuada
                        augue id est pharetra tincidunt. Nunc congue aliquam sem id bibendum. Etiam et lacus laoreet, interdum urna sed, imperdiet quam.</p>
                </div>
                <div className="col-md-6">
                    <img src="/images/carousel-construction.jpg" alt="" width="100%" data-aos="fade-left" data-aos-duration="2000"/>
                </div>
            </div>
        </section>
        <hr className="my-5"/>
        <section id="posts">
            <div className="post">
                <h2>RECENT POSTS</h2>
                <LatestPosts />
            </div>
        </section>
        </div>
        <script></script>     
    </div>
    )
  }

export default Home