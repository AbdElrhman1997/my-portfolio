import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-1.jpg";
import projImg2 from "../assets/img/project-2.jpg";
import projImg3 from "../assets/img/project-3.jpg";
import projImg4 from "../assets/img/project-4.jpg";
import projImg5 from "../assets/img/Screenshot 2022-10-17 170506.jpg";
import projImg6 from "../assets/img/project-5.jpg";
import projImg7 from "../assets/img/project-6.jpg";
import projImg8 from "../assets/img/project-7.jpg";
import projImg9 from "../assets/img/project-8.jpg";

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const Projects = [
    {
      title: "Real State App",
      description: "React & TailwindCss",
      imgUrl: projImg1,
      liveUrl: "https://homesapp-git-main-abdelrhman1997.vercel.app/",
      githupUrl: "https://github.com/AbdElrhman1997/React-Real-estates-Project",
    },
    {
      title: "E-Commerce",
      description: "Angular & TailwindCss & Express & MongoDB",
      imgUrl: projImg7,
      liveUrl: "https://e-commerce-abdelrhman1997.vercel.app",
      githupUrl: "https://github.com/AbdElrhman1997/E-Comerce-Client",
    },
    {
      title: "Fixtools Convertor",
      description: "React & Bootstrap & Express",
      imgUrl: projImg8,
      liveUrl: "https://convertor-abdelrhman1997.vercel.app/",
      githupUrl: "https://github.com/AbdElrhman1997/convertor-client",
    },
    {
      title: "Medical App",
      description: "Angular & TailwindCss & Angular Material",
      imgUrl: projImg4,
      liveUrl: "https://medicalapp-g3mnz5n4i-abdelrhman1997.vercel.app/Home",
      githupUrl: "https://github.com/AbdElrhman1997/Angular-MedicalApp",
    },
    {
      title: "Restaurant App",
      description: "React & TailwindCss",
      imgUrl: projImg2,
      liveUrl: "https://reactrestaurant-git-main-abdelrhman1997.vercel.app/",
      githupUrl: "https://github.com/AbdElrhman1997/React-Restaurant",
    },
    {
      title: "Todo App",
      description: "React & Express & MongoDB",
      imgUrl: projImg3,
      liveUrl: "https://todo-app-abdelrhman1997.vercel.app/",
      githupUrl: "https://github.com/AbdElrhman1997/MERN-Todo-App",
    },
    {
      title: "Simple Portfolio",
      description: "HTML & CSS & JS",
      imgUrl: projImg9,
      liveUrl: "https://simple-portfolio-abdelrhman1997.vercel.app",
      githupUrl: "https://github.com/AbdElrhman1997/VanillaJs-Project",
    },
    {
      title: "Social App",
      description: "React & Axios",
      imgUrl: projImg6,
      liveUrl: "https://socialapp-git-main-abdelrhman1997.vercel.app/",
      githupUrl: "https://github.com/AbdElrhman1997/React-Media-App",
    },
  ];

  const AngularProjects = [
    {
      title: "Medical App",
      description: "Angular & TailwindCss",
      imgUrl: projImg5,
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
