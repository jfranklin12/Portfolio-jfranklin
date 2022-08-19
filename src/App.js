import "./App.css"
import React from "react";
// First we import Greeting from the components folder
import Header from "./components/header";
import Navbar from "./components/navbar";
import AboutMe from "./components/aboutMe";
import MyWork from "./components/myWork";

// Our App component returns the Greeting component
function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutMe />
      <MyWork />
    </div>
  );
}

export default App;
