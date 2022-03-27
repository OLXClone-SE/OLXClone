/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect, useState } from "react";
import { NavBarComponent } from "../NavBarComponent/NavBarComponent";
import { Container } from "react-bootstrap";
import { CardComponent } from "../CardComponent/CardComponent";
import { Copyright } from "../CopyrightComponent/CopyrightComponent";
import { useAppSelector } from "../Store/hooks";
import { RootState } from "../Store/store";
import { useDispatch } from "react-redux";
import { fetchUserProfile, saveUserProfile } from "../ReduxActions/UserProfileActions";
import { updateProfileDetails } from "../ReduxSlices/UserProfileSlice";
import { UserProfile } from "../Types/user";


export function ProfileComponent() {

  const { fname, lname, mailid, phone } = useAppSelector((state: RootState) => state.UserProfileSlice)
  const { loginData } = useAppSelector((root: RootState) => root.LoginSlice);
  const [profile, setProfile] = useState<UserProfile>({ fname: "", lname: "", phone: "", mailid: "" });
  const { products } = useAppSelector((root: RootState) => root.ProductSlice)
  const dispatch = useDispatch()

  useEffect(() => {
    if (mailid === "")
      dispatch(fetchUserProfile({ mailid: loginData.mailid }))
  })

  useEffect(() => {
    setProfile({ fname, lname, mailid, phone })
  }, [fname, lname, mailid, phone])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const userProfile: UserProfile = {
      mailid: event.target.name === "mailid" ? event.target.value : profile.mailid,
      phone: event.target.name === "phone" ? event.target.value : profile.phone,
      lname: event.target.name === "lname" ? event.target.value : profile.lname,
      fname: event.target.name === "fname" ? event.target.value : profile.fname,
    }
    dispatch(updateProfileDetails({ userProfile }))
  }

  const handleSubmit = () => {
    dispatch(saveUserProfile({ ...profile }))
  }

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
      <form action="">
        <div className="container rounded bg-white mt-5 mb-5">
          <div className="row">
            <div className="col-md-3 border-right">
              <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                <img
                  className=" mt-7"
                  width="150px"
                  src={require("../images/profile.png")}
                />
                <span className="font-weight-bold">{profile?.fname + " " + profile?.lname}</span>
                <span className="text-black-50">{mailid}</span>
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
                    <input type="text" className="form-control" value={profile?.fname} name="fname" onChange={handleChange} placeholder="Test first Name" />
                  </div>
                  <div className="col-md-6">
                    <label className="labels">Last Name</label>
                    <input type="text" className="form-control" value={profile?.lname} name="lname" onChange={handleChange} placeholder="Test Last Name" />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12">
                    <label className="labels">Phone Number</label>
                    <input type="text" className="form-control" value={profile?.phone} name="phone" onChange={handleChange} placeholder="9999999999" />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12">
                    <label className="labels">Email ID</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="testUser@mail.com"
                      value={profile?.mailid}
                      disabled
                    />
                  </div>
                </div>
                <div className="mt-5 text-center">
                  <button
                    className="btn btn-primary profile-button"
                    type="button"
                    onClick={handleSubmit}
                  >
                    Save Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <Container>
        {" "}
        <div>
          <h3>Your Products</h3>
        </div>
      </Container>
      <Container title="wekjnfkjgbk" className="cards-view">
        {products?.filter(product => product?.mailid === mailid).map(product => <CardComponent
          path={product?.path}
          name={product?.productname}
          desc={product?.description}
          price={product?.price}
        />)}
      </Container>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </React.Fragment>
  );
}

export default ProfileComponent;
