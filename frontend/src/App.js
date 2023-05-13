import "./index.css"
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CardDetails from "./pages/CardDetails";
import CardList from "./pages/Cardlist";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
     <Header />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cards" element= {<CardList />} />
      <Route path="/cards/:id" element= {<CardDetails />} />
     </Routes>
    </div>
  );
}

export default App;
