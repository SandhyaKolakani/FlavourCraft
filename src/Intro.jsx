import "./Intro.css";
import { useNavigate } from "react-router-dom";
import { FaWhatsapp, FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

function Intro() {
  const navigate = useNavigate();

  return (
    <>
      {/* Intro Section */}
      <section className="intro">
        <video
          className="intro-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/intro1.mp4" type="video/mp4" />
        </video>

        <div className="intro-content">
          <h1>Welcome to Flavor Craft</h1>
          <p>Explore delicious recipes crafted with love</p>
          <button
            className="intro-btn"
            onClick={() => navigate("/home")}
          >
            Explore Recipes
          </button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        {/* Top part with multiple columns */}
        <div className="footer-top">
          <div className="footer-logo-desc">
            <h2>FlavorCraft</h2>
            <p>Your one-stop destination for delicious, easy-to-make recipes.</p>
          </div>

          <div className="footer-links-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/home">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/recipes">Recipes</a></li>
            </ul>
          </div>

          <div className="footer-links-section">
            <h3>Categories</h3>
            <ul>
              <li><a href="/category/veg">Vegetarian</a></li>
              <li><a href="/category/nonveg">Non-Vegetarian</a></li>
              <li><a href="/category/snacks">Snacks</a></li>
              <li><a href="/category/desserts">Desserts</a></li>
            </ul>
          </div>

          <div className="footer-connect-app">
            <h3>Download Our App</h3>
            <div className="app-links d-flex justify-content-center gap-3">
              <a href="#" className="app-icon">
                <img src="/googleplay.jpg" alt="Play Store"/>
              </a>
              <a href="#" className="app-icon">
                <img src="/appstore.webp" alt="App Store"/>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom part: social icons row */}
        <div className="footer-social-bottom">
          <h5 className="fw-bold mb-3">Follow Us 🌐</h5>
          <div className="d-flex justify-content-center fs-3 gap-4 mb-3">
            <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="text-success">
              <FaWhatsapp />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-primary">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-info">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-danger">
              <FaInstagram />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-danger">
              <FaYoutube />
            </a>
          </div>
          <p className="mb-0">© 2K26 FlavorCraft — Where every meal becomes a masterpiece. All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
}

export default Intro;