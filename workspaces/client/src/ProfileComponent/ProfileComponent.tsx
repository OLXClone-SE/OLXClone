/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { NavBarComponent } from "../NavBarComponent/NavBarComponent";
import { Container } from "react-bootstrap";
import { CardComponent } from "../CardComponent/CardComponent";

export function ProfileComponent() {
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

      <div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                className=" mt-7"
                width="150px"
                src={require("../images/profile.png")}
              />
              <span className="font-weight-bold">Test User</span>
              <span className="text-black-50">testUser@mail.com</span>
            </div>
          </div>
          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Profile Information</h4>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <label className="labels">First Name</label>
                  <input type="text" className="form-control" value="" placeholder="Test first Name" />
                </div>
                <div className="col-md-6">
                  <label className="labels">Last Name</label>
                  <input type="text" className="form-control" value="" placeholder="Test Last Name"/>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Phone Number</label>
                  <input type="text" className="form-control" value="" placeholder="9999999999"/>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Email ID</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="testUser@mail.com"
                    value=""
                    disabled
                  />
                </div>
              </div>
              <div className="mt-5 text-center">
                <button
                  className="btn btn-primary profile-button"
                  type="button"
                >
                  Save Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Container>
        {" "}
        <div>
          <h3>Your Products</h3>
        </div>
      </Container>
      <Container title="wekjnfkjgbk" className="cards-view">
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </Container>
    </React.Fragment>
  );
}

export default ProfileComponent;
