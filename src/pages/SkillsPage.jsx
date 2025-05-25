import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const SkillsPage = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: 'Web Development',
      description: 'Custom web applications and websites built with modern technologies',
      icon: '🌐',
      technologies: ['React', 'Node.js', 'PHP', 'Laravel']
    },
    {
      title: 'App Development',
      description: 'Native and cross-platform mobile applications',
      icon: '📱',
      technologies: ['React Native', 'Flutter', 'iOS', 'Android']
    },
    {
      title: 'ERP Solutions',
      description: 'Enterprise Resource Planning systems for business management',
      icon: '🏢',
      technologies: ['Odoo', 'SAP', 'Custom ERP']
    },
    {
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces',
      icon: '🎨',
      technologies: ['Figma', 'Adobe XD', 'Photoshop']
    },
    {
      title: 'SEO Services',
      description: 'Search Engine Optimization to improve your online presence',
      icon: '📈',
      technologies: ['On-Page SEO', 'Off-Page SEO', 'Technical SEO']
    }
  ];

  const allSkills = [
    { name: 'React', image: '/images/skills/react.png' },
    { name: 'Node.js', image: '/images/skills/nodejs.png' },
    { name: 'MongoDB', image: '/images/skills/mongodb.png' },
    { name: 'Express.js', image: '/images/skills/express.png' },
    { name: 'PHP', image: '/images/skills/php.png' },
    { name: 'Laravel', image: '/images/skills/laravel.png' },
    { name: 'React Native', image: '/images/skills/react-native.png' },
    { name: 'Flutter', image: '/images/skills/flutter.png' },
    { name: 'Figma', image: '/images/skills/figma.png' },
    { name: 'Adobe XD', image: '/images/skills/adobe-xd.png' },
    { name: 'Photoshop', image: '/images/skills/photoshop.png' },
    { name: 'SEO Tools', image: '/images/skills/seo.png' }
  ];

  return (
    <div className="skills-page py-5">
      <Container>
        {/* Services Section */}
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h2 className="section-heading" data-aos="fade-up">Our Services</h2>
            <p className="section-subheading" data-aos="fade-up" data-aos-delay="100">
              Explore our comprehensive range of services
            </p>
          </Col>
        </Row>

        <Row className="g-4 mb-5">
          {services.map((service, index) => (
            <Col key={index} md={6} lg={4}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className="h-100 service-card"
                  role="button"
                  onClick={() => navigate('/service-contact', { state: { service: service.title } })}
                  aria-label={`Learn more about ${service.title}`}
                >
                  <Card.Body className="text-center p-4">
                    <div className="service-icon mb-3" style={{ fontSize: '2rem' }}>{service.icon}</div>
                    <h4>{service.title}</h4>
                    <p className="text-muted mb-3">{service.description}</p>
                    <div className="d-flex flex-wrap gap-2 justify-content-center">
                      {service.technologies.map((tech, idx) => (
                        <span key={idx} className="badge bg-primary bg-opacity-10 text-primary">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="mt-3">
                      <FaArrowRight className="text-primary" />
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* Skills Section */}
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h2 className="section-heading" data-aos="fade-up">Our Skills</h2>
            <p className="section-subheading" data-aos="fade-up" data-aos-delay="100">
              Technologies we excel in
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {allSkills.map((skill, index) => (
            <Col key={index} sm={6} md={4} lg={3}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-100 skill-card text-center">
                  <Card.Body className="p-4">
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="skill-image mb-3"
                      style={{ width: '80px', height: '80px', objectFit: 'contain' }}
                    />
                    <h5>{skill.name}</h5>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default SkillsPage;
