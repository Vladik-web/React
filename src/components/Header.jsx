import React from "react";
import classes from './Header.module.css'

const Header = () =>{
    return (
        <header className={classes.header}>
            <img className={classes.header__image} src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/647px-Apple_logo_black.svg.png"></img>
            
        </header>
    );
}
export default Header;