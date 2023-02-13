import React, { useState } from "react";
import { FaLaptopCode } from "react-icons/fa";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { IoIosContact } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";
import "./Nav.css";
import { Container } from "react-bootstrap";

// forEach(e => {
//     return e.classList.remove('active');
// });

export const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <Container>
      <nav
        className="d-flex justify-content-center"
        data-aos="fade-top"
        data-aos-delay="200"
      >
        <div className="nav">
          <a
            href="#home"
            onClick={() => {
              setActiveNav("#home");
            }}
            className={activeNav === "#home" ? "active" : ""}
          >
            <AiOutlineHome />
          </a>
          <a
            href="#about"
            onClick={() => {
              setActiveNav("#about");
            }}
            className={activeNav === "#about" ? "active" : ""}
          >
            <AiOutlineUser />
          </a>
          <a
            href="#skills"
            onClick={() => {
              setActiveNav("#skills");
            }}
            className={activeNav === "#skills" ? "active" : ""}
          >
            <FaLaptopCode />
          </a>
          <a
            href="#projects"
            onClick={() => {
              setActiveNav("#projects");
            }}
            className={activeNav === "#projects" ? "active" : ""}
          >
            <CgWebsite />
          </a>
          <a
            href="#contact"
            onClick={() => {
              setActiveNav("#contact");
            }}
            className={activeNav === "#contact" ? "active" : ""}
          >
            <IoIosContact />
          </a>
        </div>
      </nav>
    </Container>
  );
};

// FaRegCheckCircle
// BsFillPersonFill
// MdStars
// AiFillProject
// GiCircle
// HiOutlineMail
// BsMessenger
// BsWhatsapp
