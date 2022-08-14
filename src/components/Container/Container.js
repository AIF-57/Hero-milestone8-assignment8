import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import SuggestCard from '../SuggestCard/SuggestCard';
import Wishlist from '../Wishlist/Wishlist';
import './Container.css'

const Container = () => {
    const [cards,setCards] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[]);

    const [selectedCard,setSelectedCard] = useState([]);
    const selectCard = (card) => {
        let newSelectedCard = [];
        const exist = selectedCard.find(item => item.id === card.id);
        if(exist){
            alert('Already selected!');
        }else if(selectedCard.length < 4){
            newSelectedCard = [...selectedCard,card];
            setSelectedCard(newSelectedCard)
        }else{
            alert('You are selected the maximum number of cards!')
        }
    };


    const [randomCard,setRandomCard] = useState([]);
    
    const randomSelection = (cards) => {
        let newRandomSelect;
        let randomIndex = Math.floor(Math.random()*cards.length);
        let randomSelect = cards[randomIndex];
        if(randomSelect === undefined){
            alert('Please Select Item !')
        }else{
            newRandomSelect = [...randomCard,randomSelect];
            setRandomCard(newRandomSelect)
        };
    };



    return (
        <div>
            <div className="suggestCard">
                <SuggestCard
                randomCard={randomCard}
                >
                </SuggestCard>
            </div>

            <div className='container'>
                <div className="cards">
                {
                    cards.map(card => 
                                <Cards key={card.id}
                                    card={card}
                                    selectCard={selectCard}>
                                </Cards>
                        )
                }
                </div>
                <div className="wishlist">
                    <Wishlist
                    selectedCard={selectedCard}
                    randomSelection={randomSelection}
                    ></Wishlist>
                </div>
            </div>
        </div>
        
    );
};

export default Container;