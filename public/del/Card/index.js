import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  Container,
  CardText,
} from "reactstrap";

import "./style.css";
// import "./hover.scss";
// import { Link } from "react-router-dom";
import image from '../../assets/img/teamBuilder.png';

function PortfolioCard(props) {
  return (
    // <>
      <Container>
        <Card inverse style={{ margin: "1.5em" }}>
          <CardImg
            width="100%"
            src={image}
            alt="Card image cap"
          />
          <a
            href="https://github.com/egadames/Password-Generator"
            target="_blank"
            rel="noopener noreferrer"
          >
          <CardImgOverlay>
            <div className="overlay">
               <CardText style={{fontSize: 20, color: "white"}} className="text">HTML</CardText>
            </div>
          </CardImgOverlay>
          </a>
        </Card>
      </Container>
    // </>
  );
}

export default PortfolioCard;
