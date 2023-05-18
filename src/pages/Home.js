import React, { useEffect, useState } from 'react';

const CardIndex = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
      const fetchCards = async () => {
        try {
          const response = await fetch('https://api.scryfall.com/cards/search?q=is%3Abooster+is%3Afoil');
          const data = await response.json();
          const sortedCards = data.data.sort((a, b) => {
            const priceA = parseFloat(a.prices.usd || 0);
            const priceB = parseFloat(b.prices.usd || 0);
            return priceB - priceA;
          });
          setCards(sortedCards);
        } catch (error) {
          console.error('Error fetching cards:', error);
        }
      };
      fetchCards();
    }, []);
    return (
      <div>
        <h1>Highly Priced Cards</h1>
        <ul>
          {cards.map((card) => (
            <li key={card.id}>
              {card.image_uris && card.image_uris.normal && (
                <img src={card.image_uris.normal} alt={card.name} />
              )}
              <h3>{card.name}</h3>
              <p>Price: {card.prices.usd} USD</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  export default CardIndex;