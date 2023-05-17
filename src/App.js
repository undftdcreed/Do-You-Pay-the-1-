import "./index.css"
import './App.css';
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CardDetails from "./pages/CardDetails";
import CardList from "./pages/CardIndex";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

  const [cards, setCards] = useState([]);

    const fetchData = async () => {
        const URL = "https://project-3-backend-rzmh.onrender.com/cards"
        try {
            const response = await fetch(URL);
            const cardData = await response.json();
            setCards(cardData)
            console.log(cardData)
        } catch (error) {
            console.error(error);
        }
    }

useEffect(() => {
  fetchData()
}, [])



  return (
    <div className="App">
     <Header />
     <main>
     <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="/cards" element= { <CardList cards={cards} setCards={setCards}/>} />
      <Route path="/cards/:id" element= { <CardDetails />} />
     </Routes>
     </main>
     <Footer />
    </div>
  );
}

export default App;
