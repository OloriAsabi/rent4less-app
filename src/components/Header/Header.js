import React from 'react'
import imageSlide from "../data/Rectangle 164.png"
import "./Header.css"

const Header = () => {

  return (
    <div className='header'>
        <div className='header-info'>
        <h1>"Flexible Rent...Anywhere you love"</h1>
        <p> "Access our growing list of property where you can pay rent monthly. 
            <br/>
        With Rent4Less, paying rent is on your terms". </p>
        </div>
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img className="d-block w-100" src={imageSlide} alt="First slide" />
                </div>
                <div className="carousel-item">
                <img className="d-block w-100" src={imageSlide} alt="Second slide" />
                </div>
                <div className="carousel-item">
                <img className="d-block w-100" src={imageSlide} alt="Third slide" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only"></span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only"></span>
            </a>
            </div>
    </div>
  )
}

export default Header