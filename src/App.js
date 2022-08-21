import "./App.css"
import React, { useState } from "react";
// First we import Greeting from the components folder
import Header from "./components/pages/header/header";
import MyNavbar from "./components/pages/navbar/navbar.js";
import AboutMe from "./components/pages/aboutMe/aboutMe.js";
import MyWork from "./components/pages/myWork/myWork";
import Contact from "./components/pages/contact/contact";
import Resume from "./components/pages/resume";
import Footer from "./components/pages/footer.js";

// Our App component returns the Greeting component
function App() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    else if (currentPage === 'MyWork') {
      return <MyWork />;
    }
    else if (currentPage === 'Contact') {
      return <Contact />;
    }
    else if (currentPage === 'Resume') {
      return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);
  
  return (
    <div>
      <MyNavbar currentPage={currentPage} handlePageChange={handlePageChange} />
      <Header />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
