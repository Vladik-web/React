import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
const MyPosts = ()=>{
    return (
        <main className={classes.main}>
           <Post></Post>
           <Post></Post>
           <Post></Post>
        </main>
    );
}
export default MyPosts;