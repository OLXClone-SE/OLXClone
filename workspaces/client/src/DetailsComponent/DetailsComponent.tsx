import React from "react";
import { Copyright } from "../CopyrightComponent/CopyrightComponent";
import Typography from '@mui/material/Typography';

export function DetailsComponent(props: { data: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) {

    return (
        <React.Fragment>
            <img 
            src="../images/product.jpg"
            alt="product"
            width="193" height="130"/>
            <p>{props.data} </p>
            <Typography gutterBottom variant="h5" component="div">
                Product Details Here
            </Typography>
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </React.Fragment>
        
    );
}
export default DetailsComponent;