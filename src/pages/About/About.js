import React from 'react';
import { Card, CardBody,Col,Row } from 'reactstrap';
import Header from '../../components/common/Header';
import Styles from './About.module.css';
const About = () => {
    return <div className={Styles.about}>
        <Card>
        <Header title={'About'} />
        <CardBody className={Styles.aboutText}>
            Hi :) 👋 I'm Zeeshan Ahmad ,a full stack web developer, currently working as a full web developer. I have total 1+ years of Experience in web Development.I'm working with newest front-end frameworks like Next.js, React and Node.js.
            </CardBody>

        </Card>
        <Card className='mt-2 p-2'>
            <Header title={'My Info'} />
            <Row>
                <Col md={6}>
                            <li><strong>Name</strong>: Zeeshan Ahmad</li>
                            <li><strong>Age</strong>: 23</li>     
                </Col>
                <Col md={6}>
                            <li><strong>Email</strong>:zeeshan1361@gmail.com</li>
                            <li><strong>Phone</strong>: +91-7006304092</li> 
                    </Col>
            </Row>
        </Card>
        </div>
};

export default About;
