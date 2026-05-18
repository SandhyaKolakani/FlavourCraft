import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import BreakFastRecipes from "./BreakFastRecipes";
import VegRecipes from "./VegRecipes";
import NonVegRecipes from "./NonVegRecipes";
import Snacks from "./Snacks";
import FestivalSpecial from "./FestivalSpecial";
import HealthyRecipes from "./HealthyRecipes";
import FastFood from "./FastFood";
import Desserts from "./Desserts";
import Beverages from "./Beverages";
import NorthIndianRecipes from "./NorthIndianRecipes";
import ChineseRecipes from "./ChineseRecipes";
import SeaFoodRecipes from "./SeaFood";
import QuickMealsRecipes from "./QuickMeals";
import SweetsRecipes from "./SweetRecipes";

import "./RecipeDetails.css";



const RecipeDetails = () => {
  const { id } = useParams();
  
  const location = useLocation();
  const navigate = useNavigate();  
  const categoryName = location.state?.categoryName;

  const allRecipes = [
    ...BreakFastRecipes,
    ...VegRecipes,
    ...NonVegRecipes,
    ...Snacks,
    ...FestivalSpecial,
    ...HealthyRecipes,
    ...FastFood,
    ...Desserts,
    ...Beverages,
    ...NorthIndianRecipes,
    ...ChineseRecipes,
    ...SeaFoodRecipes,
    ...QuickMealsRecipes,
    ...SweetsRecipes,
  ];

  const recipe = allRecipes.find((r) => r.id.toString() === id);

  const [spiceLevel, setSpiceLevel] = useState("normal");
  const [likes, setLikes] = useState(2891);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");

  const [showIngredients, setShowIngredients] = useState(false);
  const [showPreparation, setShowPreparation] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowIngredients(true), 500);
    const timer2 = setTimeout(() => setShowPreparation(true), 1500);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  useEffect(() => {
  const savedRecipes =
    JSON.parse(localStorage.getItem("savedRecipes")) || [];

  const alreadySaved = savedRecipes.find(
    (item) => item.id === recipe.id
  );

  if (alreadySaved) {
    setIsSaved(true);
  }
}, [recipe.id]);

  if (!recipe) return <div>Recipe not found</div>;

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  // const handleSave = () => setIsSaved(!isSaved);
  const handleSave = () => {
  let savedRecipes =
    JSON.parse(localStorage.getItem("savedRecipes")) || [];

  const alreadySaved = savedRecipes.find(
    (item) => item.id === recipe.id
  );

  if (alreadySaved) {
    savedRecipes = savedRecipes.filter(
      (item) => item.id !== recipe.id
    );

    setIsSaved(false);
  } else {
    savedRecipes.push(recipe);

    setIsSaved(true);
  }

  localStorage.setItem(
    "savedRecipes",
    JSON.stringify(savedRecipes)
  );
};

  const handleShare = async () => {
    const shareData = { title: recipe.name, text: "Check this recipe!", url: window.location.href };
    if (navigator.share) await navigator.share(shareData);
    else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied");
    }
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentInput.trim() === "") return;
    setComments([...comments, commentInput]);
    setCommentInput("");
  };

  return (
    <div className="recipe-wrapper">
     
      <h1 className="recipe-title">{recipe.name}</h1>

      <div className="recipe-container">
        {/* Ingredients */}
        <div className={`card ingredients ${showIngredients ? "show-left" : ""}`}>
          <h2>Ingredients ({spiceLevel})</h2>
          <ul>
            {recipe.ingredients.map((ing, index) => (
              <li key={index}>
                {ing.icon} {ing.item} - {ing.quantity}
              </li>
            ))}

            {/* Conditional ingredients */}
            {spiceLevel === "medium" && (
              <>
                <li>🌶 Green chilies - 2</li>
                <li>🔥 Chili flakes - 1 tsp</li>
              </>
            )}
            {spiceLevel === "spicy" && (
              <>
                <li>🌶 Green chilies - 4</li>
                <li>🔥 Chili flakes - 1 tsp</li>
                <li>⚫ Black pepper - 1 tsp</li>
                <li>🌶 Extra chili powder - 1 tbsp</li>
              </>
            )}
          </ul>
        </div>

        {/* Image */}
        <div className="card image-card">
          <img src={recipe.image} alt={recipe.name} />
          <h5> Select Spice Levels </h5>
          
          <div className="spice-level">
            <button className={spiceLevel === "normal" ? "active" : ""} onClick={() => setSpiceLevel("normal")}>Normal</button>
            <button className={spiceLevel === "medium" ? "active" : ""} onClick={() => setSpiceLevel("medium")}>Medium</button>
            <button className={spiceLevel === "spicy" ? "active" : ""} onClick={() => setSpiceLevel("spicy")}>Spicy</button>
          </div>
        </div>

        {/* Preparation */}
        <div className={`card preparation ${showPreparation ? "show-right" : ""}`}>
          <h2>Preparation</h2>
          <ol>
            {recipe.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>

      {/* Actions */}
      <div className="actions">
        <div className="action" onClick={handleLike}>
          <svg className={`icon ${isLiked ? "liked" : ""}`} viewBox="0 0 24 24">
            <path d="M12 21s-6.7-4.35-9.33-8.14C-0.67 8.54 2.28 3 7.28 3c2.1 0 3.7 1.2 4.72 2.6C13.02 4.2 14.62 3 16.72 3c5 0 7.95 5.54 4.61 9.86C18.7 16.65 12 21 12 21z" />
          </svg>
          <p>{likes}</p>
        </div>

        <div className="action" onClick={handleShare}>
          <svg className="icon" viewBox="0 0 24 24">
            <circle cx="18" cy="5" r="3" />
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="19" r="3" />
            <line x1="8.7" y1="13.5" x2="15.3" y2="17.5" />
            <line x1="15.3" y1="6.5" x2="8.7" y2="10.5" />
          </svg>
        </div>

        <div className="action" onClick={handleSave}>
          <svg className={`icon ${isSaved ? "saved" : ""}`} viewBox="0 0 24 24">x
            <path d="M5 3h14v18l-7-5-7 5z" />
          </svg>
        </div>

        <div className="action">
          <svg className="icon" viewBox="0 0 24 24">
            <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V5a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
          </svg>
          <p>{comments.length}</p>
        </div>
      </div>

      {/* Comments */}
      <div className="comment-section">
        <form onSubmit={handleCommentSubmit}>
          <input type="text" placeholder="Add a comment..." value={commentInput} onChange={(e) => setCommentInput(e.target.value)} />
          <button type="submit">Post</button>
        </form>

        <div className="comments">
          {comments.map((c, index) => (
            <p key={index}>{c}</p>
          ))}
        </div>
      </div>
       {categoryName && (
        <div className="button-wrapper" style={{ marginBottom: "20px" }}>
          <button
            className="prepare-btn"
            onClick={() => navigate(`/category/${categoryName}`)}
          >
            ← Back to {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
          </button>
        </div>
      )}
    </div>
  );
};

export default RecipeDetails;