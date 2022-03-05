import React from "react";
import { NavBarComponent } from "../NavBarComponent/NavBarComponent";
import {
  Container,
} from "react-bootstrap";
import { SearchComponent } from "../SearchComponent/SearchComponent";
import { CardComponent } from "../CardComponent/CardComponent";
import { Copyright } from "../CopyrightComponent/CopyrightComponent";

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
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </React.Fragment>
  );
}

export default HomepageComponent;
