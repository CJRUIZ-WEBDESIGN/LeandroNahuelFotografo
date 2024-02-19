import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Gallery from "./pages/Gallery";
import HeroBanner from "./pages/Home/HeroBanner";
import Services from "./pages/Services";
import NavBar from "./components/NavBar";
import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home/Home";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Header" element={<Header />} />
        <Route path="/HeroBanner" element={<HeroBanner />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
