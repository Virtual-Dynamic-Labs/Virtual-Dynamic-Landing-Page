/*! Copyright 2022 Virtual Dynamic Labs */
import React from "react";
import { Link } from "react-router-dom";

import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";
import logo from './Images/logo.jpg';

const NavBarSocial = () => (
  <Nav className="nav navbar-right" navbar>
    <NavItem>
      <NavLink
        href="https://twitter.com/virtualdynlabs"
        target="_blank"
      >
        <i className="fab fa-twitter" />
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink
        href="https://discord.gg/6nPBkTxcGU"
        target="_blank"
      >
        <i className="fab fa-discord" />
      </NavLink>
    </NavItem>
  </Nav>
)

export default function LandingPageNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  React.useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []);
  const changeNavbarColor = () => {
    if (
      document.documentElement.scrollTop > 299 ||
      document.body.scrollTop > 299
    ) {
      setNavbarColor("bg-info");
    } else if (
      document.documentElement.scrollTop < 300 ||
      document.body.scrollTop < 300
    ) {
      setNavbarColor("navbar-transparent");
    }
  };
  return (
    <>
      <Navbar className={"fixed-top " + navbarColor} expand="lg">
        <Container>
          <div className="navbar-translate">
            <button className="navbar-toggler" id="example-header-6">
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
            <NavbarBrand to="/index" tag={Link} id="tooltip6619950104">
              <div className="d-flex align-items-center">
                <img src={logo} width="50px" height="50px" style={{ borderRadius: "25px", marginRight: "8px" }} />
                <div style={{ fontSize: "22px" }}>Virtual Dynamic Labs</div>
              </div>
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
                <NavLink to="/index" tag={Link}>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/team" tag={Link}>
                  Team
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/whitepaper" tag={Link}>
                  White Paper
                </NavLink>
              </NavItem>
            </Nav>
            <NavBarSocial />
          </UncontrolledCollapse>
        </Container>
      </Navbar>
    </>
  );
}
