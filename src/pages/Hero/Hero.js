import React from "react";
import Styles from "./Hero.module.css";
import Typewriter from "typewriter-effect";
import Particle from "react-particles-js";
import particlesConfig from "../../assets/particlesConfig.json";
const Hero = () => {
  return (
    <>
      <div className={Styles.hero}>
        <Particle
          params={particlesConfig}
          className="App-particles__container"
        />
        <div className={Styles.hero__bg}>
          <div className={Styles.image__text}>
            <h1>Zeeshan Ahmad</h1>
            <Typewriter
              options={{
                strings: [
                  "I am  Software Developer",
                  "I am  React Developer",
                  "I am Javasript Developer",
                  "I am Mern Stack Developer",
                  "I am Full Stack Developer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
        <div className={Styles.hero__content}></div>
      </div>
    </>
  );
};

export default Hero;
