import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./pages/Services";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route
        path="/home"
        element={
          <>
            <Navbar />
            <About />
            <Services />
            <Portfolio />
            <Contact />
            <Footer />
          </>
        }
      />
      <Route
        path="/portfolio"
        element={
          <>
            <Navbar />
            <Portfolio />
            <Footer />
          </>
        }
      />
      <Route
        path="/services"
        element={
          <>
            <Navbar />
            <Services />
            <Footer />
          </>
        }
      />
      <Route
        path="/contact"
        element={
          <>
            <Navbar />
            <Contact />
            <Footer />
          </>
        }
      />
    </Routes>
  );
}

export default App;
