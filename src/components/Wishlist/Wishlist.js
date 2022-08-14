import React, { useState } from 'react';
import WishListItem from '../WishListItem/WishListItem';
import './Wishlist.css'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




const Wishlist = ({selectedCard,randomSelection}) => {
    
    return (
        <div className='wishList'>
            <h3>Wishlist</h3>
            <p>cards: {selectedCard.length}</p>
            {
                selectedCard.map(card => <WishListItem
                        key={card.id}
                        cardDetails={card}>
                    </WishListItem>)
            }
           
            
            
            <button className='confirmBtn' onClick={()=> randomSelection(selectedCard)}>Suggest Card <FontAwesomeIcon icon={faExclamationCircle}></FontAwesomeIcon></button>
        </div>
        
    );
};

export default Wishlist;