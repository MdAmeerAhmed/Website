import React from "react";
import "./Navbar.css";
import "animate.css"; // Import Animate.css
const Navbar = () => {
  return (
    <div className="container-fluid sticky-top bg-primary">
      <div className="container ">
        <nav className="navbar navbar-dark navbar-expand-lg py-0">
          <a href="index.html" className="navbar-brand">
            <h1 className="text-white fw-bold d-block">
              Company<span className="text-secondary">Tech</span>
            </h1>
          </a>
          <button
            type="button"
            className="navbar-toggler me-0 text-bg-light"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse bg-transparent" id="navbarCollapse">
            <div className="navbar-nav ms-auto mx-xl-auto p-0">
              <a href="index.html" className="nav-item nav-link active text-secondary">Home</a>
              <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  About Us
                </a>
                <ul className="dropdown-menu fixed-dropdown">
                  <div>
                    <div><h2 className="fw-normal">Get to know our team and mission</h2></div>
                    <hr/>
                    <div className="d-flex">
                      <div style={{width:"30%"}}>
                        <img src="./img/img1.jpg" className="img-fluid w-100 p-2 rounded" alt="Team" />
                      </div>
                      <div className="mx-5">
                        <li><a className="dropdown-item" href="/about-us">About Us</a></li>
                        <li><a className="dropdown-item" href="/about-us/our-team">Our Team</a></li>
                        <li><a className="dropdown-item" href="/about-us/our-partners">Our Partners</a></li>
                        <li><a className="dropdown-item" href="/about-us/clients-and-testimonials">Clients and Testimonials</a></li>
                        <li><a className="dropdown-item" href="/about-us/faq">FAQ</a></li>
                      </div>
                    </div>
                  </div>
                </ul>
              </div>
              <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  IT Service
                </a>
                <ul className="dropdown-menu fixed-dropdown">
                  <div>
                    <div><h2 className="fw-normal">Expert IT solutions for your business</h2></div>
                    <hr/>
                    <div className="d-flex">
                      <div style={{width:"30%"}}>
                        <img src="./img/img2.jpg" className="img-fluid w-100 p-2 rounded" alt="IT Service" />
                      </div>
                      <div className="me-5">
                        <li><a className="dropdown-item" href="/it-service">IT Service</a></li>
                        <li><a className="dropdown-item" href="/it-service/our-team">Our Team</a></li>
                        <li><a className="dropdown-item" href="/it-service/our-partners">Our Partners</a></li>
                        <li><a className="dropdown-item" href="/it-service/clients-and-testimonials">Clients and Testimonials</a></li>
                        <li><a className="dropdown-item" href="/it-service/faq">FAQ</a></li>
                      </div>
                    </div>
                  </div>
                </ul>
              </div>
              <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  Product
                </a>
                <ul className="dropdown-menu fixed-dropdown">
                  <div>
                    <div><h2 className="fw-normal">Discover our range of tech solutions</h2></div>
                    <hr/>
                    <div className="d-flex">
                      <div style={{width:"30%"}}>
                        <img src="./img/img1.jpg" className="img-fluid w-100 p-2 rounded" alt="Product" />
                      </div>
                      <div className="me-5">
                        <li><a className="dropdown-item" href="/product">Product</a></li>
                        <li><a className="dropdown-item" href="/product/our-team">Our Team</a></li>
                        <li><a className="dropdown-item" href="/product/our-partners">Our Partners</a></li>
                        <li><a className="dropdown-item" href="/product/clients-and-testimonials">Clients and Testimonials</a></li>
                        <li><a className="dropdown-item" href="/product/faq">FAQ</a></li>
                      </div>
                    </div>
                  </div>
                </ul>
              </div>
              <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  Digital Service
                </a>
                <ul className="dropdown-menu fixed-dropdown">
                  <div>
                    <div><h2 className="fw-normal">Expert Digital Market solutions for your business</h2></div>
                    <hr/>
                    <div className="d-flex">
                      <div style={{width:"30%"}}>
                        <img src="./img/digital/img3.webp" className="img-fluid w-100 p-2 rounded" alt="IT Service" />
                      </div>
                      <div className="me-5">
                        <li><a className="dropdown-item" href="/it-service">Search Engine Optimization</a></li>
                        <li><a className="dropdown-item" href="/it-service/our-team">Social Media Marketing</a></li>
                        <li><a className="dropdown-item" href="/it-service/our-partners">Content Marketing</a></li>
                        <li><a className="dropdown-item" href="/it-service/clients-and-testimonials">Influncer Marketing</a></li>
                        <li><a className="dropdown-item" href="/it-service/faq">Email Marketing</a></li>
                      </div>
                    </div>
                  </div>
                </ul>
              </div>
              <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  Security
                </a>
                <ul className="dropdown-menu fixed-dropdown mx-5 ">
                  <div>
                    <div><h2 className="fw-normal">Get to know our security measures</h2></div>
                    <hr/>
                    <div className="d-flex">
                      <div style={{width:"30%"}}>
                        <img src="./img/img3.jpg" className="img-fluid w-100 p-2 rounded" alt="Security" />
                      </div>
                      <div className="me-5">
                        <li><a className="dropdown-item" href="/security">Security</a></li>
                        <li><a className="dropdown-item" href="/security/our-team">Our Team</a></li>
                        <li><a className="dropdown-item" href="/security/our-partners">Our Partners</a></li>
                        <li><a className="dropdown-item" href="/security/clients-and-testimonials">Clients and Testimonials</a></li>
                        <li><a className="dropdown-item" href="/security/faq">FAQ</a></li>
                      </div>
                    </div>
                  </div>
                </ul>
              </div>
              <a href="contact.html" className="nav-item nav-link">Contact</a>
            </div>
          </div>
          <div className="d-none d-xl-flex flex-shrink-0">
            <div id="phone-tada" className="d-flex align-items-center justify-content-center me-4">
              <a href="#" className="position-relative animate__animated animate__tada animate__infinite">
                <i className="bi bi-telephone-fill text-white fa-2x"></i>
                <div className="position-absolute" style={{ top: "-2px", left: "20px" }}>
                  <span><i className="bi bi-chat-dots-fill text-white"></i></span>
                </div>
              </a>
            </div>
          </div>
          <div className="ms-2 d-flex flex-column pe-4 border-end">
            <span className="text-white-50">Have any questions?</span>
            <span className="text-secondary hover-color">Call: + 0123 456 7890</span>
          </div>
          <div className="d-flex align-items-center justify-content-center ms-4">
            <a href="#"><i className="bi bi-search text-white fa-2x"></i></a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
