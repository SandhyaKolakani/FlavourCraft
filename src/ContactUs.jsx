import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaInstagram, FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";
import "./ContactUs.css";

function ContactUs() {

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: ""
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ FIX: Handle input change (THIS WAS MISSING)
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // ✅ Send Email
  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const templateParameters = {
      user_name: formData.user_name,
      user_email: formData.user_email,
      message: formData.message,
      time: new Date().toLocaleString(),
      platform: navigator.userAgent,
      priority: "Normal",
      contact_id: Math.floor(Math.random() * 100000)
    };

    try {
      const response = await emailjs.send(
        "service_8zqh5z5",
        "template_h7zcvqd",
        templateParameters,
        "3JYOjGwNxtsIRCzJt"
      );

      console.log("SUCCESS!", response.status, response.text);

      setStatus("😃 Message sent successfully! We truly appreciate you reaching out to FlavorCraft.");

      // Clear form
      setFormData({
        user_name: "",
        user_email: "",
        message: ""
      });

    } catch (error) {
      console.log("FAILED...", error);
      setStatus("❌ Failed to send message. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="contact-page-container">

      <div className="contact-card">
        <h2>Contact Us</h2>
        <p>Your Experience Matters to Us</p>

        <form onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            placeholder="Name"
            value={formData.user_name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="Email"
            value={formData.user_email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {status && <p className="form-status">{status}</p>}

        {/* Social Section */}
        <div className="contact-social">
          <span>Connect with us</span>
          <div className="social-icons">
            <a href="#"><FaWhatsapp /></a>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ContactUs;