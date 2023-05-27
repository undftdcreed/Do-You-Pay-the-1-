import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"

const CardShow = ({ match }) => {
  const { id } = useParams();
  const [card, setCard] = useState(null);

  useEffect(() => {
    const fetchCard = async () => {
      try {
        const response = await fetch(`https://api.scryfall.com/cards/${id}`);
        const data = await response.json();
        setCard(data);
      } catch (error) {
        console.error('Error fetching card:', error);
      }
    };
    fetchCard();
  }, [id]);
  if (!card) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>{card.name}</h1>
      <img src={card.image_uris.normal} alt={card.name} />
      <p>{card.oracle_text}</p>
      
    </div>
  );
};
export default CardShow;