// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import "./Login.css";

// function Register() {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: ""
//   });

//   const [status, setStatus] = useState("");

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleRegister = (e) => {
//     e.preventDefault();

//     // Get existing users from localStorage or empty array
//     const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

//     // Check if email is already registered
//     const emailExists = storedUsers.some((user) => user.email === formData.email);
//     if (emailExists) {
//       setStatus("⚠️ Email already registered!");
//       return;
//     }

//     // Add new user to the array
//     storedUsers.push(formData);

//     // Store updated array in localStorage
//     localStorage.setItem("users", JSON.stringify(storedUsers));

//     setStatus("😃 Registered successfully!");

//     // Redirect to login after 1 sec
//     setTimeout(() => {
//       navigate("/login");
//     }, 1000);
//   };

//   return (
//     <div className="login-container">
//       <div className="login-card">
//         <h2>Register</h2>

//         <form onSubmit={handleRegister}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />

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

//           <button type="submit">Register</button>
//         </form>

//         <p className="toggle-text">
//           Already have an account?
//           <Link to="/login"> Login</Link>
//         </p>

//         {status && <p className="status">{status}</p>}
//       </div>
//     </div>
//   );
// }

// export default Register;import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";
import { useState } from "react";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email already exists
    if (storedUsers.some((user) => user.email === formData.email)) {
      setStatus("⚠️ Email already registered!");
      return;
    }

    // Add new user
    storedUsers.push(formData);
    localStorage.setItem("users", JSON.stringify(storedUsers));

    setStatus("😃 Registered successfully!");

    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
          <button type="submit">Register</button>
        </form>
        <p className="toggle-text">
          Already have an account? <Link to="/login"> Login</Link>
        </p>
        {status && <p className="status">{status}</p>}
      </div>
    </div>
  );
}

export default Register;