/*! Copyright 2022 Virtual Dynamic Labs */
import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";

export default function PresentationHeader() {
  const scrollPage = (e) => {
    e.preventDefault();
    document.getElementById("pricing").scrollIntoView();
  };
  return (
    <>
      <div className="page-header">
        <img
          alt="..."
          className="path"
          src={require("assets/img/blob.png").default}
        />
        <img
          alt="..."
          className="path2"
          src={require("assets/img/path2.png").default}
        />
        <img
          alt="..."
          className="shapes triangle"
          src={require("assets/img/triunghiuri.png").default}
        />
        <img
          alt="..."
          className="shapes wave"
          src={require("assets/img/waves.png").default}
        />
        <img
          alt="..."
          className="shapes squares"
          src={require("assets/img/patrat.png").default}
        />
        <img
          alt="..."
          className="shapes circle"
          src={require("assets/img/cercuri.png").default}
        />
        <Container>
          <div className="content-center brand">
            <h1 className="h1-seo">
              BLK• <small className="text-warning">PRO React</small>
            </h1>
            <h3>
              Start the Development With this Badass Bootstrap 4 Design System.
            </h3>
            <Button
              className="btn-simple mt-4"
              color="warning"
              href="/product/blk-design-system-pro-react?ref=blkdspr-presentation-header"
              size="lg"
              target="_blank"
            >
              BUY NOW
            </Button>
            <Button
              className="btn-link mt-4 d-block"
              color="warning"
              href="#pablo"
              onClick={scrollPage}
              size="lg"
            >
              <u>Show pricing</u>
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}
