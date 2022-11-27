import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import { FaFacebookF, FaLinkedinIn, FaGithub, FaCode } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center justify-content-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/abdelrhman-mohamed-73215022a/"
                target="_blank"
              >
                <div>
                  <FaLinkedinIn className="icon"></FaLinkedinIn>
                </div>
              </a>
              <a href="https://www.facebook.com/abdomo7amed11/" target="_blank">
                <div>
                  <FaFacebookF className="icon"></FaFacebookF>
                </div>
              </a>
              <a href="https://github.com/AbdElrhman1997" target="_blank">
                <div>
                  <FaGithub className="icon"></FaGithub>
                </div>
              </a>
            </div>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <p className="fs-4">Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
