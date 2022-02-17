import React, { useState } from 'react';
import { serviceDropdown } from "./NavItems";
import './Nav.css';
import { Link } from 'react-router-dom';

function Dropdown () {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {serviceDropdown.map((item) => {
          return (
            <li key={item.id}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default Dropdown;