import React from "react";
import { Row } from "reactstrap";
import Header from "../../components/common/Header";
import Progress from "../../components/common/Progress";
import Styles from "./Skills.module.css";
const Skills = () => {
  return (
    <div className={Styles.about}>
      <div className="mt-1">
        <Header title={"Skills"} />
        <Row>
          <Progress title={"HTML"} percentage={90} />
          <Progress title={"CSS"} percentage={50} />
          <Progress title={"JavaScript"} percentage={70} />
          <Progress title={"React"} percentage={90} />
          <Progress title={"Node.js"} percentage={50} />
          <Progress title={"Express.js"} percentage={50} />
          <Progress title={"MongoDB"} percentage={50} />
          <Progress title={"Electron"} percentage={60} />
        </Row>
      </div>
    </div>
  );
};

export default Skills;
