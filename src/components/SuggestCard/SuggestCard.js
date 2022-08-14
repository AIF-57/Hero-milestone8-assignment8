import React from 'react';
import './SuggestCard.css'

const SuggestCard = ({randomCard}) => {

    let imgSrc;
    for(const item of randomCard){
        imgSrc = item.img;
    if(randomCard){
        }    
    }
    return (
        <div className='showCard'>
            <img src={imgSrc} alt="" width="300"/>
        </div>
    );
};

export default SuggestCard;