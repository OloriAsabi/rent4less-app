import React from 'react'
import images from "../data/Ab7g4N1VBr (1) 1.png"
import { FaArrowAltCircleRight } from "react-icons/fa";
import "./About.css"

const AboutUs = () => {
  return (
    <div className="section__padding">
      <div className="about">
          <div className="img-bg">
            <img src={images} alt="about-img" className="about-img"/>
          </div>
          <div className='about-info'>
              <h6>who are we</h6>
              <h3>About Rent4Less</h3>
              <p>Rent4Less by Alpha Mead is a rental scheme designed to provide a flexible and convenient option for middle income Nigerians to rent homes. With this scheme, you can now spread out payment for apartments in choice locations, by paying a specified rate, on a monthly basis.</p>
            <div>
            <a href="/" className="card-link about-link"><FaArrowAltCircleRight className='card-icon about-icon'/>Read More</a>
            </div>
          </div>
      </div>
    </div>
  )
}

export default AboutUs