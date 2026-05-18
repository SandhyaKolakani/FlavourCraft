import React from "react";
import { Link } from "react-router-dom";
import "./SavedRecipes.css";


const SavedRecipes = () => {
  const savedRecipes =
    JSON.parse(localStorage.getItem("savedRecipes")) || [];

  return (
    <div className="saved-container">
      <h1 className="saved-title">Saved Recipes</h1>

      {savedRecipes.length === 0 ? (
        <p className="no-saved">No saved recipes yet</p>
      ) : (
        <div className="saved-grid">
          {savedRecipes.map((recipe) => (
            <div key={recipe.id} className="saved-card">
              <img
                src={recipe.image}
                alt={recipe.name}
                className="saved-image"
              />

              <div className="saved-content">
                <h3>{recipe.name}</h3>

                <Link to={`/recipe/${recipe.id}`}>
                  <button className="view-btn">
                    View Recipe
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SavedRecipes;
