import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import "animate.css";
import TrackVisibility from "react-on-screen";
import CV from "../assets/Abdulrahman Mohamed.pdf";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Front End Developer"];
  const period = 1500;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    // new comment
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(400);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span
                    className="tagline"
                    style={{ fontSize: "40px", color: "white" }}
                  >
                    Welcome to my Portfolio
                  </span>
                  <h1>
                    {
                      <p style={{ fontSize: "40px", color: "white" }}>
                        Hi! I'm Abdelrhman
                      </p>
                    }{" "}
                    <span
                      style={{ fontSize: "30px" }}
                      className="txt-rotate text-white d-block"
                      dataPeriod="1000"
                      data-rotate='["Front End Developer"]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <Button variant="outline" className="btn-cv">
                    <a href={CV} download>
                      Download CV
                    </a>
                  </Button>
                  <div className="navbar-text mb-5">
                    <div className="social-icon">
                      <a
                        href="https://www.linkedin.com/in/abdelrhman-mohamed-73215022a/"
                        target="_blank"
                      >
                        <div>
                          <FaLinkedinIn className="icon"></FaLinkedinIn>
                        </div>
                      </a>
                      <a
                        href="https://www.facebook.com/abdomo7amed11/"
                        target="_blank"
                      >
                        <div>
                          <FaFacebookF className="icon"></FaFacebookF>
                        </div>
                      </a>
                      <a
                        href="https://github.com/AbdElrhman1997"
                        target="_blank"
                      >
                        <div>
                          <FaGithub className="icon"></FaGithub>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

{
  /* <button onClick={() => console.log("connect")}>
                    Let’s Connect <ArrowRightCircle size={25} />
                  </button> */
}
