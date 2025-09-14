// src/components/IngredientModal.js
import React from "react";
import { Link, useParams } from "react-router-dom";
import { dishData, ingredientData } from "../data/mockDishes";

const IngredientModal = () => {
  const { dishId } = useParams();
  const dish = dishData.find((d) => d.id === parseInt(dishId));
  const ingredients = ingredientData[dishId] || [];

  if (!dish) return <div>Dish not found</div>;

  return (
    <div className="ingredient-detail-screen">
      <header className="app-header">
        <Link to="/" className="back-btn">
          <i className="fas fa-arrow-left"></i> Back
        </Link>
        <h1>Ingredients</h1>
      </header>

      <div className="dish-header">
        <h2>{dish.name}</h2>
        <p>{dish.description}</p>
      </div>

      <div className="ingredient-list">
        <h3>Ingredients:</h3>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index} className="ingredient-item">
              <span className="ingredient-name">{ingredient.name}</span>
              <span className="ingredient-quantity">{ingredient.quantity}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default IngredientModal;
