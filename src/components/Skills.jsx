// components/Skills.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaDocker,
  FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaPython
} from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTypescript, SiTailwindcss } from 'react-icons/si';

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'React', icon: <FaReact />, level: 90 },
      { name: 'JavaScript', icon: <FaJs />, level: 85 },
      { name: 'TypeScript', icon: <SiTypescript />, level: 80 },
      { name: 'HTML5', icon: <FaHtml5 />, level: 95 },
      { name: 'CSS3', icon: <FaCss3Alt />, level: 90 },
      { name: 'Bootstrap', icon: <FaBootstrap />, level: 85 },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 80 },
    ]
  },
  {
    title: 'Backend Development',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs />, level: 85 },
      { name: 'Express.js', icon: <SiExpress />, level: 80 },
      { name: 'MongoDB', icon: <SiMongodb />, level: 75 },
      { name: 'SQL Databases', icon: <FaDatabase />, level: 70 },
      { name: 'Python', icon: <FaPython />, level: 65 },
    ]
  },
  {
    title: 'Tools & Technologies',
    skills: [
      { name: 'Git', icon: <FaGitAlt />, level: 85 },
      { name: 'Docker', icon: <FaDocker />, level: 70 },
      { name: 'RESTful APIs', icon: <FaDatabase />, level: 85 },
      { name: 'Webpack', icon: <FaReact />, level: 75 },
    ]
  }
];

const SkillCard = ({ skill, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="mb-4"
  >
    <Card className="border-0 shadow-sm h-100">
      <Card.Body>
        <div className="d-flex align-items-center mb-3">
          <div className="text-primary me-3" style={{ fontSize: '1.5rem' }}>
            {skill.icon}
          </div>
          <h5 className="mb-0">{skill.name}</h5>
        </div>
        <div className="progress" style={{ height: '8px' }}>
          <div
            className="progress-bar bg-primary"
            role="progressbar"
            style={{ width: `${skill.level}%` }}
            aria-valuenow={skill.level}
            aria-valuemin="0"
            aria-valuemax="100"
          />
        </div>
        <small className="text-muted mt-2 d-block">{skill.level}%</small>
      </Card.Body>
    </Card>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-5" 
    // style={{ background: 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)' }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-center mb-5 fw-bold">My Skills</h2>
          <Row>
            {skillCategories.map((category, categoryIdx) => (
              <Col lg={4} key={categoryIdx} className="mb-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: categoryIdx * 0.2 }}
                >
                  <h3 className="h4 mb-4 text-center">{category.title}</h3>
                  {category.skills.map((skill, skillIdx) => (
                    <SkillCard
                      key={skillIdx}
                      skill={skill}
                      delay={categoryIdx * 0.2 + skillIdx * 0.1}
                    />
                  ))}
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default Skills;
