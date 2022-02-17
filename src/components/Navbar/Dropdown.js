import React, { useState } from "react";
import { serviceDropdown } from "./NavItems";
import "./Nav.css";


function Dropdown() {
  //const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <ul
        className="dropdown-item"
      >
        {serviceDropdown.map((item) => {
          return (
              <div className="dropdown-item">
            <li key={item.id}>
              <a
                href={item.path}
                className={item.cName}
              >
                {item.title}
              </a>
            </li>
            </div>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;