import React from 'react';
import ProgressBar from 'react-animated-progress-bar';
import { Col } from 'reactstrap';
import Styles from './progress.module.css';
const Progress = ({title,percentage}) => {
    return <>
        <Col md={3} sm={3} xs="4">
                    <div className={Styles.progressBar}>
               <ProgressBar width="100" trackWidth="18" percentage={percentage} />
                <h5 style={{ fontSize: "0.9rem" }}>{title}</h5>
            </div>
                </Col>
                 
    </>
};

export default Progress;
