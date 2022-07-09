import React from "react";
import LandingPageNavbar from "../LandingPage/LandingPageNavbar";
import LandingPageFooter from "../LandingPage/LandingPageFooter";
import background from "../LandingPage/Images/metaverse.jpg";
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    Container,
    Row,
    Col,
} from "reactstrap";

const TeamPageContent = () => {
    return (
        <>
        <div style={{
          backgroundImage: `url(${background})`
        }}>
        <LandingPageNavbar />
        <div className="cards" style={{ paddingTop: "100px" }}>
            <Container>
                <Row>
                    <Col className="ml-auto mr-auto" lg="4" md="6">
                        <Card className="card-profile profile-bg" style={{height:"400px"}}>
                            <CardHeader
                                style={{
                                    backgroundImage:
                                        "url(" +
                                        require("assets/img/darken-night-sky-full-of-stars-fantasy-animation-made-of-magical-sparkly-light-particles-flickering-on-a-purple-blue-gradient-background_bajacpz7x_thumbnail-full01.png").default +
                                        ")",
                                }}
                            >
                                <div className="card-avatar">
                                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                        <img
                                            alt="..."
                                            className="img img-raised"
                                            src={require("VirtualDynamicLanding/TeamPage/images/michael-zhou.jpeg").default}
                                        />
                                    </a>
                                </div>
                            </CardHeader>
                            <CardBody>
                                <CardTitle tag="h3">Michael Zhou</CardTitle>
                                <h6 className="category text-primary">Co-founder & CEO</h6>
                            </CardBody>
                            <CardFooter>
                                <div className="d-inline float-right">
                                    <Button
                                        className="btn-icon btn-round"
                                        color="twitter"
                                        href="https://twitter.com/MichaelZhou10"
                                        target="_blank"
                                    >
                                        <i className="fab fa-twitter" />
                                    </Button>
                                    <Button
                                        className="btn-icon btn-round ml-1"
                                        color="linkedin"
                                        href="https://www.linkedin.com/in/ziyao-zhou-57b41485/"
                                        target="_blank"
                                    >
                                        <i className="fab fa-linkedin" />
                                    </Button>
                                    <Button
                                        className="btn-icon btn-round ml-1"
                                        color="discord"
                                        href="https://discord.gg/6nPBkTxcGU"
                                        target="_blank"
                                    >
                                        <i className="fab fa-discord" />
                                    </Button>
                                </div>
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col className="ml-auto mr-auto" lg="4" md="6">
                        <Card className="card-profile profile-bg" style={{height:"400px"}}>
                            <CardHeader
                                style={{
                                    backgroundImage:
                                        "url(" +
                                        require("assets/img/darken-night-sky-full-of-stars-fantasy-animation-made-of-magical-sparkly-light-particles-flickering-on-a-purple-blue-gradient-background_bajacpz7x_thumbnail-full01.png").default +
                                        ")",
                                }}
                            >
                                <div className="card-avatar">
                                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                        <img
                                            alt="..."
                                            className="img img-raised"
                                            src={require("VirtualDynamicLanding/TeamPage/images/liana-lei.jpeg").default}
                                        />
                                    </a>
                                </div>
                            </CardHeader>
                            <CardBody>
                                <CardTitle tag="h3">Liana Lei, MBA</CardTitle>
                                <h6 className="category text-primary">CMO & COO</h6>
                            </CardBody>
                            <CardFooter>
                                <div className="d-inline float-right">
                                    <Button
                                        className="btn-icon btn-round"
                                        color="twitter"
                                        href="https://twitter.com/Liana_Lei_Manyi"
                                        target="_blank"
                                    >
                                        <i className="fab fa-twitter" />
                                    </Button>
                                    <Button
                                        className="btn-icon btn-round ml-1"
                                        color="linkedin"
                                        href="https://www.linkedin.com/in/manyi-liana-lei/"
                                        target="_blank"
                                    >
                                        <i className="fab fa-linkedin" />
                                    </Button>
                                    <Button
                                        className="btn-icon btn-round ml-1"
                                        color="discord"
                                        href="https://discord.gg/6nPBkTxcGU"
                                        target="_blank"
                                    >
                                        <i className="fab fa-discord" />
                                    </Button>
                                </div>
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col className="ml-auto mr-auto" lg="4" md="6">
                        <Card className="card-profile profile-bg" style={{height:"400px"}}>
                            <CardHeader
                                style={{
                                    backgroundImage:
                                        "url(" +
                                        require("assets/img/darken-night-sky-full-of-stars-fantasy-animation-made-of-magical-sparkly-light-particles-flickering-on-a-purple-blue-gradient-background_bajacpz7x_thumbnail-full01.png").default +
                                        ")",
                                }}
                            >
                                <div className="card-avatar">
                                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                        <img
                                            alt="..."
                                            className="img img-raised"
                                            src={require("VirtualDynamicLanding/TeamPage/images/allen-chang.jpeg").default}
                                        />
                                    </a>
                                </div>
                            </CardHeader>
                            <CardBody>
                                <CardTitle tag="h3">Allen Chang</CardTitle>
                                <h6 className="category text-primary">Game Design & Web3 Developer</h6>
                            </CardBody>
                            <CardFooter>
                                <div className="d-inline float-right">
                                    <Button
                                        className="btn-icon btn-round"
                                        color="twitter"
                                        href="https://twitter.com/Deztiny1742"
                                        target="_blank"
                                    >
                                        <i className="fab fa-twitter" />
                                    </Button>
                                    <Button
                                        className="btn-icon btn-round ml-1"
                                        color="linkedin"
                                        href="https://www.linkedin.com/in/sheng-yu-chang-67a442186/"
                                        target="_blank"
                                    >
                                        <i className="fab fa-linkedin" />
                                    </Button>
                                    <Button
                                        className="btn-icon btn-round ml-1"
                                        color="discord"
                                        href="https://discord.gg/6nPBkTxcGU"
                                        target="_blank"
                                    >
                                        <i className="fab fa-discord" />
                                    </Button>
                                </div>
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col className="ml-auto mr-auto" lg="4" md="6">
                        <Card className="card-profile profile-bg" style={{height:"400px"}}>
                            <CardHeader
                                style={{
                                    backgroundImage:
                                        "url(" +
                                        require("assets/img/darken-night-sky-full-of-stars-fantasy-animation-made-of-magical-sparkly-light-particles-flickering-on-a-purple-blue-gradient-background_bajacpz7x_thumbnail-full01.png").default +
                                        ")",
                                }}
                            >
                                <div className="card-avatar">
                                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                        <img
                                            alt="..."
                                            className="img img-raised"
                                            src={require("VirtualDynamicLanding/TeamPage/images/brandon-liu.jpeg").default}
                                        />
                                    </a>
                                </div>
                            </CardHeader>
                            <CardBody>
                                <CardTitle tag="h3">Brandon Liu</CardTitle>
                                <h6 className="category text-primary">Co-founder & Game Developer</h6>
                            </CardBody>
                            <CardFooter>
                                <div className="d-inline float-right">
                                    <Button
                                        className="btn-icon btn-round"
                                        color="twitter"
                                        href="https://twitter.com/brandon_liu_bc"
                                        target="_blank"
                                    >
                                        <i className="fab fa-twitter" />
                                    </Button>
                                    <Button
                                        className="btn-icon btn-round ml-1"
                                        color="linkedin"
                                        href="https://www.linkedin.com/in/brandon-liu-33b45585/"
                                        target="_blank"
                                    >
                                        <i className="fab fa-linkedin" />
                                    </Button>
                                    <Button
                                        className="btn-icon btn-round ml-1"
                                        color="discord"
                                        href="https://discord.gg/6nPBkTxcGU"
                                        target="_blank"
                                    >
                                        <i className="fab fa-discord" />
                                    </Button>
                                </div>
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col className="ml-auto mr-auto" lg="4" md="6">
                        <Card className="card-profile profile-bg" style={{height:"400px"}}>
                            <CardHeader
                                style={{
                                    backgroundImage:
                                        "url(" +
                                        require("assets/img/darken-night-sky-full-of-stars-fantasy-animation-made-of-magical-sparkly-light-particles-flickering-on-a-purple-blue-gradient-background_bajacpz7x_thumbnail-full01.png").default +
                                        ")",
                                }}
                            >
                                <div className="card-avatar">
                                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                        <img
                                            alt="..."
                                            className="img img-raised"
                                            src={require("VirtualDynamicLanding/TeamPage/images/vincent-li.jpeg").default}
                                        />
                                    </a>
                                </div>
                            </CardHeader>
                            <CardBody>
                                <CardTitle tag="h3">Vincent Li</CardTitle>
                                <h6 className="category text-primary">Product Advisor & Community Contributor</h6>
                            </CardBody>
                            <CardFooter>
                                <div className="d-inline float-right">
                                    <Button
                                        className="btn-icon btn-round"
                                        color="twitter"
                                        href="https://twitter.com/vincent8540"
                                        target="_blank"
                                    >
                                        <i className="fab fa-twitter" />
                                    </Button>
                                    <Button
                                        className="btn-icon btn-round ml-1"
                                        color="discord"
                                        href="https://discord.gg/6nPBkTxcGU"
                                        target="_blank"
                                    >
                                        <i className="fab fa-discord" />
                                    </Button>
                                </div>
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col className="ml-auto mr-auto" lg="4" md="6">
                        <Card className="card-profile profile-bg" style={{height:"400px"}}>
                            <CardHeader
                                style={{
                                    backgroundImage:
                                        "url(" +
                                        require("assets/img/darken-night-sky-full-of-stars-fantasy-animation-made-of-magical-sparkly-light-particles-flickering-on-a-purple-blue-gradient-background_bajacpz7x_thumbnail-full01.png").default +
                                        ")",
                                }}
                            >
                                <div className="card-avatar">
                                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                        <img
                                            alt="..."
                                            className="img img-raised"
                                            src={require("VirtualDynamicLanding/TeamPage/images/wade-kuo.jpeg").default}
                                        />
                                    </a>
                                </div>
                            </CardHeader>
                            <CardBody>
                                <CardTitle tag="h3">Wade Kuo</CardTitle>
                                <h6 className="category text-primary">Marketing Advisor & Developer</h6>
                            </CardBody>
                            <CardFooter>
                                <div className="d-inline float-right">
                                    <Button
                                        className="btn-icon btn-round ml-1"
                                        color="linkedin"
                                        href="https://www.linkedin.com/in/wadekuo/"
                                        target="_blank"
                                    >
                                        <i className="fab fa-linkedin" />
                                    </Button>
                                    <Button
                                        className="btn-icon btn-round ml-1"
                                        color="discord"
                                        href="https://discord.gg/6nPBkTxcGU"
                                        target="_blank"
                                    >
                                        <i className="fab fa-discord" />
                                    </Button>
                                </div>
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
        <br></br></div>
        <LandingPageFooter />
        </>
    )
}
export default TeamPageContent;