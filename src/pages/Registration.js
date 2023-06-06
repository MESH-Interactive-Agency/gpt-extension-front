import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../contexts/GlobalContext";

function Registration() {
  const { registerUser } = useContext(GlobalContext);
  const [user, setUser] = useState({ email: "", password: "" });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    registerUser(user);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            onChange={handleChange}
            value={user.email}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            onChange={handleChange}
            value={user.password}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
        <Link to="/login">Already have an account? Login here.</Link>
      </form>
    </div>
  );
}

export default Registration;
