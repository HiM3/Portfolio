import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate();

  const projects = [
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
    },
    {
      title: 'Social Media Dashboard',
      description: 'A responsive dashboard for social media analytics with data visualization and real-time updates.',
      image: 'https://via.placeholder.com/600x400',
      technologies: ['React', 'Chart.js', 'Tailwind CSS', 'Node.js'],
      github: 'https://github.com/yourusername/project3',
      live: 'https://project3.com',
    },
  ];

  return (
    <section id="projects" className="py-5">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h2 className="section-heading" data-aos="fade-up">Featured Projects</h2>
            <p className="section-subheading" data-aos="fade-up" data-aos-delay="100">
              Check out some of my recent work
            </p>
          </Col>
        </Row>

        <Row className="g-4 mb-5">
          {projects.map((project, index) => (
            <Col key={index} md={6} lg={4}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-100 project-card">
                  <Card.Img variant="top" src={project.image} alt={project.title} />
                  <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                    <div className="d-flex flex-wrap gap-2 mb-3">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} bg="primary" className="px-2 py-1">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="d-flex gap-2">
                      <Button
                        variant="primary"
                        size="sm"
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaExternalLinkAlt className="me-1" />
                        Live Demo
                      </Button>
                      <Button
                        variant="outline-primary"
                        size="sm"
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub className="me-1" />
                        Code
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        <Row className="justify-content-center">
          <Col lg={8} className="text-center">
            <Button
              variant="outline-primary"
              size="lg"
              onClick={() => navigate('/projects')}
              className="mt-4"
            >
              View All Projects
              <FaArrowRight className="ms-2" />
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
