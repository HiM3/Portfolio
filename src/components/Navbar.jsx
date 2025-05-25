import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link as ScrollLink, scroller } from 'react-scroll';

const MyNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Projects', to: 'projects' },
    { name: 'Skills', to: 'skills' },
    { name: 'Contact', to: 'contact' }
  ];

  const handleNavClick = (section) => {
    if (location.pathname !== '/') {
      navigate('/');
      // Use timeout to wait until route changes before scrolling
      setTimeout(() => {
        scroller.scrollTo(section, {
          duration: 500,
          smooth: true,
          offset: -70
        });
      }, 100);
    } else {
      scroller.scrollTo(section, {
        duration: 500,
        smooth: true,
        offset: -70
      });
    }
  };

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      className={`navbar-custom ${scrolled ? 'scrolled' : ''} ${darkMode ? 'dark-mode' : ''}`}
    >
      <Container>
        <Navbar.Brand 
          onClick={() => handleNavClick('home')} 
          className="brand brand-text" 
          style={{ cursor: 'pointer' }}
        >
          Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center gap-2">
            {navLinks.map((link) => (
              <Nav.Link
                key={link.to}
                onClick={() => handleNavClick(link.to)}
                className="nav-link-custom"
                style={{ cursor: 'pointer' }}
              >
                {link.name}
              </Nav.Link>
            ))}
            <Button 
              variant={darkMode ? "light" : "dark"} 
              className="ms-2 theme-toggle"
              onClick={toggleDarkMode}
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
