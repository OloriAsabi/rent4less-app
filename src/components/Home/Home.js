import React from 'react';
import AboutUs from '../AboutUs.js/AboutUs'
import Community from '../Community/Community'
import Header from '../Header/Header'
import Overlay from '../Overlay/Overlay'
//import Properties from "../Properties/Properties"
import Property from '../Property/Property';

const Home = () => {
  return (
    <div>
        <Header/>
        <Overlay/>
        <Community/>
        <Property/>
        <AboutUs/>
    </div>
  )
}

export default Home