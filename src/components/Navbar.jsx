import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const MyNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Projects', to: 'projects' },
    { name: 'Skills', to: 'skills' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`transition-all duration-300 ${scrolled ? 'scrolled' : ''}`}
      expanded={expanded}
      onToggle={(expanded) => setExpanded(expanded)}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar.Brand 
            href="#" 
            className="fw-bold"
          >
            Meet
          </Navbar.Brand>
        </motion.div>

        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          className="border-0"
        />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            {navLinks.map((link, idx) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Nav.Link
                  as={Link}
                  to={link.to}
                  smooth
                  duration={500}
                  spy
                  activeClass="active"
                  className="mx-2"
                  onClick={() => setExpanded(false)}
                >
                  {link.name}
                </Nav.Link>
              </motion.div>
            ))}
            
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: navLinks.length * 0.1 }}
              className="ms-3"
            >
              <Button
                variant={darkMode ? 'outline-light' : 'outline-dark'}
                size="sm"
                className="rounded-circle p-2"
                onClick={toggleDarkMode}
              >
                {darkMode ? <FaSun /> : <FaMoon />}
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (navLinks.length + 1) * 0.1 }}
              className="ms-3"
            >
              <Button
                variant="primary"
                size="sm"
                className="px-3"
                as={Link}
                to="contact"
                smooth
                duration={500}
                onClick={() => setExpanded(false)}
              >
                Hire Me
              </Button>
            </motion.div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
