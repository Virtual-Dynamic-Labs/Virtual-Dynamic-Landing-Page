import React from "react";
import {
  Button,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";

const LandingPageContent = () => {
  return (
    <Container>
      <Row className="align-items-center text-left">
        <Col lg="6" xs="12">
          <h1 className="title">
            Virtual Dynamic Labs <br />
            <strong style={{ color: "#F77E21" }}>Metaverse As A Service</strong>
          </h1>
          <p className="description">
            Virtual Dynamic SDK is a set of tools for metaverse content creator to deploy their 3D virtual assets into multiple Metaverse games with a simple process.
            The SDK can also provide cross verse functionalities to these 3D virtual items and create a real decentralized metaverse.
          </p>
          {/* <Row className="row-input">
            <Col className="mt-1" sm="8" xs="12">
              <Input
                aria-label="Your email"
                id="signupSrEmail"
                name="email"
                placeholder="Your email"
                type="email"
              />
            </Col>
            <Col sm="4" xs="12">
              <Button block color="info">
                Get Started
              </Button>
            </Col>
          </Row> */}
        </Col>
        <Col lg="6" xs="12">
          <img
            alt="..."
            src={require("./Images/landing-main.jpg").default}
          />
          {/* SVG Illustration */}
          {/* <figure className="header-shape">
            <svg
              className="injected-svg js-svg-injector"
              style={{ enableBackground: "new 10 12 878.9 907" }}
              viewBox="10 12 878.9 907"
              x="0px"
              y="0px"
              xmlSpace="preserve"
            >
              <g>
                <defs>
                  <path
                    d="M300.34,75.35C379.42-7.43,305.86,185.78,540.87,98.95,647.68,46,677,219,674.65,258.55c-11,185-132.32,65-13.89,317.66,56.86,121.32-94.88,256-155.89,151.41-55.11-94.48-151.56-85.1-189-90.54-311-45.27-9.33-148.52-125.21-256.78C9.7,211.2,190.5,100.86,306.34,70.35Z"
                    id="shape1"
                  />
                </defs>
                <clipPath id="shape2">
                  <use
                    style={{ overflow: "visible" }}
                    xlinkHref="#shape1"
                  />
                </clipPath>
                <g clipPath="url(#shape2)">
                  <image
                    height="900"
                    id="imageShape1"
                    style={{ overflow: "visible" }}
                    transform="matrix(0.9488 0 0 0.9488 25 53.1187)"
                    width="800"
                    xlinkHref={
                      require("./landing-main.jpg").default
                    }
                  />
                </g>
              </g>
              <g>
                <defs>
                  <path
                    d="M186.26,647.36c7,1,14,1.87,21.11,2.4,42.73,3.24,173.84,9.32,234.51,60.15,72.83,61,105.38,80.19,37.4,96.45C388.73,828,438.49,724,312,749.28c-167.3,33.46-210.61-70.86-181.08-90.54C151.8,644.8,174.69,645.67,186.26,647.36Z"
                    id="shape3"
                  />
                </defs>
                <clipPath id="shape4">
                  <use
                    style={{ overflow: "visible" }}
                    xlinkHref="#shape3"
                  />
                </clipPath>
                <g
                  clipPath="url(#shape4)"
                  transform="matrix(1 0 0 1 0 0)"
                >
                  <image
                    height="900"
                    id="imageShape2"
                    style={{ overflow: "visible" }}
                    transform="matrix(0.9488 0 0 0.9488 25 53.1187)"
                    width="900"
                    xlinkHref={
                      require("assets/img/img_352.png").default
                    }
                  />
                </g>
              </g>
            </svg>
          </figure> */}
        </Col>
      </Row>
    </Container>
  )
}

export default LandingPageContent;