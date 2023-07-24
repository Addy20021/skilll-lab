import React from 'react';
import Navbar from '../Navbar/navbar';
import { Card } from 'react-bootstrap';
import Cprog from '../Images/c-pg.jpg';
import Java from '../Images/java-pg.png';
import python from '../Images/py.png';
import R from '../Images/r-pg.jpg';
import assembly from '../Images/assembly-pg.png';
import go from '../Images/go-pg.png';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Course = () => {
  return (
    <div>
      <header>
        <Navbar />
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item " aria-current="page">
                  <Link to="/" className="text-dark text-primary custom-link text-decoration-none">
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item active">
                  <Link
                    to="/Course"
                    className="custom-link text-primary fw-bold text-decoration-none">
                    Course
                  </Link>
                </li>
              </ol>
            </nav>
          </div>
        </nav>
      </header>
      <div className="row justify-content-center">
        <div className="col-md-3 mb-3" style={{marginLeft:'2rem'}}>
          <Card className="d-flex flex-column align-items-center">
            <Card.Img
              variant="top"
              src={Cprog}
              className="img-fluid course-image"
              style={{ maxWidth: '100%', maxHeight: '300px', width: '200px' }}
            />
            <Card.Body className="text-center">
              <Card.Title>C Programming</Card.Title>
              <Card.Text>C (pronounced si like the letter c) is a general-purpose computer programming language. It was created in the 1970s by Dennis Ritchie, and remains very widely used and influential.</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3 mb-3">
          <Card className="d-flex flex-column align-items-center">
            <Card.Img
              variant="top"
              src={Java}
              className="img-fluid course-image"
              style={{ maxWidth: '100%', maxHeight: '200px', width: '200px' }}
            />
            <Card.Body className="text-center">
              <Card.Title>Java Programming</Card.Title>
              <Card.Text>Java is a widely-used programming language for coding web applications. It has been a popular choice among developers for over two decades, with millions of Java applications in use today.</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3 mb-3">
          <Card className="d-flex flex-column align-items-center">
            <Card.Img
              variant="top"
              src={python}
              className="img-fluid course-image"
              style={{ maxWidth: '100%', maxHeight: '200px', width: '200px' }}
            />
            <Card.Body className="text-center">
              <Card.Title>Course Python</Card.Title>
              <Card.Text>Python is a computer programming language often used to build websites and software, automate tasks, and conduct data analysis. Python is a general-purpose language</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3 mb-3"  style={{marginLeft:'2rem'}}>
          <Card className="d-flex flex-column align-items-center">
            <Card.Img
              variant="top"
              src={R}
              className="img-fluid course-image"
              style={{ maxWidth: '100%', maxHeight: '200px', width: '200px' }}
            />
            <Card.Body className="text-center">
              <Card.Title>Course R</Card.Title>
              <Card.Text>R is a well-developed, simple and effective programming language which includes conditionals, loops, user defined recursive functions and input and output facilities3</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3 mb-3">
          <Card className="d-flex flex-column align-items-center">
            <Card.Img
              variant="top"
              src={assembly}
              className="img-fluid course-image"
              style={{ maxWidth: '100%', maxHeight: '200px', width: '200px' }}
            />
            <Card.Body className="text-center">
              <Card.Title>Course assembly</Card.Title>
              <Card.Text>An assembly language is a type of low-level programming language that is intended to communicate directly with a computer's hardware3</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3 mb-3">
          <Card className="d-flex flex-column align-items-center">
            <Card.Img
              variant="top"
              src={go}
              className="img-fluid course-image"
              style={{ maxWidth: '100%', maxHeight: '200px', width: '200px' }}
            />
            <Card.Body className="text-center">
              <Card.Title>Course golang</Card.Title>
              <Card.Text>Go, also called Golang or Go language, is an open source programming language that Google developed</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Course;
