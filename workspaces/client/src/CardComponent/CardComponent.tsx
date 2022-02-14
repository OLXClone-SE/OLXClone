import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export function CardComponent() {
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
                    Product
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Awesome Fantastic Mind Blowing Product
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">View Details</Button>
            </CardActions>
        </Card>
    );
}
