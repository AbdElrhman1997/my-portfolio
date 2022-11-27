import { Col } from "react-bootstrap";
import { FaGithub, FaLink } from "react-icons/fa";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  liveUrl,
  githupUrl,
}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx cursor-pointer mx-auto">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <p>{description}</p>
          <a className="text-white" href={`${liveUrl}`} target="_blank">
            <FaLink className="icon fs-3 m-2"></FaLink>
          </a>
          <a className="text-white" href={`${githupUrl}`} target="_blank">
            <FaGithub className="icon fs-3 m-2"></FaGithub>
          </a>
        </div>
      </div>
    </Col>
  );
};
