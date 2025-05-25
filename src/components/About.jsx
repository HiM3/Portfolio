import { Container, Row, Col, Image, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaServer } from 'react-icons/fa';

const About = () => (
  <section id="about" className="py-5" 
//   style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #333333 50%, #444444 100%)' }}
  >
    <Container>
      <Row className="justify-content-center">
        <Col lg={8} className="text-center">
          <h2 className="section-heading" data-aos="fade-up">About Me</h2>
          <p className="section-subheading" data-aos="fade-up" data-aos-delay="100">
            Get to know more about me and my journey
          </p>
        </Col>
      </Row>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Row className="align-items-center mb-5">
          <Col lg={4} className="mb-4 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image 
                src="https://via.placeholder.com/400" 
                rounded 
                fluid 
                className="shadow-lg"
                style={{ borderRadius: '20px' }}
              />
            </motion.div>
          </Col>
          <Col lg={8}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="mb-4">Full Stack Developer</h3>
              <p className="lead mb-4">
                I'm a passionate Full Stack Developer with expertise in the MERN stack. 
                I love creating beautiful, functional, and user-friendly applications that solve real-world problems.
              </p>
              <p className="mb-4">
                With a strong foundation in both frontend and backend development, I bring ideas to life through clean code 
                and intuitive user interfaces. I'm constantly learning and exploring new technologies to stay at the forefront 
                of web development.
              </p>
              <div className="d-flex gap-3">
                <Button variant="primary" href="#contact">Contact Me</Button>
                <Button variant="outline-primary" href="#projects">View Projects</Button>
              </div>
            </motion.div>
          </Col>
        </Row>

        <Row className="g-4 mt-4">
          <Col md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center p-4">
                  <FaCode className="text-primary mb-3" size={40} />
                  <h4>Frontend Development</h4>
                  <p className="text-muted">
                    Creating responsive and interactive user interfaces using React, Bootstrap, and modern CSS techniques.
                  </p>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
          <Col md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center p-4">
                  <FaLaptopCode className="text-primary mb-3" size={40} />
                  <h4>Backend Development</h4>
                  <p className="text-muted">
                    Building robust server-side applications with Node.js, Express, and MongoDB.
                  </p>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
          <Col md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center p-4">
                  <FaServer className="text-primary mb-3" size={40} />
                  <h4>API Development</h4>
                  <p className="text-muted">
                    Designing and implementing RESTful APIs with proper authentication and data validation.
                  </p>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </motion.div>
    </Container>
  </section>
);

export default About;
