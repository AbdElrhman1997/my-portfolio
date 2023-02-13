import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import RealState from "../assets/img/RealState.jpg";
import e_commerce from "../assets/img/e-commerce.jpg";
import todo from "../assets/img/todo.jpg";
import medical from "../assets/img/medical.jpg";
import Resturant from "../assets/img/Resturant.jpg";
import social from "../assets/img/social.jpg";
import fixTools from "../assets/img/fixTool.jpg";
import portfolio from "../assets/img/portfolio.jpg";
import amirPort from "../assets/img/amirPort.jpg";

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const Projects = [
    {
      title: "Real State App",
      description: "React & TailwindCss",
      imgUrl: RealState,
      liveUrl: "https://homesapp-git-main-abdelrhman1997.vercel.app/",
      githupUrl: "https://github.com/AbdElrhman1997/React-Real-estates-Project",
    },
    {
      title: "E-Commerce",
      description: "Angular & TailwindCss & Express & MongoDB",
      imgUrl: e_commerce,
      liveUrl: "https://e-commerce-abdelrhman1997.vercel.app",
      githupUrl: "https://github.com/AbdElrhman1997/E-Comerce-Client",
    },
    {
      title: "Fixtools Convertor",
      description: "React & Bootstrap & Express",
      imgUrl: fixTools,
      liveUrl: "https://convertor-abdelrhman1997.vercel.app/",
      githupUrl: "https://github.com/AbdElrhman1997/convertor-client",
    },
    {
      title: "designer Portfolio",
      description: "React & TailwindCss & email.js",
      imgUrl: amirPort,
      liveUrl: "https://amir-gehad-abdelrhman1997.vercel.app/",
      githupUrl: "https://github.com/AbdElrhman1997/designer-portfolio",
    },
    {
      title: "Medical App",
      description: "Angular & TailwindCss & Angular Material",
      imgUrl: medical,
      liveUrl: "https://medicalapp-g3mnz5n4i-abdelrhman1997.vercel.app/Home",
      githupUrl: "https://github.com/AbdElrhman1997/Angular-MedicalApp",
    },
    {
      title: "Restaurant App",
      description: "React & TailwindCss",
      imgUrl: Resturant,
      liveUrl: "https://reactrestaurant-git-main-abdelrhman1997.vercel.app/",
      githupUrl: "https://github.com/AbdElrhman1997/React-Restaurant",
    },
    {
      title: "Todo App",
      description: "React & Express & MongoDB",
      imgUrl: todo,
      liveUrl: "https://todo-app-abdelrhman1997.vercel.app/",
      githupUrl: "https://github.com/AbdElrhman1997/MERN-Todo-App",
    },
    {
      title: "Simple Portfolio",
      description: "HTML & CSS & JS",
      imgUrl: portfolio,
      liveUrl: "https://simple-portfolio-abdelrhman1997.vercel.app",
      githupUrl: "https://github.com/AbdElrhman1997/VanillaJs-Project",
    },
    {
      title: "Social App",
      description: "React & Axios",
      imgUrl: social,
      liveUrl: "https://socialapp-git-main-abdelrhman1997.vercel.app/",
      githupUrl: "https://github.com/AbdElrhman1997/React-Media-App",
    },
  ];

  const AngularProjects = [
    {
      title: "Medical App",
      description: "Angular & TailwindCss",
      imgUrl: medical,
      liveUrl: "https://medicalapp-g3mnz5n4i-abdelrhman1997.vercel.app/Home",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2 className="mb-5">Projects</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {Projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
