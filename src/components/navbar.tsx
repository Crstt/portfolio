import { Link } from "react-router-dom";
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useTheme } from "../providers/ThemeProvider";
import { useState } from "react";

export default function Navbar() {
  const { darkMode, setDarkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className={`hidden md:flex z-10 fixed top-4 right-4 p-4 rounded-lg gap-4 items-center
        ${darkMode ? "bg-gray-800 text-white" : "bg-cyan-200"}`}>
        <Link to="/" className="hover:text-gray-400 transition-colors">Home</Link>
        <Link to="/about" className="hover:text-gray-400 transition-colors">About</Link>
        <Link to="/projects" className="hover:text-gray-400 transition-colors">Projects</Link>
        <Link to="/resume" className="hover:text-gray-400 transition-colors">Resume</Link>
        <Link to="/contact" className="hover:text-gray-400 transition-colors">Contact</Link>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-4 p-2 rounded-full bg-gray-700 dark:bg-gray-600 hover:bg-gray-600 dark:hover:bg-gray-500 transition-colors"
        >
          {darkMode ? <SunIcon className="w-6 h-6 text-yellow-400" /> : <MoonIcon className="w-6 h-6 text-gray-300" />}
        </button>
      </nav>

      {/* Mobile Navbar */}
      <nav className={`md:hidden z-10 fixed top-4 left-4 right-4 p-3 rounded-lg
        ${darkMode ? "bg-gray-800 text-white" : "bg-cyan-200"}`}>
        <div className="flex justify-between items-center">
          <div className="text-lg font-semibold">
            <Link to="/" onClick={closeMenu}>Portfolio</Link>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-700 dark:bg-gray-600 hover:bg-gray-600 dark:hover:bg-gray-500 transition-colors"
            >
              {darkMode ? <SunIcon className="w-5 h-5 text-yellow-400" /> : <MoonIcon className="w-5 h-5 text-gray-300" />}
            </button>
            
            <button
              onClick={toggleMenu}
              className="p-2 rounded-full bg-gray-700 dark:bg-gray-600 hover:bg-gray-600 dark:hover:bg-gray-500 transition-colors"
            >
              {isMenuOpen ? <XMarkIcon className="w-5 h-5" /> : <Bars3Icon className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className={`mt-4 py-2 rounded-lg border-t
            ${darkMode ? "border-gray-600" : "border-gray-300"}`}>
            <div className="flex flex-col gap-2">
              <Link 
                to="/" 
                onClick={closeMenu}
                className="px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                Home
              </Link>
              <Link 
                to="/about" 
                onClick={closeMenu}
                className="px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                About
              </Link>
              <Link 
                to="/projects" 
                onClick={closeMenu}
                className="px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                Projects
              </Link>
              <Link 
                to="/resume" 
                onClick={closeMenu}
                className="px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                Resume
              </Link>
              <Link 
                to="/contact" 
                onClick={closeMenu}
                className="px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}