import React from "react";
import { NavBarComponent } from "../NavBarComponent/NavBarComponent";
import {
  Container,
} from "react-bootstrap";
import { SearchComponent } from "../SearchComponent/SearchComponent";
import { CardComponent } from "../CardComponent/CardComponent";
import { Copyright } from "../CopyrightComponent/CopyrightComponent";
import { useAppSelector } from "../Store/hooks";
import { RootState } from "../Store/store";
import { Navigate } from "react-router-dom";
import LoaderComponent from "../LoaderComponent/LoaderComponent";

export function HomepageComponent() {

  const { approved, pending } = useAppSelector((root: RootState) => root.LoginSlice);
  console.log("pebdinbg ", pending)
  return (
    approved ?
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
      : <>{pending ? <LoaderComponent /> : <><Navigate replace to="/" /></>}</>
  );
}

export default HomepageComponent;
