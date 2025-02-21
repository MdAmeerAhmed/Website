import React from "react";
import "./Carousel.css";

const Footer = () => {
  return (
    <>
      <div
        className="container-fluid footer bg-primary wow fadeIn"
        data-wow-delay=".3s"
      >
        <div className="container pt-5 pb-4">
          <div className="row g-5">
            {/* Column 1: Logo and Social Links */}
            <div className="col-lg-3 col-md-6">
              <a href="index.html" className="text-decoration-none">
                <h1 className="text-white fw-bold d-block">
                  Company<span className="text-secondary">Tech</span>
                </h1>
              </a>
              <p className="mt-4 text-light  text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                facere delectus qui placeat inventore consectetur repellendus optio
                debitis.
              </p>
            </div>

            {/* Column 2: Short Links */}
            <div className="col-lg-3 col-md-6">
              <a href="#" className="h3 text-secondary text-decoration-none">
                Quick Links
              </a>
              <div className="mt-4 d-flex flex-column short-link">
                <a href="" className="mb-2 text-white text-dark text-decoration-none">
                  About us
                </a>
                <a href="" className="mb-2 text-white text-decoration-none">
                  Our Partners
                </a>
                <a href="" className="mb-2 text-white text-decoration-none">
                  Careers
                </a>
                <a href="" className="mb-2 text-white text-decoration-none">
                  Privary Policy
                </a>
                <a href="" className="mb-2 text-white text-decoration-none">
                  Latest Blog
                </a>
                <a href="" className="mb-2 text-white text-decoration-none">
                  Client and Testimonials
                </a>
              </div>
            </div>

            {/* Column 3: Help Links */}
            <div className="col-lg-3 col-md-6">
              <a href="#" className="h3 text-secondary text-decoration-none">
                Product & Services
              </a>
              <div className="mt-4 d-flex flex-column help-link">
                <a href="" className="mb-2 text-white text-decoration-none">
                  Products
                </a>
                <a href="" className="mb-2 text-white text-decoration-none">
                  IT Services
                </a>
                <a href="" className="mb-2 text-white text-decoration-none">
                  Cloud Services
                </a>
                <a href="" className="mb-2 text-white text-decoration-none">
                  Security
                </a>
                <a href="" className="mb-2 text-white text-decoration-none">
                  Contact us
                </a>
                <a href="" className="mb-2 text-white text-decoration-none">
                  sitemap
                </a>
              </div>
            </div>

            {/* Column 4: Contact Information */}
            <div className="col-lg-3 col-md-7">
              <a href="#" className="h3 text-secondary text-decoration-none">
                Contact Us
              </a>
              <div className="text-white mt-4 d-flex flex-column contact-link">
                 <a href="#" className="py-3 text-light border-bottom border-primary text-decoration-none">
                  <i className="fas fa-envelope text-secondary me-2" /> info@exmple.com
                    </a>
                    <a href="#" className="py-3 text-light border-bottom border-primary text-decoration-none">
                  <i className="fas fa-phone-alt text-secondary me-2" /> +123 456
                  7890
                </a>   
                <a href="#" className="py-3 text-light border-bottom border-primary text-decoration-none">
                  <i className="fas fa-phone-alt text-secondary me-2" /> +123 456
                  7890
                </a> 
                <a href="#" className="pb-3 text-light border-bottom border-primary text-decoration-none">
                  <i className="fas fa-map-marker-alt text-secondary me-2" /> 123
                  Street, New York, USA
                </a>
              </div>
            </div>
          </div>
          <div className="d-flex hightech-link align-item-center justify-content-center mt-5  column-gap-5">
                <a href="" className="btn-light nav-fill btn btn-square rounded-circle me-2 text-decoration-none">
                  <i className="fab fa-facebook-f text-primary fa-2x" />
                </a>
                <a href="" className="btn-light nav-fill btn btn-square rounded-circle me-2 text-decoration-none ">
                  <i className="fab fa-twitter text-primary fa-2x" />
                </a>
                <a href="" className="btn-light nav-fill btn btn-square rounded-circle me-2 text-decoration-none">
                  <i className="fab fa-instagram text-primary fa-2x" />
                </a>
                <a href="" className="btn-light nav-fill btn btn-square rounded-circle me-0 text-decoration-none">
                  <i className="fab fa-linkedin-in text-primary fa-2x" />
                </a>
              </div>                                                                                
          <hr className="text-light mt-5 mb-4" />

          <div className="row">
            {/* Copyright */}
            <div className="col-md-6 text-center text-md-start">
              <span className="text-light">
                <a href="#" className="text-secondary text-decoration-none">
                  <i className="fas fa-copyright text-secondary me-2" />
                  Your Site Name
                </a>
                , All Rights Reserved.
              </span>
            </div>

            {/* Footer Design Attribution */}
            <div className="col-md-6 text-center text-md-end">
              <span className="text-light">
                Designed By
                <a href="https://htmlcodex.com" className="text-secondary text-decoration-none">
                  HTML Codex
                </a>{" "}
                Distributed By <a href="https://themewagon.com" className="text-decoration-none">ThemeWagon</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
