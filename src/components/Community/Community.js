import React from 'react';
import {VscHome} from "react-icons/vsc"
import { FaArrowAltCircleRight } from "react-icons/fa";
import "./Community.css"

const Community = () => {
  return (
    <div className='section__padding'>
        <div className='community-info '>
            <h1>Be a part of our community</h1>
            <div className='underline'></div>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                <br/>
                Velit officia consequat duis enim velit mollit. Exercitation veniam</p>
        </div>
        <div className='community-section'>
            <div className='card-section'>
            <div className="card1">
                <div className="card-body">
                    <div className='card-head'>
                    
                    <h5 className="card-title">Join our growing community. Pay rent monthly?</h5>
                    <div className='icon-bg'><VscHome className='icon'/></div>
                    </div>
                    <ul className='card-list'>
                        <li>No Agent Fee</li>
                       <li>No Commission</li>
                        <li>Pay & Pack in.</li>
                    </ul>
                     <a href="#" className="card-link"><FaArrowAltCircleRight className='card-icon'/>Generate</a>
                </div> 
                </div>
                </div>

            <div className='card-section'>
            <div className="card2">
                <div className="card-body">
                    <div className='card-head'>
                
                    <h5 className="card-title">Want to Rent Your Building(s) </h5>    
                    <div className='icon-bg'><VscHome className='icon'/></div>
                    </div>
                    <ul className='card-list'>
                        <li>Earn steady rental income on your propertY</li>
                       <li>Entrust your property with Africa's best Facilities Mgt. Company</li>
                        <li>Start immediately</li>
                    </ul>
                
                    <a href="#" className="card-link"><FaArrowAltCircleRight className='card-icon'/>Generate</a>
             </div> 
               </div>
               </div>
        </div>
    </div>
  )
}

export default Community