import React, { useEffect, useState } from "react";
import { NavBarComponent } from "../NavBarComponent/NavBarComponent";
import { Container } from "react-bootstrap";
import { Copyright } from "../CopyrightComponent/CopyrightComponent";
import { useAppSelector } from "../Store/hooks";
import { RootState } from "../Store/store";
import { useDispatch } from "react-redux";
import { getProducts } from "../ReduxActions/ProductActions";
import Typography from '@mui/material/Typography';

export function DetailsComponent() {
    const { products } = useAppSelector((root: RootState) => root.ProductSlice)    
    const dispatch = useDispatch()
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