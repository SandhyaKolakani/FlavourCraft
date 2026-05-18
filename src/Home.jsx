import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUtensils } from "react-icons/fa"; // fork icon
import Swal from "sweetalert2";
import "./Home.css";

function Home() {
  const [search, setSearch] = useState("");
  const [placeholderText, setPlaceholderText] = useState("");
  const [viewedCount, setViewedCount] = useState(0); // count of recipes viewed
  const [disableRecipes, setDisableRecipes] = useState(false); // for graying out
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const categories = [
    { name: "Breakfast", image: "/breakfast.webp" },
    { name: "Veg", image: "/veg image.webp" },
    { name: "NonVeg", image: "/nonveg images.webp" },
    { name: "Snacks", image: "/snacks.webp" },
    { name: "Festival Special", image: "/festivefood.webp" },
    { name: "Sweets", image: "/sweets.jpg" },
    { name: "Healthy", image: "/healthyfood.webp" },
    { name: "Fast Food", image: "/fastfood.webp" },
    { name: "Desserts", image: "/desserts.jpg" },
    { name: "Beverages", image: "/beverages.webp" },
    { name: "North Indian", image: "/northindian.webp" },
    { name: "Chinese", image: "/chinese.webp" },
    { name: "Seafood", image: "/seafood.webp" },
    { name: "QuickMeals", image: "/quickmeals.jpg" }
  ];

  // Animate placeholder
  useEffect(() => {
    let index = 0;
    setPlaceholderText(categories[0].name);

    const interval = setInterval(() => {
      index = (index + 1) % categories.length;
      setPlaceholderText(categories[index].name);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Check if user is logged in
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const name = localStorage.getItem("loggedInUserName");
    if (isLoggedIn && name) setUser({ name });
  }, []);

  const handleViewRecipe = () => {
    if (user) return; // logged-in users can view all

    if (viewedCount < 3) {
      const newCount = viewedCount + 1;
      setViewedCount(newCount);

      if (newCount >= 3) {
        setDisableRecipes(true); // gray out remaining
        Swal.fire({
          icon: "info",
          title: "Login Required",
          text: "You need to login to view more recipes.",
          confirmButtonText: "Login",
        }).then(() => navigate("/login"));
      }
    }
  };

  return (
    <div className="home-container">
      <div className="container py-5 text-center">

        <h1 className="main-title mb-5">
          Start with a Click, Make Magic Quick.
        </h1>

        {/* Search Section */}
        <div className="search-container">
          <FaUtensils className="search-icon" />
          <input
            type="text"
            className="search-input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {!search && (
            <div className="placeholder-wrapper">
              <span className="static-text">Search categories like</span>
              <span key={placeholderText} className="dynamic-text">
                "{placeholderText}"
              </span>
            </div>
          )}
        </div>

        {/* Categories */}
        <div className="row justify-content-center g-4 mt-4">
          {categories
            .filter((cat) =>
              cat.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((cat) => (
              <div
                className="col-lg-2 col-md-3 col-sm-4 col-6 text-center"
                key={cat.name}
              >
                <Link
                  to={`/category/${cat.name.toLowerCase().replace(/\s/g, "")}`}
                  className="text-decoration-none"
                >
                  <div
                    className="rect-card mx-auto mb-2"
                    onClick={handleViewRecipe}
                    style={{
                      cursor: disableRecipes && !user ? "not-allowed" : "pointer",
                      opacity: disableRecipes && !user ? 0.5 : 1,
                    }}
                  >
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="rect-img"
                    />
                  </div>
                  <h6 className="category-name mt-2">{cat.name}</h6>
                </Link>
              </div>
            ))}
        </div>

      </div>
    </div>
  );
}

export default Home;