import React, { useEffect, useState } from "react";



function CardList() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const URL = "https://api.magicthegathering.io/v1/cards"
            try {
                const response = await fetch(URL);
                const data = await response.json();
                setCards(data);
            } catch (error) {
                console.error(error);
            }
        };


        fetchData();
    }, []);

    return (
        <div>
            <h1>Card List</h1>
            <ul>
                {cards.map(card => (
                    <li key = {card.id}>
                        <h2>{card.name}</h2>
                        <p>Type: {card.type}</p>
                        <p>Mana Cost: {card.manaCost.join(', ')}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};


export default CardList;