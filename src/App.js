import React from 'react';
import {Col, Row} from 'reactstrap';
import HeroText from './pages/Hero/Hero';
import Sidebar from './pages/Sidebar/Sidebar';
import About from './pages/About/About';
import Skills from './pages/skills/Skills';
import Projects from './pages/Projects/Projects';
const App = () => {
  return (
  
      <Row style={{display:"flex"}}>
        <Col md={2} >
          <Sidebar />
        </Col>
        <Col md={8}  style={{flex:1}}>
        <HeroText />
        <About />
        <Skills />
        <Projects/>
        </Col>
    </Row>
  
  )
};

export default App;
