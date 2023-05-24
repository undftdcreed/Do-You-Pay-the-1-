import React, { useState } from 'react';
import CardIndex from './Home';
const DeckCreation = () => {
  const [decks, setDecks] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null); 


  const createDeck = () => {
    // Create a new deck
    const newDeck = {
      id: Date.now(), // Generate a unique ID for the deck
      cards: [],
    };


    setDecks((prevDecks) => [...prevDecks, newDeck]);
  };


  const addToDeck = (deckId) => {
    // Find the selected deck
    const selectedDeck = decks.find((deck) => deck.id === deckId);
    if (selectedDeck && selectedCard) {
      // Add the selected card to the deck
      const updatedDeck = {
        ...selectedDeck,
        cards: [...selectedDeck.cards, selectedCard],
      };
      // Update the decks array
      setDecks((prevDecks) => {
        const updatedDecks = prevDecks.map((deck) =>
          deck.id === deckId ? updatedDeck : deck
        );
        return updatedDecks;
      });
      // Clear the selected card
      setSelectedCard(null);
    }
  };


  return (
    <div>
      <h1>Deck Creation</h1>
      <button onClick={createDeck}>Create New Deck</button>
      <div>
        <h2>Card Index</h2>
        <CardIndex selectedCard={setSelectedCard} />
      </div>
      <div>
        <h2>Selected Card</h2>
        {selectedCard && (
          <div>
            <img src={selectedCard.image_uris.normal} alt={selectedCard.name} />
            <h3>{selectedCard.name}</h3>
            {decks.map((deck) => (
              <button key={deck.id} onClick={() => addToDeck(deck.id)}>
                Add to Deck {deck.id}
              </button>
            ))}
          </div>
        )}
      </div>
      <div>
        <h2>Decks</h2>
        {decks.map((deck) => (
          <div key={deck.id}>
            <h3>Deck {deck.id}</h3>
            {deck.cards.map((card) => (
              <div key={card.id}>
                <img src={card.image_uris.normal} alt={card.name} />
                <h3>{card.name}</h3>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
export default DeckCreation;