import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import classes from './Profile.module.css'
const Nav = ()=>{
    return (
        <main className={classes.main}>
            <MyPosts></MyPosts>
            
        </main>
    );
}
export default Nav;