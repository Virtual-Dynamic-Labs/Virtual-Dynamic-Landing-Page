import React from "react";
import {useState} from 'react';
import LandingPageNavbar from "../LandingPage/LandingPageNavbar";
import LandingPageFooter from "../LandingPage/LandingPageFooter";
import background from "../LandingPage/Images/metaverse.jpg";

const getWindowSize = () => {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
}

const WhitePaper = () => {
    const [windowSize] = useState(getWindowSize());
    let googleDocHeight = windowSize.innerHeight - 100;
    const contentStyle = { paddingTop: "100px", display: "block", textAlign: "center"};
    return (
        <>
        <div style={{
          backgroundImage: `url(${background})`
        }}>
        <LandingPageNavbar />
            <div className="content" style={contentStyle}>
                <iframe title="white_paper_link" src="https://docs.google.com/document/d/e/2PACX-1vS-kIkhtOeANBcCW_LVLNr6TifEzAZP3ASNAeRnM5TXIR29ndaQeHt-XNKmfOCUG5j7qgXlH7RMoPyI/pub?embedded=true" width="800" height={googleDocHeight} frameborder="1px" ></iframe>
            </div>
        </div>
        <LandingPageFooter />
        </>
    )
}
export default WhitePaper;