import React from 'react';
import { Accordion, Col } from 'react-bootstrap';
import Footer from './Footer';
import Navbar from '../Navbar/navbar';
import { Link } from 'react-router-dom';
const About = () => {
  return (
    <div>
      <Navbar />
      <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
               <li className="breadcrumb-item" aria-current="page">
                <Link to="/" className='text-dark text-primary custom-link text-decoration-none'>Home</Link>
              </li>
              <li className="breadcrumb-item active">
                <Link to="/about" className='custom-link text-primary fw-bold text-decoration-none'>About</Link>
              </li> 
            </ol>
          </nav>
      <br /><br /><br />
      <h2 className='text-center'>ABOUT US</h2>
      <div className='d-flex justify-content-center'>
        <Col xs={14} md={8} lg={12}>
          <Accordion defaultActiveKey="0" flush className='acc'>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <h2 className='acchead'>Educational center </h2>
              </Accordion.Header>
              <Accordion.Body className='text-center accon'>
                <strong>Learn - placement</strong>
                <p>Learn the educational topics for free</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <h2 className='acchead'>Location & Address</h2>
              </Accordion.Header>
              <Accordion.Body className='text-center accon'>
                <p>
                Sahyadri Campus, Mangaluru, Adyar, Karnataka 575007, India
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <h2 className='acchead'>Contact</h2>
              </Accordion.Header>
              <Accordion.Body className='text-center accon'>
                +91 826754321
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                <h2 className='acchead'>Email Address</h2>
              </Accordion.Header>
              <Accordion.Body className='text-center accon'>
                Learningwithsahyadri.org
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </div>
      <Footer/>
    </div>
  );
};

export default About;
