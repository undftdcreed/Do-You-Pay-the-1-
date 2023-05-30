import React, { useState } from 'react';
import CardIndex from './CardIndex';


const CardDeckBuilder = () => {
  const [deck, setDeck] = useState([]);
  

  
  const addCardToDeck = (card) => {
    setDeck([...deck, card]);
  };

  return (
    <div>
      <h2>Card Deck Builder</h2>
      <div>
        <h3>Deck:</h3>
        {deck.length === 0 ? (
          <p>No cards in the deck.</p>
        ) : (
          <ul>
            {deck.map((card, index) => (
              <li key={index}>{card.name}</li>
            ))}
          </ul>
        )}
      </div>
      <div>
        <CardIndex onCardSelect={addCardToDeck}/>
        
      </div>
    </div>
  );
};


export default CardDeckBuilder;