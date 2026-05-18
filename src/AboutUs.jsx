import "./AboutUs.css";
import { GiCookingPot, GiForkKnifeSpoon, GiBreadSlice } from "react-icons/gi";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

function AboutUs() {
  return (
    <div className="about-container">

      {/* Centered Image Card */}
      <div className="about-image-card-container">
        <div className="about-image-card">
          <img src="/2.jpg" alt="Food Banner" className="about-image"/>
          <div className="about-image-overlay">
            <h1>FLAVOR CRAFT</h1>
            <p>Transforming home cooking into an unforgettable experience.</p>
          </div>
        </div>
      </div>

      {/* Story / Mission / Vision Cards */}
      <div className="cards-section">

        <div className="modern-card">
          <GiCookingPot className="card-icon"/>
          <h3>Our Story</h3>
          <p>
            Flavor Craft was founded to make cooking enjoyable and accessible.
            We bring creative, flavorful recipes to every kitchen.
          </p>
        </div>

        <div className="modern-card center-card">
          <GiForkKnifeSpoon className="card-icon"/>
          <h3>Our Mission</h3>
          <p>
            To inspire home cooks with delicious, simple recipes that turn meals into
            memorable experiences.
          </p>
        </div>

        <div className="modern-card">
          <GiBreadSlice className="card-icon"/>
          <h3>Our Vision</h3>
          <p>
            We envision a world where cooking is fun, creative, and unites people over great food.
          </p>
        </div>

      </div>

      {/* Meet Our Team Section */}
      <div className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-cards">

          <div className="team-card">
            <img src="/john.jpg" alt="Team Member"/>
            <h3>John Doe</h3>
            <p>Recipe Developer</p>
            <div className="team-social">
              <a href="#"><FaInstagram/></a>
              <a href="#"><FaFacebook/></a>
              <a href="#"><FaTwitter/></a>
            </div>
          </div>

          <div className="team-card">
            <img src="/sk.jpg" alt="Team Member"/>
            <h3>Sandhya Kolakani</h3>
            <p>Founder & Chef</p>
            <div className="team-social">
              <a href="#"><FaInstagram/></a>
              <a href="#"><FaFacebook/></a>
              <a href="#"><FaTwitter/></a>
            </div>
          </div>

          <div className="team-card">
            <img src="/smith1.jpg" alt="Team Member"/>
            <h3>Jane Smith</h3>
            <p>Content Creator</p>
            <div className="team-social">
              <a href="#"><FaInstagram/></a>
              <a href="#"><FaFacebook/></a>
              <a href="#"><FaTwitter/></a>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default AboutUs;