import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Cards.css'

const Cards = ({card,selectCard}) => {
    const {name,img} = card;


    return (
        <div className='card'>
            <img src={img} alt="" width="200"/>
            <p>{name}</p>
            <button className='cardBtn' onClick={()=>selectCard(card)}><FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon> Select</button>
        </div>
    );
};

export default Cards;