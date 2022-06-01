/*! Copyright 2022 Virtual Dynamic Labs */
import React from "react";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

// Sections for this page
// (we've divided this page into multiple react components to make it a bit more readable)
import Basic from "../views/IndexSections/Basic.js";
import Navbars from "../views/IndexSections/Navbars.js";
import Tabs from "../views/IndexSections/Tabs.js";
import Pills from "../views/IndexSections/Pills.js";
import Pagination from "../views/IndexSections/Pagination.js";
import Notifications from "../views/IndexSections/Notifications.js";
import PreFooter from "../views/IndexSections/PreFooter.js";
import Footers from "../views/IndexSections/Footers.js";
import Typography from "../views/IndexSections/Typography.js";
import ContentAreas from "../views/IndexSections/ContentAreas.js";
import Cards from "../views/IndexSections/Cards.js";
import PlainCards from "../views/IndexSections/PlainCards.js";
import JavaScript from "../views/IndexSections/JavaScript.js";
import NucleoIcons from "../views/IndexSections/NucleoIcons.js";




// New Imports
/*! Copyright 2022 Virtual Dynamic Labs */
// nodejs library that concatenates classes
// ReactJS plugin for a nice carousel
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  Input,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

export default function Landing() {
  const wrapper = React.useRef(null);
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    wrapper.current.scrollTop = 0;
    document.body.classList.add("index-page");
    return function cleanup() {
      document.body.classList.remove("index-page");
    };
  }, []);
  return (
    <>
      <ColorNavbar />
      <div className="wrapper" ref={wrapper}>
        <IndexHeader />
        <div className="main">
          <div className="header header-6">
          <Navbar className="navbar-transparent" expand="lg">
            <Container>
              <div className="navbar-translate">
                <button className="navbar-toggler" id="example-header-6">
                  <span className="navbar-toggler-bar bar1" />
                  <span className="navbar-toggler-bar bar2" />
                  <span className="navbar-toggler-bar bar3" />
                </button>
                <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
                  Virtual Dynamic Labs
                </NavbarBrand>
              </div>
              <UncontrolledCollapse navbar toggler="#example-header-6">
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        BLK• <span>PRO React</span>
                      </a>
                    </Col>
                    <Col className="collapse-close text-right" xs="6">
                      <button className="navbar-toggler" id="example-header-6">
                        <i className="tim-icons icon-simple-remove" />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="mx-auto" navbar>
                  <NavItem className="active">
                    <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                      Home
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                      About Us
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                      Products
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                      Contact Us
                    </NavLink>
                  </NavItem>
                </Nav>
                <Nav className="nav navbar-right" navbar>
                  <NavItem>
                    <NavLink
                      href="https://twitter.com/CreativeTim"
                      target="_blank"
                    >
                      <i className="fab fa-twitter" />
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="https://www.facebook.com/CreativeTim"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-square" />
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="https://www.instagram.com/CreativeTimOfficial"
                      target="_blank"
                    >
                      <i className="fab fa-instagram" />
                    </NavLink>
                  </NavItem>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
          <div className="page-header">
            <div className="content-center">
              <Container>
                <Row className="align-items-center text-left">
                  <Col lg="6" xs="12">
                    <h1 className="title">
                      Integrated <br />
                      <strong className="text-info">Front marketing</strong>
                    </h1>
                    <p className="description">
                      We aim high at being focused on building relationships
                      with our clients and community. Using our creative gifts
                      drives this foundation.
                    </p>
                    <Row className="row-input">
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
                    </Row>
                  </Col>
                  <Col lg="6" xs="12">
                    <img
                      alt="..."
                      className="path path3"
                      src={require("assets/img/shape-s.png").default}
                    />
                    {/* SVG Illustration */}
                    <figure className=" header-shape">
                      <svg
                        className=" injected-svg js-svg-injector"
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
                                require("assets/img/img_352.png").default
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
                    </figure>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
          {/* <Basic />
          <Navbars />
          <Tabs />
          <Pills />
          <Pagination />
          <Notifications />
          <PreFooter />
          <Footers />
          <Typography />
          <ContentAreas />
          <Cards />
          <PlainCards />
          <JavaScript />
          <NucleoIcons /> */}
        </div>
        <DemoFooter />
      </div>
    </>
  );
}
