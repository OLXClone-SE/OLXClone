import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { categories } from "../Utils/CategoriesList";

export function NavBarComponent() {

    const navigate = useNavigate();
    const logout = () => {
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        navigate("/");
    }
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
                            {categories().map(category => <NavDropdown.Item href="#action/3.1">{category}</NavDropdown.Item>)}
                        </NavDropdown>
                        <Nav.Link className="categories" onClick={() => navigate("/sell")}>Sell</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Nav className="justify-content-end" activeKey="/home">
                    <Nav.Item>
                        <NavDropdown title="Profile" id="basic-nav-dropdown" className="justify-content-end">
                            <NavDropdown.Item onClick={() => navigate("/profile")}>Edit Profile</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => logout()}>Logout</NavDropdown.Item>                        </NavDropdown>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    </>
}