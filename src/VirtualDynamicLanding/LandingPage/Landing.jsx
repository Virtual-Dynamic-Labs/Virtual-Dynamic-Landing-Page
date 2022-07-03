/*! Copyright 2022 Virtual Dynamic Labs */
import React from "react";
// core components
import IndexHeader from "components/Headers/IndexHeader.js";
import LandingPageNavbar from "./LandingPageNavbar";
import LandingPageContent from "./LandingPageContent"
import LandingPageFooter from "./LandingPageFooter";
import TeamPageContent from "VirtualDynamicLanding/TeamPage/TeamPageContent";
/*! Copyright 2022 Virtual Dynamic Labs */
// nodejs library that concatenates classes
// ReactJS plugin for a nice carousel
// reactstrap components
// import {
//   Button,
//   UncontrolledCollapse,
//   Input,
//   NavbarBrand,
//   Navbar,
//   NavItem,
//   NavLink,
//   Nav,
//   Container,
//   Row,
//   Col,
// } from "reactstrap";
import background from "./Images/metaverse.jpg";

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
      <div style={{
        backgroundImage: `url(${background})`
      }}>
        <LandingPageNavbar />
        <div className="wrapper" ref={wrapper}>
          {/* <IndexHeader /> */}
          <div className="main">
            <div className="header header-6">
              <div className="page-header">
                <div className="content-center">
                  <LandingPageContent />
                </div>
              </div>
            </div>
            {/* <img
              alt="..."
              src={require("./Images/meta-video.jpeg").default}
              width="100%"
              height="750px"
            /> */}
            {/* <TeamPageContent/> */}
          </div>
          <LandingPageFooter />
        </div>
      </div>
    </>
  );
}
