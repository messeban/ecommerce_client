import React from 'react'
import './Product.css';
function Product(props) {
    return (
        <div className='product'>
            <img src="../../images/hotel-wallpaper.png" alt="" />
            <h1>{props.price}</h1>
            <h1>{props.description}</h1>
        </div>
    )
}

export default Product
