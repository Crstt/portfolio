import { Link } from "react-router-dom";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useTheme } from "../providers/ThemeProvider";

export default function Navbar() {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <nav className="fixed top-4 right-4 bg-gray-800 dark:bg-gray-900 text-white p-4 rounded-lg shadow-lg flex gap-4 items-center">
      <Link to="/" className="hover:text-gray-400">Home</Link>
      <Link to="/about" className="hover:text-gray-400">About</Link>
      <Link to="/projects" className="hover:text-gray-400">Projects</Link>
      <Link to="/resume" className="hover:text-gray-400">Resume</Link>
      <Link to="/contact" className="hover:text-gray-400">Contact</Link>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="ml-4 p-2 rounded-full bg-gray-700 dark:bg-gray-600 hover:bg-gray-600 dark:hover:bg-gray-500"
      >
        {darkMode ? <SunIcon className="w-6 h-6 text-yellow-400" /> : <MoonIcon className="w-6 h-6 text-gray-300" />}
      </button>
    </nav>
  );
}
