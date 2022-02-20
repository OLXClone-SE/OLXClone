import React from "react";
import { NavBarComponent } from "../NavBarComponent/NavBarComponent";
import {
  Button,
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Row,
} from "react-bootstrap";
import { SearchComponent } from "../SearchComponent/SearchComponent";
import { CardComponent } from "../CardComponent/CardComponent";

export function HomepageComponent() {
  return (
    <React.Fragment>
      <style type="text/css">
        {`
    .cards-view {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        margin-top: 30px;
        flex-flow: row wrap;
    }
    `}
      </style>
      <NavBarComponent />
      <Container>
        <SearchComponent />
      </Container>
      <Container className="cards-view">
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </Container>
    </React.Fragment>
  );
}

export default HomepageComponent;
