import React from "react"; // Importing React to use JSX and React features
import { Routes, Route } from "react-router-dom"; // Importing the components for routing from 'react-router-dom'
import Navbar from "./components/Navbar"; // Importing the Navbar component
import Hero from "./components/Hero"; // Importing the Hero component (likely for the homepage banner)
import Services from "./pages/Services"; // Importing the Services page
import Footer from "./components/Footer"; // Importing the Footer component
import About from "./pages/About"; // Importing the About page
import Contact from "./pages/Contact"; // Importing the Contact page
import Portfolio from "./pages/Portfolio"; // Importing the Portfolio page

function App() {
  return (
    // Setting up routing for the application using 'Routes' and 'Route' components
    <Routes>
      {/* Route for the homepage ("/") that shows only the Hero component */}
      <Route path="/" element={<Hero />} />

      {/* Route for the "/home" path that includes the Navbar, About, Services, Portfolio, Contact, and Footer */}
      <Route
        path="/home"
        element={
          <>
            <Navbar /> {/* Display Navbar */}
            <About /> {/* Display About page */}
            <Services /> {/* Display Services page */}
            <Portfolio /> {/* Display Portfolio page */}
            <Contact /> {/* Display Contact page */}
            <Footer /> {/* Display Footer */}
          </>
        }
      />

      {/* Route for the "/portfolio" path that includes Navbar, Portfolio, and Footer */}
      <Route
        path="/portfolio"
        element={
          <>
            <Navbar /> {/* Display Navbar */}
            <Portfolio /> {/* Display Portfolio page */}
            <Footer /> {/* Display Footer */}
          </>
        }
      />

      {/* Route for the "/services" path that includes Navbar, Services, and Footer */}
      <Route
        path="/services"
        element={
          <>
            <Navbar /> {/* Display Navbar */}
            <Services /> {/* Display Services page */}
            <Footer /> {/* Display Footer */}
          </>
        }
      />

      {/* Route for the "/contact" path that includes Navbar, Contact, and Footer */}
      <Route
        path="/contact"
        element={
          <>
            <Navbar /> {/* Display Navbar */}
            <Contact /> {/* Display Contact page */}
            <Footer /> {/* Display Footer */}
          </>
        }
      />
    </Routes>
  );
}

export default App; // Exporting the App component to be used in other parts of the application
