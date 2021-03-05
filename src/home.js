import React from 'react'
import './App.css'

const Home = (props) => {
    return (
    <div className="container mt-5">
        <section id="hero">
            <div className="row jumbotron">
                <div className="col-md-6 text-center" data-aos="fade-right" data-aos-duration="2000" >
                </div>
                <div className="col-md-6 text-center" data-aos="fade-left" data-aos-duration="2000">
                <h1 className="logo-header text-center">Welcome to CESTEG Engineering</h1>
                    <h3 className="text-center">CESTEG Engineering is a mechanical, Automation & Electrical Engineering Company and a provider of innovative approaches to construction and other related engineering services throughout the country of Southern Africa</h3>
                </div>
            </div>    
        </section>
        <section id="products">
            <div className="card-group">
                <div className="card">
                    <div card-i>

                    </div>
                </div>    
            </div>        
        </section>        
    </div>
    )
  }

export default Home