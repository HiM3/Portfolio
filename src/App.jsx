import MyNavbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTopButton from './components/ScrollToTopButton';
import "../src/App.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <ThemeProvider>
      <MyNavbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />      
      <ScrollToTopButton />
    </ThemeProvider>
  );
}

export default App;
