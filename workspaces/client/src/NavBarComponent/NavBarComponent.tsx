import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export function NavBarComponent() {

    const navigate = useNavigate();
    return <>
        <style type="text/css">
            {`
    .color-nav {
        background-color : rgba(47, 45, 45, 0.2);;
        color : white;
    }
    .categories {
        margin-left : 50px;
    }
    `}
        </style>
        <Navbar className="color-nav" expand="lg">
            <Container className="justify-content-end">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-end" activeKey="/home">
                        <Nav.Link onClick={() => navigate("/home")}>Home</Nav.Link>
                        <NavDropdown title="Categories" className="categories">
                            <NavDropdown.Item href="#action/3.1">Category 1</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Category 2</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Category 3</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Category 4</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Category 5</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Category 6</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <Nav className="justify-content-end" activeKey="/home">
                    <Nav.Item>
                        <NavDropdown title="Profile" id="basic-nav-dropdown" className="justify-content-end">
                            <NavDropdown.Item onClick={() => navigate("/profile")}>Edit Profile</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate("/home")}>Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    </>
}