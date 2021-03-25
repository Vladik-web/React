import React from "react";
import classes from './Post.module.css'
const Post = ()=>{
    return (
       
            <li className={classes.item}>
                <img src="https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg" alt=""/>
                <p className={classes.item__text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, soluta!</p>
                <button className={classes.item__btn}>like</button>
            </li>
            
    );
}
export default Post;