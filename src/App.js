import "./App.css"
import React from "react";
// First we import Greeting from the components folder
import Header from "./components/pages/header/header";
import MyNavbar from "./components/pages/navbar/navbar.js";
import AboutMe from "./components/pages/aboutMe/aboutMe.js";
import MyWork from "./components/pages/myWork.js";
import Resume from "./components/pages/resume";
import Footer from "./components/pages/footer.js";

// Our App component returns the Greeting component
function App() {
  return (
    <div>
      <MyNavbar />
      <Header />
      <AboutMe />
      <MyWork />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;
