import MyNavbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ScrollToTopButton from './components/ScrollToTopButton';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ServiceContact from './pages/ServiceContact';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <BrowserRouter>
      <ThemeProvider>
        <MyNavbar />
        <Routes>
          {/* Main Portfolio Routes */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Projects />
                <Skills />
                <Contact />
              </>
            }
          />
          {/* Extra Pages */}
          <Route path="/service" element={<SkillsPage />} />
          <Route path="/service-contact" element={<ServiceContact />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
        <ScrollToTopButton />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
