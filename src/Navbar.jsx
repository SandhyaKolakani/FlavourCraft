import { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation, Link } from "react-router-dom";
import "./Navbar.css";
import { FaFingerprint, FaSignOutAlt } from "react-icons/fa";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeGroup, setActiveGroup] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  const categoryGroups = [
    { title: "Daily Meals", items: ["Breakfast", "QuickMeals", "Healthy"] },
    { title: "Snacks & Fast Food", items: ["Snacks", "Fast Food", "Beverages"] },
    {
      title: "Special & Cuisine",
      items: [
        "Veg",
        "NonVeg",
        "Festival Special",
        "Sweets",
        "Desserts",
        "North Indian",
        "Chinese",
        "Seafood"
      ]
    }
  ];

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check login
  useEffect(() => {
    const updateUser = () => {
      const name = localStorage.getItem("loggedInUserName");
      const isLoggedIn = localStorage.getItem("isLoggedIn");
      setUser(isLoggedIn && name ? { name } : null);
    };

    window.addEventListener("login", updateUser);
    updateUser();
    return () => window.removeEventListener("login", updateUser);
  }, []);

  // Active group detection
  useEffect(() => {
    const path = location.pathname;
    categoryGroups.forEach((group, index) => {
      group.items.forEach((item) => {
        const route = `/category/${item.toLowerCase().replace(/\s/g, "")}`;
        if (path === route) setActiveGroup(index);
      });
    });
  }, [location.pathname]);

 const handleLogout = () => {
  
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("loggedInUserName");

  setUser(null);
  navigate("/login");
};

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? "scrolled" : ""}`}>
      <div className="container">

        {/* Logo */}
        <NavLink className="navbar-brand" to="/">
          <img src="/3.webp" alt="Logo" className="logo-img" />
          <span className="title">FlavorCraft</span>
        </NavLink>

        {/* Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            {/* Dropdown Groups */}
            {categoryGroups.map((group, index) => (
              <li
                className="nav-item dropdown"
                key={group.title}
               onClick={() => setOpenDropdown(openDropdown === index ? null : index)}
               onMouseLeave={() => setOpenDropdown(null)}
              >
                <NavLink
                  to="#"
                  className={`nav-link ${activeGroup === index ? "active" : ""}`}
                  onClick={(e) => e.preventDefault()}
                >
                  {group.title}
                </NavLink>

                <ul className={`dropdown-menu custom-dropdown ${openDropdown === index ? "show" : ""}`}>
                  {group.items.map((item) => (
                    <li key={item}>
                      <NavLink
                        className="dropdown-item"
                        to={`/category/${item.toLowerCase().replace(/\s/g, "")}`}
                      >
                        {item}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>
            ))}

             <li className="nav-item">
              <NavLink
                to="/saved"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Saved Recipes
              </NavLink>
            </li>

            {/* Normal Links */}
            <li className="nav-item">
              <NavLink
                to="/home"
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              >
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              >
                Contact
              </NavLink>
            </li>

            {/* Login */}
            <li className="nav-item ms-3 d-flex align-items-center">
              {user ? (
                <div className="d-flex align-items-center">
                  <span className="user-name me-2">Welcome, {user.name}</span>
                  <FaSignOutAlt
                    onClick={handleLogout}
                    style={{ cursor: "pointer", color: "white" }}
                  />
                </div>
              ) : (
                <NavLink to="/login" className="fingerprint-btn">
                  <FaFingerprint style={{ color: "white", fontSize: "20px" }} />
                </NavLink>
              )}
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;