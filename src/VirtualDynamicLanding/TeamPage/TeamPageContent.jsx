import React from "react";
import {
    Badge,
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    ListGroupItem,
    ListGroup,
    Table,
    Container,
    Row,
    Col,
} from "reactstrap";

const TeamPageContent = () => {
    return (
        <div className="cards">
            <Container>
                <div className="title">
                    <h3>
                        <small>Team Members</small>
                    </h3>
                </div>
                <Row>
                    <Col className="ml-auto mr-auto" lg="4" md="6">
                        <Card className="card-profile profile-bg">
                            <CardHeader
                                style={{
                                    backgroundImage:
                                        "url(" +
                                        require("assets/img/sendra-martorell.jpg").default +
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
                                <h6 className="category text-primary">Co-founder</h6>
                                <p className="card-description">
                                    Software engineer at Google, Ex-Qualcomm <br />
                                    CTO of Melon Network Inc. <br />
                                    Expert in Unity3D game development <br />
                                    University of California - San Diego (UCSD) Alumni
                                </p>
                            </CardBody>
                            <CardFooter>
                                <div className="follow float-left">
                                    <Button
                                        className="btn-simple"
                                        color="primary"
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                        size="sm"
                                    >
                                        <i className="tim-icons icon-check-2 mr-1" />
                                        Following
                                    </Button>
                                </div>
                                <div className="d-inline float-right">
                                    <Button
                                        className="btn-icon btn-round"
                                        color="twitter"
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <i className="fab fa-twitter" />
                                    </Button>
                                    <Button
                                        className="btn-icon btn-round ml-1"
                                        color="linkedin"
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <i className="fab fa-linkedin" />
                                    </Button>
                                    <Button
                                        className="btn-icon btn-round ml-1"
                                        color="discord"
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <i className="fab fa-discord" />
                                    </Button>
                                </div>
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col className="ml-auto mr-auto" lg="4" md="6">
                        <Card className="card-profile profile-bg">
                            <CardHeader
                                style={{
                                    backgroundImage:
                                        "url(" +
                                        require("assets/img/sendra-martorell.jpg").default +
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
                                <h6 className="category text-primary">Co-founder</h6>
                                <p className="card-description">
                                    BCG Consultant focusing on TMT industries and consumer insights <br />
                                    Serial-entrepreneur (past ventures include AI recommendation algorithm for beauty products and NFT + Lab grown diamonds) <br />
                                    Expert in Business Development & Alliance management
                                </p>
                            </CardBody>
                            <CardFooter>
                                <div className="follow float-left">
                                    <Button
                                        className="btn-simple"
                                        color="primary"
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                        size="sm"
                                    >
                                        <i className="tim-icons icon-check-2 mr-1" />
                                        Following
                                    </Button>
                                </div>
                                <div className="d-inline float-right">
                                    <Button
                                        className="btn-icon btn-round"
                                        color="twitter"
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <i className="fab fa-twitter" />
                                    </Button>
                                    <Button
                                        className="btn-icon btn-round ml-1"
                                        color="linkedin"
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <i className="fab fa-linkedin" />
                                    </Button>
                                    <Button
                                        className="btn-icon btn-round ml-1"
                                        color="discord"
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <i className="fab fa-discord" />
                                    </Button>
                                </div>
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col className="ml-auto mr-auto" lg="4" md="6">
                        <Card className="card-profile profile-bg">
                            <CardHeader
                                style={{
                                    backgroundImage:
                                        "url(" +
                                        require("assets/img/sendra-martorell.jpg").default +
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
                                <h6 className="category text-primary">Co-founder</h6>
                                <p className="card-description">
                                    Software engineer at Talium <br />
                                    Expertise in Smart Contract and P2E Game Design <br />
                                    OG NFTer and Enthusiastic Gamer <br />
                                    SDSU Alumni
                                </p>
                            </CardBody>
                            <CardFooter>
                                <div className="follow float-left">
                                    <Button
                                        className="btn-simple"
                                        color="primary"
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                        size="sm"
                                    >
                                        <i className="tim-icons icon-check-2 mr-1" />
                                        Following
                                    </Button>
                                </div>
                                <div className="d-inline float-right">
                                    <Button
                                        className="btn-icon btn-round"
                                        color="twitter"
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <i className="fab fa-twitter" />
                                    </Button>
                                    <Button
                                        className="btn-icon btn-round ml-1"
                                        color="linkedin"
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <i className="fab fa-linkedin" />
                                    </Button>
                                    <Button
                                        className="btn-icon btn-round ml-1"
                                        color="discord"
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
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
                        <Card className="card-profile profile-bg">
                            <CardHeader
                                style={{
                                    backgroundImage:
                                        "url(" +
                                        require("assets/img/sendra-martorell.jpg").default +
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
                                <h6 className="category text-primary">Co-founder</h6>
                                <p className="card-description">
                                    Software engineer at Amazon, Ex - Oracle <br />
                                    Expert in AI, Distribute System. <br />
                                    Open Metaverse Supporters <br />
                                    Stanford, UCSD Alumni
                                </p>
                            </CardBody>
                            <CardFooter>
                                <div className="follow float-left">
                                    <Button
                                        className="btn-simple"
                                        color="primary"
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                        size="sm"
                                    >
                                        <i className="tim-icons icon-check-2 mr-1" />
                                        Following
                                    </Button>
                                </div>
                                <div className="d-inline float-right">
                                    <Button
                                        className="btn-icon btn-round"
                                        color="twitter"
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <i className="fab fa-twitter" />
                                    </Button>
                                    <Button
                                        className="btn-icon btn-round ml-1"
                                        color="linkedin"
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <i className="fab fa-linkedin" />
                                    </Button>
                                    <Button
                                        className="btn-icon btn-round ml-1"
                                        color="discord"
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <i className="fab fa-discord" />
                                    </Button>
                                </div>
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col className="ml-auto mr-auto" lg="4" md="6">
                        <Card className="card-profile profile-bg">
                            <CardHeader
                                style={{
                                    backgroundImage:
                                        "url(" +
                                        require("assets/img/sendra-martorell.jpg").default +
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
                                <h6 className="category text-primary">Co-founder</h6>
                                <p className="card-description">
                                    Software engineer at ServiceNow, Ex-WalmartLabs, TouchPal <br />
                                    Expert in Crypto Marketing, Community Builder, Full-stack and Unity3D game development <br />
                                    UCSD Alumni
                                </p>
                            </CardBody>
                            <CardFooter>
                                <div className="follow float-left">
                                    <Button
                                        className="btn-simple"
                                        color="primary"
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                        size="sm"
                                    >
                                        <i className="tim-icons icon-check-2 mr-1" />
                                        Following
                                    </Button>
                                </div>
                                <div className="d-inline float-right">
                                    <Button
                                        className="btn-icon btn-round"
                                        color="twitter"
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <i className="fab fa-twitter" />
                                    </Button>
                                    <Button
                                        className="btn-icon btn-round ml-1"
                                        color="linkedin"
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <i className="fab fa-linkedin" />
                                    </Button>
                                    <Button
                                        className="btn-icon btn-round ml-1"
                                        color="discord"
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <i className="fab fa-discord" />
                                    </Button>
                                </div>
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col className="ml-auto mr-auto" lg="4" md="6">
                        <Card className="card-profile profile-bg">
                            <CardHeader
                                style={{
                                    backgroundImage:
                                        "url(" +
                                        require("assets/img/sendra-martorell.jpg").default +
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
                                <h6 className="category text-primary">Co-founder</h6>
                                <p className="card-description float-left">
                                    Software engineer at Adobe <br />
                                    Crypto OG and Founder of Crypto Mining  Company jcw.xyz <br />
                                    NorthEastern, UCSD Alumni
                                </p>
                            </CardBody>
                            <CardFooter>
                                <div className="follow float-left">
                                    <Button
                                        className="btn-simple"
                                        color="primary"
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                        size="sm"
                                    >
                                        <i className="tim-icons icon-check-2 mr-1" />
                                        Following
                                    </Button>
                                </div>
                                <div className="d-inline float-right">
                                    <Button
                                        className="btn-icon btn-round"
                                        color="twitter"
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <i className="fab fa-twitter" />
                                    </Button>
                                    <Button
                                        className="btn-icon btn-round ml-1"
                                        color="linkedin"
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <i className="fab fa-linkedin" />
                                    </Button>
                                    <Button
                                        className="btn-icon btn-round ml-1"
                                        color="discord"
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
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
    )
}
export default TeamPageContent;