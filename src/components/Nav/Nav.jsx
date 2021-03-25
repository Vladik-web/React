import React from "react";
import classes from './Nav.module.css'
const Nav = ()=>{
    return (
        <nav className={`${classes.navigation} `}>
        <ul>
          <li>
            <a href="#" className={`${classes.item} ${classes.active}`}>Home</a>
          </li>
          <li>
            <a href="#" className={`${classes.item} `}>About</a>
          </li>
          <li>
            <a href="#" className={`${classes.item} `}>More</a>
          </li>
          <li>
            <a href="#" className={`${classes.item} `}>Contacts</a>
          </li>
        </ul>
      </nav>
    );
}
export default Nav;