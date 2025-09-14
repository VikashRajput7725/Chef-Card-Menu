// src/components/DishCard.js
import React from "react";
import { Link } from "react-router-dom";

const DishCard = ({ dish, isSelected, onToggleSelection }) => {
  return (
    <div className={`dish-card ${isSelected ? "selected" : ""}`}>
      <div className="dish-image">
        <img src={dish.image} alt={dish.name} />
      </div>
      <div className="dish-info">
        <div className="dish-header">
          <h3 className="dish-name">{dish.name}</h3>
          <span
            className={`dish-type ${dish.type === "VEG" ? "veg" : "non-veg"}`}
          >
            {dish.type === "VEG" ? "🟢 Veg" : "🔴 Non-Veg"}
          </span>
        </div>
        <p className="dish-description">{dish.description}</p>
        <div className="dish-actions">
          <button
            className={`add-btn ${isSelected ? "remove" : ""}`}
            onClick={onToggleSelection}
          >
            {isSelected ? (
              <>
                <i className="fas fa-minus"></i> Remove
              </>
            ) : (
              <>
                <i className="fas fa-plus"></i> Add
              </>
            )}
          </button>
          <Link to={`/ingredients/${dish.id}`} className="ingredient-btn">
            <i className="fas fa-list"></i> Ingredients
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DishCard;
