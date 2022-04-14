import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Products.css'

const Products = ({product, handleAddToCart}) => {
    // const {product, handleAddToCart} = props;
    
    const {name, img, seller, ratings, price} = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h5 className='product-name'>{name}</h5>
            <p className='product-price'>Price: ${price}</p>
            <p> Brand: {seller}</p>
            <small>Ratings: {ratings}</small>
            
            <button onClick={ () => handleAddToCart(product)} className='btn-cart'> <p className='cart-name'>Add To Cart</p>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Products;