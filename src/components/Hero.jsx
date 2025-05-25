import { motion } from 'framer-motion';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Hero = () => (
    <section id="home" className="min-vh-100 d-flex align-items-center" 
    // style={{ background: 'linear-gradient(180deg, #0d0d0d 0%, #1a1a1a 30%, #002f4b 70%, #00587a 100%)' }}
    >
        <Container>
            <Row className="align-items-center">
                <Col lg={8} className="text-white">
                    <motion.div 
                        initial={{ opacity: 0, y: -50 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 1 }}
                    >
                        <h6 className="text-primary mb-3">Welcome to my Portfolio</h6>
                        <h1 className="display-4 fw-bold mb-4">
                            Hi, I'm Meet! <br />
                            <span className="text-primary">
                                <Typewriter
                                    words={['Full Stack Developer', 'MERN Stack Enthusiast', 'Tech Explorer']}
                                    loop
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1500}
                                />
                            </span>
                        </h1>
                        <p className="lead mb-4">
                            I build exceptional digital experiences that make an impact.
                            Let's create something amazing together!
                        </p>
                        <div className="d-flex gap-3 mb-4">
                            <Button 
                                variant="primary" 
                                size="lg"
                                href="#contact"
                            >
                                Get in Touch
                            </Button>
                            <Button
                                variant="outline-light"
                                size="lg"
                                href="/cv/resume.pdf"
                                download
                            >
                                Download CV
                            </Button>
                        </div>
                        <div className="d-flex gap-3">
                            <a href="https://github.com/HiM3" target="_blank" rel="noopener noreferrer" className="text-white fs-4">
                                <FaGithub />
                            </a>
                            <a href="https://www.linkedin.com/in/meet-mehta-9575a1261" target="_blank" rel="noopener noreferrer" className="text-white fs-4">
                                <FaLinkedin />
                            </a>
                            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-white fs-4">
                                <FaTwitter />
                            </a>
                        </div>
                    </motion.div>
                </Col>
                <Col lg={4} className="d-none d-lg-block">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Add your profile image here */}
                        <div className="rounded-circle bg-primary" style={{ width: '300px', height: '300px', margin: '0 auto' }}>
                            {/* Replace with your image */}
                            {/* <img src="/your-image.jpg" alt="Profile" className="img-fluid rounded-circle" /> */}
                        </div>
                    </motion.div>
                </Col>
            </Row>
        </Container>
    </section>
);

export default Hero;
