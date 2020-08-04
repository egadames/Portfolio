import React from "react";
import { Container } from "reactstrap";

import "./style.scss";
import image from "../../assets/img/bg3.jpg";
import cloud from "../../assets/img/clouds.png";

function Banner(props) {
  return (
    // <>
      <div
        className="page-header section-dark"
        style= 
        {{
          backgroundImage: {image},
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
          <div className="title-brand">
            <h2 className="presentation-title" >Erik Adames</h2>
          </div>
            {/* <h2 className="presentation-subtitle text-center">
              My name is Erik Adames.
            </h2> */}
            <h2 className="presentation-subtitle text-center">
              I am a full stack software engineer training to be a Data Scientist.
            </h2>
          </Container>
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage: {cloud},
          }}
        />
      </div>
  );
}

export default Banner;
