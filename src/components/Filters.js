// src/components/Filters.js
import React from "react";

const Filters = ({
  searchQuery,
  setSearchQuery,
  vegFilter,
  setVegFilter,
  nonVegFilter,
  setNonVegFilter,
}) => {
  return (
    <div className="filters-container">
      {/* Search Bar */}
      <div className="search-bar">
        <i className="fas fa-search"></i>
        <input
          type="text"
          placeholder="Search dishes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Veg / Non-Veg Filters */}
      <div className="filters">
        <button
          className={`filter-btn ${vegFilter ? "active" : ""}`}
          onClick={() => setVegFilter(!vegFilter)}
        >
          <i className="fas fa-leaf"></i> Veg
        </button>
        <button
          className={`filter-btn ${nonVegFilter ? "active" : ""}`}
          onClick={() => setNonVegFilter(!nonVegFilter)}
        >
          <i className="fas fa-drumstick-bite"></i> Non-Veg
        </button>
      </div>
    </div>
  );
};

export default Filters;
