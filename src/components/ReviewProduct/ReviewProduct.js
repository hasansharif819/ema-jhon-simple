import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewProduct.css';

const ReviewProduct = (props) => {
    const {product, handleRemove} = props;
    const {name,img, price, shipping, quantity} = product;
    return (
        <div className='cart-box'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="cart-box-details">
            <div className='cart-box-name'>
            <p className='name-font' title={name}>
                { name.length > 20? name.slice(0,20) + '...': name}
                </p>
            <p>Price: <span className='price-color'>${price}</span></p>
            <p><small>Quantity:{quantity} <br/> Shipping:${shipping}</small></p>
            </div>
            <div className="cart-box-delete">
                <button className='delete-icon' onClick={() => handleRemove(product)}>
                    <FontAwesomeIcon className='font-icon' icon={faTrashAlt}></FontAwesomeIcon>
                </button>
            </div>
            </div>
        </div>
    );
};

export default ReviewProduct;