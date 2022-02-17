import React,{useState} from 'react';
import images from "../data/rent4less-logo-small 1.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MdArrowDropDown} from 'react-icons/md'
import login from '../data/Rectangle 3.png'
import "./Navbar.css";
import { navItems } from "./NavItems";
import Dropdown from "./Dropdown";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  return (
      <nav className="app_navbar">
        <a href="/" className="app_navbar-logo">
        <img src={images} alt=""/>
        </a>
        <ul className="app_navbar-links">
          {navItems.map((item) => {
            if (item.title === "Properties") {
              return (
                <li className="nav-item dropdown p__opensans" key={item.id}>
                <a className="nav-link dropdown-toggle" href={item.path} id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{item.title}</a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="">Action</a>
                  <a className="dropdown-item" href="">Another action</a>
                  <a className="dropdown-item" href="">Something else here</a>
                 </div>
                 </li>
              );
            }
            return (
              <li key={item.id} className="p__opensans">
                <a href={item.path}>{item.title}</a>
              </li>
            );
          })}
        </ul>
        <div className='app_navbar-login'>
        { /* <img src={login} alt="log" />
         */}
          <div className='custom__button'>Login</div>
        </div>

        <div className='app_navbar-smallscreen'>
     <AiOutlineMenu color='#222' className='app_navbar-toggle' fontSize={27} onClick={() => {setToggleMenu(true)}}/>
     {toggleMenu && (
     <div className='app_navbar-smallscreen-overlay flex__center slide-bottom'>
        <AiOutlineClose fontSize={27} className="overlay_close" onClick={() => {setToggleMenu(false)}}/>
        <ul className="app_navbar-smallscreen-links">
          {navItems.map((item) => {
            if (item.title === "Properties") {
              return (
                <li
                  key={item.id}
                  className='p__opensans'
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <a href={item.path}>{item.title}<MdArrowDropDown className='dropdown-button' /></a>
                  {dropdown && <Dropdown />}
                </li>
              );
            }
            return (
              <li key={item.id} className="p__opensans">
                <a href={item.path}>{item.title}</a>
              </li>
            );
          })}
        </ul>
        <div className='app_navbar-login-overlay'>
        { /* <img src={login} alt="log" />
         */}
          <div className='custom__button'>Login</div>
        </div>

     </div>
     )}
   </div>
      </nav>
  );
}



export default Navbar