import React, { useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav class="navbar navbar-expand-lg bg-dark">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/" style={{ textDecoration: "none" }}>
          Diary
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse"
          id="navbarSupportedContent"
          style={{ flex: "1", display: "flex", justifyContent: "flex-end" }}
        >
          {!localStorage.getItem("token") ? (
            <form class="d-flex" role="search">
              <button type="button" class="btn btn-warning btn-sm">
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Log In
                </Link>
              </button>
              <button type="button" class="btn btn-warning btn-sm">
                <Link
                  to="/signup"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Sign Up
                </Link>
              </button>
            </form>
          ) : (
            <button
              type="button"
              class="btn btn-warning btn-sm"
              onClick={handleLogout}
            >
              Log Out
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
