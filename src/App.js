// src/App.js
import "@fortawesome/fontawesome-free/css/all.min.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DishList from "./components/DishList";
import IngredientModal from "./components/IngredientModal";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<DishList />} />
          <Route path="/ingredients/:dishId" element={<IngredientModal />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
