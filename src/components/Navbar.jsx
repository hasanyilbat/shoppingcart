import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">
          LA COLLECTION
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          More
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="products">
                Products
              </Link>
            </li>
          </ul>
        </div>
        <div className="d-none d-lg-block">
          <Link
            to="login"
            type="button"
            class="border border-2 border-dark btn btn-light"
          >
            Login
          </Link>
          <Link
            to="register"
            type="button"
            class="border border-2 border-dark btn btn-light mx-2"
          >
            Register
          </Link>
          <Link
            to="cart"
            type="button"
            class="border border-2 border-dark btn btn-light"
          >
            Cart
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
