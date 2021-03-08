import React from 'react'
import './App.css'
import {useEffect} from 'react'
import AOS from 'aos'

const Partner = (props) => {
    useEffect(() =>{
        AOS.init()
    }, [])
    return (
    <div className="main-div">
        <h1>Our Partners</h1>
        <div className="partners">
        <div data-aos="fade-up" data-aos-duration="2000">
            <a href="https://www.fluor.com/projects/arco-power-solar-renewable-epc">
                <img src="/images/arco.png"/>
            </a>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000">
            <a href="https://www.lorentz.de/">
                <img src="/images/lorentz.png"/>
            </a>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000">
            <a href="http://midnitesolar.com/">
                <img src="/images/midnite.png"/>
            </a>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000">
            <a href="https://www.morningstarcorp.com/">
                <img src="/images/morning-star.png"/>
            </a>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000">
            <a href="https://www.outbackpower.com/">
                <img src="/images/outback-power.png"/>
            </a>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000">
            <a href="https://www.phocos.com/">
                <img src="/images/phocos.png"/>
            </a>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000">
            <a href="https://rollsbattery.com/">
                <img src="/images/rolls.png"/>
            </a>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000">
            <a href="https://www.se.com/za/en/">
                <img src="/images/schneider-electric-vector-logo.svg"/>
            </a>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000">
            <a href="https://www.trinasolar.com/en-glb">
                <img src="/images/trina-solar.png"/>
            </a>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000">
            <a href="http://timsantrafo.com/en/">
                <img src="/images/timsan.png"/>
            </a>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000">
            <a href="http://www.tbbpower.com/">
                <img src="/images/tbb.png"/>
            </a>
        </div>
        <div data-aos-duration="2000" data-aos="fade-up">
            <a href="http://www.solarcom.com/" >
                <img src="/images/solar-com.png"/>
            </a>
        </div>
        </div>
    </div>
    )
  }

export default Partner