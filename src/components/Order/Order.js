import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart/useCart';
import useProducts from '../../hooks/useProducts/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewProduct from '../ReviewProduct/ReviewProduct';
import './Order.css';

const Order = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const navigate = useNavigate();
    const handleRemove = product => {
        const rest = cart.filter(pd => pd.id !== product.id);
        setCart(rest);
        removeFromDb(product.id);
    }
    return (
        <div>
            <div className='shop-container'>
                <div className="product-cart-container">
                    {
                        cart.map(product => <ReviewProduct
                            key={product.id}
                            product={product}
                            handleRemove={handleRemove}
                        ></ReviewProduct>)
                    }
                </div>
                <div className="cart-cart-container">
                    <Cart cart={cart}>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Order;