import React from 'react';
import {Grid} from '@material-ui/core';
import Product from './Product/Product';
import shoe from './Product/images/Nikeshoes.jpg';
import headphone from './Product/images/headphones.jpg';
const products = [
    {id:1, name: "shoes", description: "Lifestyle shoes", price: "$70", image: shoe},
    {id:2, name: "headphones", description: "Headphones", price: "$10" , image: headphone},
];
const Products = () => {
    return(
            <main>
            <Grid container justifyContent = "center" spacing = {4}>
                {products.map((product) => (
                    <Grid item key = {product.id} xs = {12} sm={6} md={4} lg={3}>
                            <Product product = {product}/>
                        </Grid>
                ))}
            </Grid>
        </main>
    );
 

}
export default Products;