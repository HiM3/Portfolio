import React, { useRef, useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import emailjs from 'emailjs-com';

const ServiceContact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const selectedService = location.state?.service;

  const technologies = {
    'Web Development': ['MERN Stack', 'PHP/Laravel', 'Python/Django', 'WordPress'],
    'App Development': ['React Native', 'Flutter', 'Native iOS', 'Native Android'],
    'ERP Solutions': ['Odoo', 'SAP', 'Custom ERP', 'Business Process Automation'],
    'UI/UX Design': ['Web Design', 'Mobile App Design', 'Brand Identity', 'User Research'],
    'SEO Services': ['On-Page SEO', 'Off-Page SEO', 'Technical SEO', 'Local SEO']
  };

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
        message: 'Message sent successfully! We will get back to you soon.'
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

  return (
    <div className="service-contact py-5">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h2 className="section-heading" data-aos="fade-up">Get in Touch</h2>
            <p className="section-subheading" data-aos="fade-up" data-aos-delay="100">
              Let's discuss your {selectedService || 'project'} requirements
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <Form ref={formRef} onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                      <Form.Label>Your Name</Form.Label>
                      <Form.Control 
                        type="text" 
                        name="name" 
                        required 
                        placeholder="Enter your name"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control 
                        type="email" 
                        name="email" 
                        required 
                        placeholder="Enter your email"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Service</Form.Label>
                      <Form.Select 
                        name="service" 
                        required
                        defaultValue={selectedService}
                      >
                        <option value="">Select a service</option>
                        {Object.keys(technologies).map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Technology Stack</Form.Label>
                      <Form.Select 
                        name="technology" 
                        required
                      >
                        <option value="">Select technology</option>
                        {selectedService && technologies[selectedService]?.map((tech) => (
                          <option key={tech} value={tech}>
                            {tech}
                          </option>
                        ))}
                      </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Project Description</Form.Label>
                      <Form.Control 
                        as="textarea" 
                        rows={4} 
                        name="message" 
                        required 
                        placeholder="Tell us about your project..."
                      />
                    </Form.Group>

                    <Button 
                      type="submit" 
                      variant="primary" 
                      className="w-100"
                      disabled={loading}
                    >
                      {loading ? 'Sending...' : 'Send Message'}
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>

          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <h4 className="mb-4">Our Location</h4>
                  <div className="map-container" style={{ height: '400px' }}>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.7528698911874!2d72.63008747491104!3d22.996113379192387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e86138ba9fbaf%3A0x1af0fa4936f622be!2sKrishna%20Graphics%20%26%20Printers!5e0!3m2!1sen!2sin!4v1748200408566!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                    ></iframe>
                  </div>
                  <div className="mt-4">
                    <h5>Contact Information</h5>
                    <p className="mb-2">
                      <strong>Address:</strong> Your Company Address
                    </p>
                    <p className="mb-2">
                      <strong>Email:</strong> krmehta1452@gmail.com
                    </p>
                    <p className="mb-0">
                      <strong>Phone:</strong> +91 9157381209
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ServiceContact; 