import "./App.css"
import React, { useState } from "react";
// First we import Greeting from the components folder
import Header from "./components/homepages/header";
import MyNavbar from "./components/homepages/navbar.js";
import AboutMe from "./components/pages/aboutMe/aboutMe.js";
import MyWork from "./components/pages/myWork/myWork";
import Contact from "./components/pages/contact/contact";
import Resume from "./components/pages/resume/resume";
import Footer from "./components/homepages/footer.js";

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
