import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Category.css";

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

import RecipeCard from "./RecipeCard";

function Category() {

  const { categoryName } = useParams();
  const navigate = useNavigate();

  // ================= FILTER RECIPES =================

  let recipes = [];

  switch (categoryName.toLowerCase()) {
    case "breakfast":
      recipes = BreakFastRecipes;
      break;
    case "veg":
      recipes = VegRecipes;
      break;
    case "nonveg":
      recipes = NonVegRecipes;
      break;
    case "snacks":
      recipes = Snacks;
      break;
    case "festivalspecial":
      recipes = FestivalSpecial;
      break;
    case "healthy":
      recipes = HealthyRecipes;
      break;
    case "fastfood":
      recipes = FastFood;
      break;
    case "desserts":
      recipes = Desserts;
      break;
    case "beverages":
      recipes = Beverages;
      break;
    case "northindian":
      recipes = NorthIndianRecipes;
      break;
    case "chinese":
      recipes = ChineseRecipes;
      break;
    case "seafood":
      recipes = SeaFoodRecipes;
      break;
    case "quickmeals":
      recipes = QuickMealsRecipes;
      break;
    case "sweets":
      recipes = SweetsRecipes;
      break;
    default:
      recipes = [];
  }

  // ================= PAGINATION =================

  const recipesPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [categoryName]);

  const totalPages = Math.ceil(recipes.length / recipesPerPage);

  const indexOfLast = currentPage * recipesPerPage;
  const indexOfFirst = indexOfLast - recipesPerPage;

  const currentRecipes = recipes.slice(indexOfFirst, indexOfLast);

  const goNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goPrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // ================= RECIPE CARDS =================

  const recipeCards = currentRecipes.map((recipe) => (
    <RecipeCard
      key={recipe.id}
      recipe={recipe}
      categoryName={categoryName}
    />
  ));

  
  return (
    <div className="container py-5">

      <h1 className="category-title text-center mb-5">
        {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)} Recipes
      </h1>

      <div className="row g-5 justify-content-center">
        {recipeCards}
      </div>

      {/* ================= PAGINATION ================= */}

      <div className="pagination-container">

        <span
          className={`page-symbol ${currentPage > 1 ? "clickable" : "disabled"} active-left`}
          onClick={goPrev}
        >
          &lt;
        </span>

        <span className="current-page">
          {currentPage}
        </span>

        <span className="page-text">
          of {totalPages} pages
        </span>

        <span
          className={`page-symbol ${currentPage < totalPages ? "clickable" : "disabled"} active-right`}
          onClick={goNext}
        >
          &gt;
        </span>

      </div>

     <div className="back-btn-wrapper">
      <button
        className="back-home-btn"
        onClick={() => navigate("/home")}
      >
       ← Back to Home
      </button>
    </div>

    </div>
  );
}

export default Category;