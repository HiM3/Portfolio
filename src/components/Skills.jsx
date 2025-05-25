// components/Skills.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const Skills = () => {
  const navigate = useNavigate();

  const mainSkills = [
    { name: 'React', image: '/images/skills/react.png' },
    { name: 'Node.js', image: '/images/skills/nodejs.png' },
    { name: 'MongoDB', image: '/images/skills/mongodb.png' },
    { name: 'PHP', image: '/images/skills/php.png' },
    { name: 'React Native', image: '/images/skills/react-native.png' },
    { name: 'Figma', image: '/images/skills/figma.png' }
  ];

  return (
    <section id="skills" className="py-5">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h2 className="section-heading" data-aos="fade-up">Our Expertise</h2>
            <p className="section-subheading" data-aos="fade-up" data-aos-delay="100">
              Technologies we master
            </p>
          </Col>
        </Row>

        <Row className="g-4 mb-5">
          {mainSkills.map((skill, index) => (
            <Col key={index} sm={6} md={4} lg={2}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-100 skill-card">
                  <Card.Body className="text-center p-4">
                    <img 
                      src={skill.image} 
                      alt={skill.name} 
                      className="skill-image mb-3"
                      style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                    />
                    <h5>{skill.name}</h5>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        <Row className="justify-content-center">
          <Col lg={8} className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Button
                variant="outline-primary"
                size="lg"
                className="px-4"
                onClick={() => navigate('/service')}
              >
                View All Skills & Services
                <FaArrowRight className="ms-2" />
              </Button>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
