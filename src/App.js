import "./App.css"
import React from "react";
// First we import Greeting from the components folder
import Header from "./components/header.js";
import Navbar from "./components/navbar.js";
import AboutMe from "./components/aboutMe.js";
import MyWork from "./components/myWork.js";
import Footer from "./components/footer.js";

// Our App component returns the Greeting component
function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutMe />
      <MyWork />
      <Footer />
    </div>
  );
}

export default App;
