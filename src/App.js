import "./App.css";
import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import Footer from "./components/Footer";

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
