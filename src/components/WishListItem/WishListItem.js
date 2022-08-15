import React from 'react';
import './WishListItem.css'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const WishListItem = ({cardDetails}) => {


    return (
        <div>
            <div className='itemDetails'>
                <img src={cardDetails.img} alt="" width="70"/>
                <p>{cardDetails.name}</p>
                <span className='itemBtn'><FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon></span>
                </div>
        </div>
    );
};

export default WishListItem;