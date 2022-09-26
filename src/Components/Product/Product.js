import React from 'react';
import './Product.css'

const Product = (props) => {
    const {handle,product} = props;
    const {name, img, seller,price,ratings} = product
    return (
        <div className='product'>
            <div className='img'>
            <img src={img} alt="" />
            </div>
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p className='product-name'>Price :{price}</p>
                <p className='product-name'>Seller :{seller}</p>
                <p className='product-name'> Ratings :{ratings}</p>
            </div>
            <button onClick={()=>handle(product)} className='btn'><p>Add to cart</p></button>
        </div>
    );
};

export default Product;