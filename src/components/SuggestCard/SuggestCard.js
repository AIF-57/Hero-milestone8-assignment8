import React from 'react';
import './SuggestCard.css'

const SuggestCard = ({randomCard}) => {

    let imgSrc;
    if(randomCard){
        for(const item of randomCard){
            imgSrc = item.img;
        }    
    }
    return (
        <div className='showCard'>
            <img src={imgSrc} alt="" width="300"/>
        </div>
    );
};

export default SuggestCard;