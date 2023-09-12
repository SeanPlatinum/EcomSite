import React from 'react'
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons';
import useStyles from './Styles';

const Product = (props) => {
  const classes = useStyles();
  return (
        <Card className = {classes.root}>
            <CardMedia className = {classes.media} image ={props.product.image} title= {props.product.name}/>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant = "h5" gutterBottom>
                        {props.product.name}
                    </Typography>
                    <Typography variant = "h5">
                        {props.product.price}
                    </Typography>
                </div>
                <Typography variant = "h2" color = "textSecondary">{props.product.description}</Typography>
            </CardContent>
            <CardActions disableSpacing className = {classes.cardActions}>
                <IconButton aria-label = "add-to-cart">
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
  )
}

export default Product