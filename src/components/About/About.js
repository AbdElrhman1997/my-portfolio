import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillProject } from "react-icons/ai";
import { MdStars } from "react-icons/md";
import aboutImg from "../../assets/img/aboutImg.jpg";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

import "./About.css";

function About() {
  return (
    <Container>
      <section className="about text-center text-black m-auto" id="about">
        <p className=" text-4xl my-5 text-white h1" data-aos="fade-right">
          About Me
        </p>
        <div className="grid grid-cols-12 m-8"></div>
        <Row>
          <Col size={5}>
            <div className="image" data-aos="fade-right" data-aos-delay="300">
              <img src={aboutImg} className="aboutImg m-1" />
            </div>
          </Col>
          <Col size={12} sm={12} md={7}>
            <div
              className="m-auto text-white"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <div className="text-black w-full bo">
                <div className="mt-8 bg-red-700 btn btn-primary">
                  <MdStars className="m-auto my-2" />
                  <p>Experience</p>
                  <p className="">1+ Year Working</p>
                </div>
                <div className=" mt-8 btn btn-primary">
                  <BsFillPersonFill className="m-auto text-lg my-2" />
                  <p>Clients</p>
                  <p className="">10+ WorldWide</p>
                </div>
                <div className=" mt-8 btn btn-primary">
                  <AiFillProject className="m-auto text-lg my-2" />
                  <p>Projects</p>
                  <p className="">20+ Completed</p>
                </div>
              </div>
              <p className="col-span-12 mt-5 space">
                Frontend Developer with +1 Year Of Experience with all stages of
                the development cycle for dynamic web projects , Familiar with
                Javascript Modern Frameworks Like React ,Angular and Project
                management with Agile methodology , Looking for Frontend Remote
                Job opportunity.
              </p>
              <div className="col-span-12">
                <button class="btn">
                  <a href="#contact" className="btn-about">
                    Let`s Talk
                  </a>
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </Container>
  );
}

// AiFillProject
// BsPersonCircle

export default About;
