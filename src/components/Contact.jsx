// components/Contact.js
import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { Container, Form, Button, Row, Col, Alert, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current,
        'YOUR_USER_ID'
      );
      setStatus({
        type: 'success',
        message: 'Message sent successfully! I will get back to you soon.'
      });
      formRef.current.reset();
    } catch (error) {
      setStatus({
        type: 'danger',
        message: 'Failed to send message. Please try again later.'
      });
      console.error(error.text);
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      content: 'your.email@example.com',
      link: 'mailto:your.email@example.com'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      content: '+1 234 567 890',
      link: 'tel:+1234567890'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      content: 'Your City, Country',
      link: '#'
    }
  ];

  return (
    <section id="contact" className="py-5" 
    // style={{ background: 'linear-gradient(135deg, #1c1c1c 0%, #2a2a2a 30%, #4a4a4a 60%, #6a6a6a 100%)' }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} className="text-center">
            <h2 className="section-heading" data-aos="fade-up">Contact Me</h2>
            <p className="section-subheading" data-aos="fade-up" data-aos-delay="100">
              Let's get in touch and discuss your project
            </p>
          </Col>
        </Row>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Row className="g-4">
            <Col lg={4}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="h4 mb-4">Contact Information</h3>
                <p className="text-muted mb-4">
                  Feel free to reach out to me for any questions or opportunities. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
                
                {contactInfo.map((info, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="d-flex align-items-center mb-4"
                  >
                    <div className="text-primary me-3" style={{ fontSize: '1.5rem' }}>
                      {info.icon}
                    </div>
                    <div>
                      <h6 className="mb-1">{info.title}</h6>
                      <a 
                        href={info.link} 
                        className="text-decoration-none text-muted"
                        target={info.title === 'Location' ? undefined : '_blank'}
                        rel={info.title === 'Location' ? undefined : 'noopener noreferrer'}
                      >
                        {info.content}
                      </a>
                    </div>
                  </motion.div>
                ))}

                <div className="d-flex gap-3 mt-4">
                  <a 
                    href="https://www.linkedin.com/in/meet-mehta-9575a1261" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary fs-4"
                  >
                    <FaLinkedin />
                  </a>
                  <a 
                    href="https://github.com/HiM3" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary fs-4"
                  >
                    <FaGithub />
                  </a>
                </div>
              </motion.div>
            </Col>

            <Col lg={8}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="border-0 shadow-sm">
                  <Card.Body className="p-4">
                    {status.message && (
                      <Alert variant={status.type} className="mb-4">
                        {status.message}
                      </Alert>
                    )}
                    
                    <Form ref={formRef} onSubmit={handleSubmit}>
                      <Row>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control 
                              type="text" 
                              name="name" 
                              required 
                              placeholder="Enter your name"
                              className="border-0 shadow-sm"
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control 
                              type="email" 
                              name="email" 
                              required 
                              placeholder="Enter your email"
                              className="border-0 shadow-sm"
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      
                      <Form.Group className="mb-3">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control 
                          type="text" 
                          name="subject" 
                          required 
                          placeholder="Enter subject"
                          className="border-0 shadow-sm"
                        />
                      </Form.Group>

                      <Form.Group className="mb-4">
                        <Form.Label>Message</Form.Label>
                        <Form.Control 
                          as="textarea" 
                          rows={5} 
                          name="message" 
                          required 
                          placeholder="Your message..."
                          className="border-0 shadow-sm"
                        />
                      </Form.Group>

                      <Button 
                        type="submit" 
                        variant="primary" 
                        className="px-4 py-2"
                        disabled={loading}
                      >
                        {loading ? 'Sending...' : 'Send Message'}
                      </Button>
                    </Form>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default Contact;
