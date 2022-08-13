import React from 'react';
import { useState } from 'react';
import WishListItem from '../WishListItem/WishListItem';
import './Wishlist.css'
import { faExclamationCircle , faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Wishlist = ({selectedItem}) => {


    const randomSelection = (cards) => {
        const randomIndex = Math.floor(Math.random()*cards.length);
        const randomSelect = cards[randomIndex].img;
        const randomName = cards[randomIndex].name;
        document.write(`<img src=${randomSelect} alt="" width="300"/>
                        <h3>${randomName}</h3>
        `)
    }
    // console.log(selectedItem)
    return (
        <div className='wishList'>
            <h3>Wishlist</h3>
            {
                selectedItem.map(card =>
                    <WishListItem
                    key={card.id}
                    cardDetails={card}
                    ></WishListItem>)
            }
            
            
            <button className='confirmBtn' onClick={()=> randomSelection(selectedItem)}>Confirm Design <FontAwesomeIcon icon={faExclamationCircle}></FontAwesomeIcon></button>
        </div>
        
    );
};

export default Wishlist;