import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";

function App() {
   
  return (
    <div className="App">
      <div className="app-wrapper">
        <Header />
        <Nav />
        <Profile/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
