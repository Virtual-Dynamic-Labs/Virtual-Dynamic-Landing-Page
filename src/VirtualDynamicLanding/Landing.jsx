/*! Copyright 2022 Virtual Dynamic Labs */
import React from "react";

// core components
// import ColorNavbar from "components/Navbars/ColorNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";


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

import LandingPageNavbar from "./LandingPageNavbar";
import LandingPageContent from "./LandingPageContent"
import LandingPageNavbarTemp from "./temp";
import LandingPageFooter from "./LandingPageFooter";

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

// import Navbars from "./IndexSections/Navbars.js";
import background from "./metaverse.png";

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
        {/* <LandingPageNavbar /> */}
        <LandingPageNavbarTemp />
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
            <img
              alt="..."
              src={require("./meta-video.jpeg").default}
              width="100%"
              height="750px"
            />
          </div>
          <LandingPageFooter />
        </div>
      </div>
    </>
  );
}
