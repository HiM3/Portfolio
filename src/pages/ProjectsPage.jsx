import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsPage = () => {
  const navigate = useNavigate();

  const projectCategories = [
    {
      title: 'Web Applications',
      description: 'Full-stack web applications built with modern technologies',
      icon: '🌐',
      projects: [
        {
          title: 'E-Commerce Platform',
          description: 'A full-stack e-commerce platform built with MERN stack, featuring user authentication, product management, shopping cart, and payment integration.',
          image: 'https://via.placeholder.com/600x400',
          technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
          github: 'https://github.com/yourusername/project1',
          live: 'https://project1.com',
        },
        {
          title: 'Task Management App',
          description: 'A collaborative task management application with real-time updates, team features, and progress tracking.',
          image: 'https://via.placeholder.com/600x400',
          technologies: ['React', 'Firebase', 'Material-UI', 'Redux'],
          github: 'https://github.com/yourusername/project2',
          live: 'https://project2.com',
        }
      ]
    },
    {
      title: 'Mobile Applications',
      description: 'Cross-platform mobile applications for iOS and Android',
      icon: '📱',
      projects: [
        {
          title: 'Fitness Tracker App',
          description: 'A mobile application for tracking workouts, nutrition, and fitness goals with social features.',
          image: 'https://via.placeholder.com/600x400',
          technologies: ['React Native', 'Firebase', 'Redux'],
          github: 'https://github.com/yourusername/project3',
          live: 'https://project3.com',
        }
      ]
    },
    {
      title: 'UI/UX Design Projects',
      description: 'Beautiful and intuitive user interface designs',
      icon: '🎨',
      projects: [
        {
          title: 'Dashboard Design',
          description: 'A modern dashboard design for analytics and data visualization.',
          image: 'https://via.placeholder.com/600x400',
          technologies: ['Figma', 'Adobe XD', 'Photoshop'],
          github: 'https://github.com/yourusername/project4',
          live: 'https://project4.com',
        }
      ]
    }
  ];

  return (
    <div className="projects-page py-5">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h2 className="section-heading" data-aos="fade-up">My Projects</h2>
            <p className="section-subheading" data-aos="fade-up" data-aos-delay="100">
              Explore my portfolio of work
            </p>
          </Col>
        </Row>

        {projectCategories.map((category, categoryIndex) => (
          <React.Fragment key={categoryIndex}>
            <Row className="justify-content-center mb-4">
              <Col lg={8} className="text-center">
                <h3 className="section-heading" data-aos="fade-up">
                  <span className="me-2">{category.icon}</span>
                  {category.title}
                </h3>
                <p className="section-subheading" data-aos="fade-up" data-aos-delay="100">
                  {category.description}
                </p>
              </Col>
            </Row>

            <Row className="g-4 mb-5">
              {category.projects.map((project, projectIndex) => (
                <Col key={projectIndex} md={6} lg={4}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: projectIndex * 0.1 }}
                  >
                    <Card className="h-100 project-card">
                      <Card.Img variant="top" src={project.image} alt={project.title} />
                      <Card.Body>
                        <Card.Title>{project.title}</Card.Title>
                        <Card.Text>{project.description}</Card.Text>
                        <div className="d-flex flex-wrap gap-2 mb-3">
                          {project.technologies.map((tech, idx) => (
                            <span key={idx} className="badge bg-primary bg-opacity-10 text-primary">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="d-flex gap-2">
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary btn-sm"
                          >
                            <FaExternalLinkAlt className="me-1" />
                            Live Demo
                          </a>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline-primary btn-sm"
                          >
                            <FaGithub className="me-1" />
                            Code
                          </a>
                        </div>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </React.Fragment>
        ))}
      </Container>
    </div>
  );
};

export default ProjectsPage; 