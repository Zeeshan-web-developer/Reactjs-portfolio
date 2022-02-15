import React from "react";
import { CardBody, CardTitle, CardImg, CardText, Row } from "reactstrap";
import Header from "../../components/common/Header";
import Styles from "./projects.module.css";
import Data from "../../assets/data.json";
const About = () => {
  return (
    <div className={Styles.about}>
      <Row>
        <Header title={"Projects"} />
        <Row>
          {Data.map((project, index) => {
            return (
              <div className="col-md-4 sm-12">
                <div className="card card-body h-100">
                  <CardBody>
                    <CardImg
                      alt="Card image cap"
                      top
                      width="100%"
                      src={project.projectImg}
                    />
                  </CardBody>

                  <CardText className="text-center p-3">
                    <CardTitle tag="h6" className="text-center p-3">
                      {project.projectName}
                    </CardTitle>
                    <div>
                      <strong>
                        <a href={project.projectUrl} className="pb-3">
                          View Project
                        </a>
                      </strong>
                    </div>
                    <small
                      style={{
                        textAlign: "justify",
                        fontSize: "0.8rem",
                      }}
                    >
                      {project.projectDesc}
                    </small>
                  </CardText>
                </div>
              </div>
            );
          })}
        </Row>
      </Row>
    </div>
  );
};

export default About;
