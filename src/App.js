import "./App.css"
import React from "react";
// First we import Greeting from the components folder
import Header from "./components/header";
import Navbar from "./components/navbar";

// Our App component returns the Greeting component
function App() {
  return (
    <div>
      <Navbar />
      <Header />
    </div>
  );
}

export default App;
