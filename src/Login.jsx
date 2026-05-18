// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import Swal from "sweetalert2";
// import "./Login.css";

// function Login() {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: ""
//   });

//   const navigate = useNavigate();

//   // Update form fields
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   // Handle login submission
//   const handleLogin = (e) => {
//     e.preventDefault();

//     // Get all registered users from localStorage
//     const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

//     // No users registered
//     if (storedUsers.length === 0) {
//       Swal.fire({
//         icon: "warning",
//         title: "Oops!",
//         text: "You didn't register yet! Please register first."
//       });
//       return;
//     }

//     // Find user with matching email and password
//     const matchedUser = storedUsers.find(
//       (user) => user.email === formData.email && user.password === formData.password
//     );

//     if (!matchedUser) {
//       Swal.fire({
//         icon: "error",
//         title: "Invalid!",
//         text: "Email or password is incorrect"
//       });
//       return;
//     }

//     // ✅ Login Success
//     localStorage.setItem("isLoggedIn", "true");
//     localStorage.setItem("loggedInUserName", matchedUser.name);

//     // Dispatch custom event so Navbar updates immediately
//     window.dispatchEvent(new Event("login"));

//     Swal.fire({
//       icon: "success",
//       title: "Welcome!",
//       text: `Hello ${matchedUser.name}, you have logged in successfully!`,
//       timer: 2000,
//       showConfirmButton: false
//     }).then(() => {
//       navigate("/home"); // redirect to home page
//     });
//   };

//   return (
//     <div className="login-container">
//       <div className="login-card">
//         <h2>Login</h2>

//         <form onSubmit={handleLogin}>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />

//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />

//           <button type="submit">Login</button>
//         </form>

//         <p className="toggle-text">
//           Don't have an account?
//           <Link to="/register"> Register Now</Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Login;import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import "./Login.css";
import { useState } from "react";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    if (storedUsers.length === 0) {
      Swal.fire({ icon: "warning", title: "Oops!", text: "You didn't register yet! Please register first." });
      return;
    }

    const matchedUser = storedUsers.find(
      (user) => user.email === formData.email && user.password === formData.password
    );

    if (!matchedUser) {
      Swal.fire({ icon: "error", title: "Invalid!", text: "Email or password is incorrect" });
      return;
    }

    // ✅ Login Success
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("loggedInUserName", matchedUser.name);

    // Dispatch login event so Navbar updates immediately
    window.dispatchEvent(new Event("login"));

    Swal.fire({ icon: "success", title: "Welcome!", text: `Hello ${matchedUser.name}, you have logged in successfully!`, timer: 2000, showConfirmButton: false })
      .then(() => navigate("/home"));
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
          <button type="submit">Login</button>
        </form>
        <p className="toggle-text">
          Don't have an account? <Link to="/register"> Register Now</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;