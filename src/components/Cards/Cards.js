import './Cards.css'

const Cards = ({card,selectCard}) => {
    const {name,img} = card;


    return (
        <div>
            <img src={img} alt="" width="200"/>
            <p>{name}</p>
            <button onClick={()=>selectCard(card)}>Select</button>
        </div>
    );
};

export default Cards;