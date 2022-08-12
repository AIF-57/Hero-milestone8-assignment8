import React from 'react';
import './WishListItem.css'

const WishListItem = ({cardDetails}) => {
    return (
        <div className='itemDetails'>
            <img src={cardDetails.img} alt="" width="80"/>
            <p>{cardDetails.name}</p>
        </div>
    );
};

export default WishListItem;