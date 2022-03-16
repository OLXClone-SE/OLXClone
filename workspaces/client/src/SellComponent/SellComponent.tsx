import React, { useEffect, useState } from "react";
import Typography from '@mui/material/Typography';
import { Copyright } from "../CopyrightComponent/CopyrightComponent";

export function SellComponent() {
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