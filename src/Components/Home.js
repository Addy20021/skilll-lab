import React from 'react';
import Navbar from '../Navbar/navbar';
import book from '../Images/book.jpg';
import book2 from '../Images/book2.jpg';
import book3 from '../Images/book3.jpg'
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
      <header>
        <Navbar />
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <div className="container-fluid">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item" aria-current="page">
                  <Link
                    to="/"
                    className="custom-link text-light fw-bold text-decoration-none"
                  >
                    HomePage
                  </Link>
                </li>
              </ol>
            </nav>
          </div>
        </nav>
      </header>
      <main>
        <div className="container">
          <h1 className="text-center mt-4">WELCOME TO THE CENTRE OF EXCELLENCE!!!</h1>
          <Carousel className="mt-5" style={{ maxWidth: '600px', margin: '0 auto' }}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={book}
                alt="First slide"
                style={{ maxHeight: '300px', objectFit: 'cover' }}
              />
              <Carousel.Caption>
                <h3 className="">learninng hub</h3>
                <p className="fw-bold">this is a great place to get placement</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={book2}
                alt="Second slide"
                style={{ maxHeight: '300px', objectFit: 'cover' }}
              />
              <Carousel.Caption>
                <h3 className="">100% assurity</h3>
                <p className="fw-bold">this clllg assures 100% placeement</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={book3}
                alt="Second slide"
                style={{ maxHeight: '300px', objectFit: 'cover' }}
              />
              <Carousel.Caption>
                <h3 className="">best library</h3>
                <p className="fw-bold">we provide books with more than 10,000 </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
