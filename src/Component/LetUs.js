import React from "react";
import Sentence from "./Sentence";
import Approach from "./Approach";
import CloudService from "./CloudService";

const LetUs = () => {
  return (
    <> 
    <div 
      className="w-100  p-4 text-white d-flex flex-column "
      style={{ background: "linear-gradient(to right, #007bff, #6610f2)" }} 
    >
      {/* Flex container for h2 and button */}
      <div className="d-flex text-right mx-5 mt-3  gap-3  justify-content-between">
        <h2 className="text-light ">Let Us Help You</h2>
        <a 
          href="/contact-in" 
          className="sppb-btn sppb-btn-custom sppb-btn-lg sppb-btn-rounded sppb-btn-gradient"
        >
          Contact Us Now
        </a>
      </div>

      {/* Description */}
      <p className="text-light mt-2 ms-5  text-right">
        We are here to help you with your business needs. We provide expertise and guidance to 
        help you create a successful and sustainable business.
      </p>
    </div>
    <CloudService />
    <Sentence Heading="h6"
     bgGradient= "linear-gradient(to right, rgb(86, 81, 248), rgb(30, 12, 124))"
    text="Rounak Computers provides customized IT solutions, including hardware sales, software licensing, web development, and consulting, helping businesses achieve growth effectively."/>
    <Approach/>
    <Sentence text="Security is a core focus across all our services, ensuring comprehensive protection for your business in every solution we implement and deploy."/>
    </>
  );
};

export default LetUs;
