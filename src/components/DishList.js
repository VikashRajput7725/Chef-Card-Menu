// src/components/DishList.js
import React, { useState } from "react";
import DishCard from "./DishCard";
import Filters from "./Filters";
import { dishData } from "../data/mockDishes";

const DishList = () => {
  const [selectedCategory, setSelectedCategory] = useState("STARTER");
  const [searchQuery, setSearchQuery] = useState("");
  const [vegFilter, setVegFilter] = useState(false);
  const [nonVegFilter, setNonVegFilter] = useState(false);
  const [selectedDishes, setSelectedDishes] = useState({});

  const categories = [
    { id: "STARTER", name: "Starter", icon: "🥗" },
    { id: "MAIN COURSE", name: "Main Course", icon: "🍛" },
    { id: "DESSERT", name: "Dessert", icon: "🍨" },
    { id: "SIDES", name: "Sides", icon: "🍞" },
  ];

  const filteredDishes = dishData.filter((dish) => {
    const matchesCategory = dish.mealType === selectedCategory;
    const matchesSearch = dish.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesVeg = !vegFilter || dish.type === "VEG";
    const matchesNonVeg = !nonVegFilter || dish.type === "NON_VEG";
    return matchesCategory && matchesSearch && matchesVeg && matchesNonVeg;
  });

  const toggleDishSelection = (dishId) => {
    setSelectedDishes((prev) => {
      const updated = { ...prev };
      if (updated[dishId]) delete updated[dishId];
      else updated[dishId] = true;
      return updated;
    });
  };

  const getCategoryCount = (category) =>
    dishData.filter(
      (dish) => dish.mealType === category && selectedDishes[dish.id]
    ).length;

  const totalSelected = Object.keys(selectedDishes).length;

  return (
    <div className="dish-list-screen">
      <header className="app-header">
        <h1>Party Menu Selection</h1>
        <p>Choose delicious dishes for your party from our curated menu</p>
      </header>

      <Filters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        vegFilter={vegFilter}
        setVegFilter={setVegFilter}
        nonVegFilter={nonVegFilter}
        setNonVegFilter={setNonVegFilter}
      />

      <div className="category-tabs">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`category-tab ${
              selectedCategory === category.id ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(category.id)}
          >
            <span>{category.icon}</span>
            {category.name}
            <span className="count">{getCategoryCount(category.id)}</span>
          </button>
        ))}
      </div>

      <div className="dish-list">
        {filteredDishes.map((dish) => (
          <DishCard
            key={dish.id}
            dish={dish}
            isSelected={!!selectedDishes[dish.id]}
            onToggleSelection={() => toggleDishSelection(dish.id)}
          />
        ))}
      </div>

      <div className="selection-summary">
        <div className="total-selected">
          Total Selected: <span>{totalSelected}</span> dishes
        </div>
        <button className="continue-btn">
          Continue <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default DishList;
