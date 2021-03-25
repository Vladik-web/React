import React from "react";
import classes from './Header.module.css'
import search from './../images/search.png'

const Header = () =>{
  
    return (
        <header className={classes.header}>
            <img className={classes.header__image} src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/647px-Apple_logo_black.svg.png"></img>
            <form action="" className={classes.form}>
                <input type="text" className={classes.form__input} placeholder="Search"/>
                <button type="submit" className={classes.form__btn}> <img src={search} alt=""/></button>
            </form>
        </header>
    );
}
export default Header;