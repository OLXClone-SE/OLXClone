import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Typography from '@mui/material/Typography';
import { Copyright } from "../CopyrightComponent/CopyrightComponent";
import { UserProduct } from "../Types/user";

export function SellComponent() {
    const dispatch = useDispatch()

    const initialState: UserProduct = {
        productname: "",
        category: "",
        price: -1,
        path: "",
        description: "",
        approved: false,
        phone: "",
        mailid: ""
    }
    
    return (
        <React.Fragment>
            <Typography gutterBottom variant="h5" component="div">
                Product Details Here
            </Typography>
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </React.Fragment>
    )
}

export default SellComponent;