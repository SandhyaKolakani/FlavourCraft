import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import CategoryPage from "./Category"; // Category page showing recipes in selected category
import RecipeDetail from "./RecipeDetails"; // Detailed recipe page
import About from "./AboutUs";
import Contact from "./ContactUs";
import Intro from "./Intro";
import Login from "./Login";
import Register from "./Register";
import SavedRecipes from "./SavedRecipes";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>

        {/* Intro Landing Page */}
        <Route path="/" element={<Intro />} />

        {/* Home page with categories */}
        <Route path="/home" element={<Home />} />

        {/* Category page shows all recipes in selected category */}
        <Route path="/category/:categoryName" element={<CategoryPage />} />

        {/* Detailed recipe page */}
        <Route path="/recipe/:id" element={<RecipeDetail />} />

        <Route path="/saved" element={<SavedRecipes />} />

        {/* About & Contact pages */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Register & Login forms */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
