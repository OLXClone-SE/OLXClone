import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export function CardComponent(props: any) {
    const navigate = useNavigate();
    const [state, setstate] = useState({data:""})
  
    const changeState = () => {  
        setstate({data:`state/props of parent component 
        is send by onClick event to another component`}); 
        navigate('/details');
       }; 
    return (
        <Card sx={{ maxWidth: 345, marginRight: "20px", marginTop: "20px" }}>
            <CardMedia
                component="img"
                height="160"
                image={require("../images/product.jpg")}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.desc === null ? "" : props?.desc?.substring(0, 10) + "...."}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.price}
                </Typography>
            </CardContent>
            <CardActions>
                <Button 
                size="small"
                onClick={changeState}>
                    View Details
                </Button>
            </CardActions>
        </Card>
    );
}
