/*! Copyright 2022 Virtual Dynamic Labs */
import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";

export default function Error400() {
  const wrapper = React.useRef(null);
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    wrapper.current.scrollTop = 0;
    document.body.classList.add("error-page");
    return function cleanup() {
      document.body.classList.remove("error-page");
    };
  }, []);
  return (
    <>
      <ColorNavbar />
      <div className="wrapper" ref={wrapper}>
        <div className="page-header error-page header-filter">
          <div
            className="page-header-image"
            style={{
              backgroundImage:
                "url(" + require("assets/img/braden-collum.jpg").default + ")",
            }}
          />
          <Container>
            <Row>
              <Col md="12">
                <h1 className="title">404</h1>
                <h2 className="description">Page not found :(</h2>
                <h4 className="description">
                  Ooooups! Looks like you got lost.
                </h4>
              </Col>
            </Row>
          </Container>
        </div>
        <DemoFooter />
      </div>
    </>
  );
}
