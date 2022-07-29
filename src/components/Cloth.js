import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons';

const Cloth = ({cloth}) => {
    const {name,img,price,ratings,category} = cloth
    return (
      <div className='product'>
      <img src={img} alt=""></img>
      <div className='product-info'>
          <p className='product-name'>{name}</p>
          <p>Price: <span className='text-purple-600 font-bold'>${price}</span></p>
          <p className='product-name'>category: {category}</p>

          <p><small>Ratings: {ratings} <FontAwesomeIcon className='text-orange-600' icon={faStar} /></small></p>
      </div>
      <button className='btn-cart'>
          <p className='btn-text'>Add to Cart</p>
          <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
  </div>
    );
};

export default Cloth;