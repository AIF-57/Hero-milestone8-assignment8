import React from 'react';
import { useState } from 'react';
import WishListItem from '../WishListItem/WishListItem';
import './Wishlist.css'

const Wishlist = ({selectedItem}) => {


    const randomSelection = (cards) => {
        const randomIndex = Math.floor(Math.random()*cards.length);
        const randomSelect = cards[randomIndex].img;
        document.write(`<img src=${randomSelect} alt="" width="300"/>`)
    }
    // console.log(selectedItem)
    return (
        <div className='wishList'>
            <h3>Wishlist</h3>
            <p>Cards: {selectedItem.length}</p>
            {
                selectedItem.map(card =>
                    <WishListItem
                    key={card.id}
                    cardDetails={card}
                    ></WishListItem>)
            }
            
            
            <button onClick={()=> randomSelection(selectedItem)}>Confirm Design</button>
        </div>
        
    );
};

export default Wishlist;