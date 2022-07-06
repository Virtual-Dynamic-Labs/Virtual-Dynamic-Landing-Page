import React from "react";
import LandingPageNavbar from "../LandingPage/LandingPageNavbar";
import background from "../LandingPage/Images/metaverse.jpg";

const WhitePaper = () => {
    return (
        <>
        <div style={{
          backgroundImage: `url(${background})`
        }}>
        <LandingPageNavbar />
            <div className="content" style={{ paddingTop: "100px", display: "block",  textAlign: "center"}}>
                <iframe src="https://docs.google.com/document/d/e/2PACX-1vS-kIkhtOeANBcCW_LVLNr6TifEzAZP3ASNAeRnM5TXIR29ndaQeHt-XNKmfOCUG5j7qgXlH7RMoPyI/pub?embedded=true" width="800" height="600" frameborder="1px" ></iframe>
            </div>
        </div>
        </>
    )
}
export default WhitePaper;