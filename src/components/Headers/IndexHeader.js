/*!













*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

export default function Index() {
  return (
    <>
      <div className="page-header">
        <div className="squares square1" />
        <div className="squares square2" />
        <div className="squares square3" />
        <div className="squares square4" />
        <div className="squares square5" />
        <div className="squares square6" />
        <div className="squares square7" />
        <Container>
          <div className="content-center brand">
            <h1 className="h1-seo">BLK• PRO React</h1>
            <h3>All components</h3>
          </div>
        </Container>
      </div>
    </>
  );
}
