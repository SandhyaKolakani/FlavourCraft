// import { Link } from "react-router-dom";
// import "./RecipeCard.css";

// function RecipeCard({ recipe }) {

//   return (
//     <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center">
//       <div className="recipe-small-card">

//         <img src={recipe.image} alt={recipe.name} />

//         <div className="card-body text-center">
//           <h5>{recipe.name}</h5>

//           <div className="button-wrapper">
//             <Link to={`/recipe/${recipe.id}`}>
//               <button className="prepare-btn">
//                 How To Prepare →
//               </button>
//             </Link>
//           </div>

//         </div>

//       </div>
//     </div>
//   );
// }

// export default RecipeCard;
// RecipeCard.jsx
import { useNavigate } from "react-router-dom";

function RecipeCard({ recipe, categoryName }) {
  const navigate = useNavigate();

  const goToRecipe = () => {
    // Pass recipe id and categoryName as state
    navigate(`/recipe/${recipe.id}`, { state: { categoryName } });
  };

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center">
      <div className="recipe-small-card">
        <img src={recipe.image} alt={recipe.name} />
        <div className="card-body text-center">
          <h5>{recipe.name}</h5>
          <div className="button-wrapper">
            <button className="prepare-btn" onClick={goToRecipe}>
              How To Prepare →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;