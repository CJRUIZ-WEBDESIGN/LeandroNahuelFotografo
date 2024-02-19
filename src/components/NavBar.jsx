// Navbar.js
import { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex flex-col md:flex-row justify-between items-center bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <div>
              <a href="" className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                <span className="font-bold from-neutral-200 text-slate-200">LeandroNahuel Fotografía</span>
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <Link to="/HeroBanner" className="py-5 px-3 hover:text-gray-400">Inicio</Link>
              <Link to="/Gallery" className="py-5 px-3 hover:text-gray-400">Galería</Link>
              <Link to="/Services" className="py-5 px-3 hover:text-gray-400">Servicios</Link>
              <Link to="/AboutMe" className="py-5 px-3 hover:text-gray-400">Sobre mí</Link>
              <Link to="/Contact" className="py-5 px-3 hover:text-gray-400">Contacto</Link>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <Link to="/HeroBanner" className="block py-2 px-4 text-sm hover:bg-gray-700">Inicio</Link>
        <Link to="/Gallery" className="block py-2 px-4 text-sm hover:bg-gray-700">Galería</Link>
        <Link to="/Services" className="block py-2 px-4 text-sm hover:bg-gray-700">Servicios</Link>
        <Link to="/AboutMe" className="block py-2 px-4 text-sm hover:bg-gray-700">Sobre mí</Link>
        <Link to="/Contact" className="block py-2 px-4 text-sm hover:bg-gray-700">Contacto</Link>
      </div>
    </nav>
  );
};

export default NavBar;
