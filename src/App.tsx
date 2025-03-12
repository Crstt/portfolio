import './App.css'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/portfolio/Portfolio';
import Projects from './pages/Projects';
import Navbar from './components/navbar';
import Resume from './pages/Resume';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App
