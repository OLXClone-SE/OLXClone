import React, { useEffect, useState } from "react";
import { NavBarComponent } from "../NavBarComponent/NavBarComponent";
import { Container } from "react-bootstrap";
import { Copyright } from "../CopyrightComponent/CopyrightComponent";
import { useAppSelector } from "../Store/hooks";
import { RootState } from "../Store/store";
import { useDispatch } from "react-redux";
import { fetchUserProfile, saveUserProfile } from "../ReduxActions/UserProfileActions";
import { updateProfileDetails } from "../ReduxSlices/UserProfileSlice";
import { UserProfile } from "../Types/user";
import Typography from '@mui/material/Typography';

export function DetailsComponent() {
    return (
        <React.Fragment>
            <Typography gutterBottom variant="h5" component="div">
                Product Details Here
            </Typography>
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </React.Fragment>
        
    );
}
export default DetailsComponent;