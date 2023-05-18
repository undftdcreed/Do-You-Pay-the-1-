import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const CardIndex = () => {
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCard, setSelectedCard] = useState(null);
  const pageSize = 20; // Number of cards to fetch per page

  
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch(`https://api.scryfall.com/cards/search?q=${searchQuery}&page=${page}&page_size=${pageSize}`);
        const data = await response.json();
        setCards(data.data || []);
        setHasMore(data.has_more);
      } catch (error) {
        console.error('Error fetching cards:', error);
      }
    };
    fetchCards();
  }, [page, searchQuery]);
  // const handleNextPage = () => {
  //   if (hasMore) {
  //     setPage((prevPage) => prevPage + 1);
  //   }
  // };
  // const handlePrevPage = () => {
  //   if (page > 1) {
  //     setPage((prevPage) => prevPage - 1);
  //   }
  // };
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setPage(1); // Reset page when submitting a new search query
  };
  const handleCardClick = (card) => {
    setSelectedCard(card);
  };
  const closeModal = () => {
    setSelectedCard(null);
  };
  return (
    <div>
      <h1>Card Index</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchQuery} onChange={handleSearch} placeholder="Search cards..." />
        <button type="submit">Search</button>
      </form>
      
      {/* <div>
        <button onClick={handlePrevPage} disabled={page === 1}>
          Previous Page
        </button>
        <button onClick={handleNextPage} disabled={!hasMore}>
          Next Page
        </button>
      </div> */}
      
        {cards.map((card) => (
          <li key={card.id} onClick={() => handleCardClick(card)}>
            <Link to={`/cards/${card.id}`}>{card.name}</Link>
          </li>
        ))}
     {selectedCard && (
        <div className="modal">
          <div className="modal-content">
            <li>
            <h2>{selectedCard.name}</h2>
            <img src={selectedCard.image_uris.normal} alt={selectedCard.name} />
            <p>{selectedCard.oracle_text}</p>
            <button onClick={closeModal}>Close</button>
            </li>
          </div>
      
        </div>
      )}
    </div>
  );
};
export default CardIndex;