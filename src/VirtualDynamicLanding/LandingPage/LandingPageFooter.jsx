import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import {
    Button,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col,
    UncontrolledTooltip,
} from "reactstrap";

export default function LandingPageFooter() {
    return (
        <>
            <footer className="footer" style={{ borderColor: "#F77E21" }}>
                <Container>
                    <Row className="justify-content-center">
                        <div className="btn-wrapper profile text-left">
                            <Button
                                className="btn-icon btn-neutral btn-round btn-simple"
                                color="default"
                                href="https://twitter.com/creativetim"
                                id="tooltip39661217"
                                target="_blank"
                            >
                                <i className="fab fa-twitter" />
                            </Button>
                            <UncontrolledTooltip delay={0} target="tooltip39661217">
                                Follow us
                            </UncontrolledTooltip>
                            <Button
                                className="btn-icon btn-neutral btn-round btn-simple ml-1"
                                color="default"
                                href="https://www.facebook.com/creativetim"
                                id="tooltip206037619"
                                target="_blank"
                            >
                                <i className="fab fa-facebook-square" />
                            </Button>
                            <UncontrolledTooltip delay={0} target="tooltip206037619">
                                Like us
                            </UncontrolledTooltip>
                            <Button
                                className="btn-icon btn-neutral btn-round btn-simple ml-1"
                                color="default"
                                href="https://dribbble.com/creativetim"
                                id="tooltip750293512"
                                target="_blank"
                            >
                                <i className="fab fa-dribbble" />
                            </Button>
                            <UncontrolledTooltip delay={0} target="tooltip750293512">
                                Follow us
                            </UncontrolledTooltip>
                        </div>
                    </Row>
                </Container>
            </footer>
        </>
    );
}
