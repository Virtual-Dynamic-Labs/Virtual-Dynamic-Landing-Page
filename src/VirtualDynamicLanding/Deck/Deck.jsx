import React from "react";
import LandingPageNavbar from "../LandingPage/LandingPageNavbar";
import LandingPageFooter from "../LandingPage/LandingPageFooter";
import background from "../LandingPage/Images/metaverse.jpg";

const Deck = () => {
    const contentStyle = { paddingTop: "100px", display: "block", textAlign: "center"};
    return (
        <>
        <div style={{
          backgroundImage: `url(${background})`
        }}>
        <LandingPageNavbar />
            <div className="deck" style={contentStyle}>
                <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTpiLeIRB7epZPY4MlXDNGt094pDh_G2Zy8DHuqU3Z2A1tRIq23IK8EZV2hiJqbrziW0PfE9ER1RDxa/embed?start=true&loop=true&delayms=10000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe> </div>
            </div>
        <LandingPageFooter />
        </>
    )
}

export default Deck;