import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import Wishlist from '../Wishlist/Wishlist';
import './Container.css'

const Container = () => {
    const [cards,setCards] = useState([]);
    const [selectedItem,setSelectedItem] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[]);


    const selectCard = (card) => {
        const newSelectedItem = [...selectedItem,card];
        setSelectedItem(newSelectedItem);
    }


    return (
        <div>
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
                        selectedItem={selectedItem}
                    ></Wishlist>
                </div>
            </div>
        </div>
        
    );
};

export default Container;