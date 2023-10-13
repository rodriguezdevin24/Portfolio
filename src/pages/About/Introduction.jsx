//Introduction.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./about.css";
import Athena from "./Athena.jpeg";


const DevinSection = () => {


  return (
    <section className="first-section d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
          
            <h1 className="name">Devin Rodriguez</h1>
            <div className="about-text">Stellar Origins</div>
            <p className="about-me border p-3">
              Hi, I'm Devin, a passionate web developer specializing in
              front-end technologies. I love turning ideas into reality and am
              constantly exploring new technologies to create seamless user
              experiences.
            </p>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img 
            src={Athena} 
            alt="Devin and Athena" 
            className="img-fluid"
             />
          </div>
        </div>
      </div>
      <svg className="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800">
    <g strokeWidth="10" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="1 26" transform="matrix(1,0,0,1,-132,0)">
        <path d="M244.6934814453125 288.4115753173828Q522.6934814453125 70.41157531738281 396.6934814453125 440.4115753173828Q587.6934814453125 343.4115753173828 548.6934814453125 592.4115753173828 " markerEnd="url(#SvgjsMarker4463)"></path>
    </g>
    <defs>
        <marker markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" viewBox="0 0 5 5" orient="auto" id="SvgjsMarker4463">
            <polygon points="0,5 2.5,2.5 0,0 5,2.5" fill="white"></polygon>
        </marker>
    </defs>
</svg>
    </section>
  );
};

export default DevinSection;
