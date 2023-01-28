import React from "react";
import { Link, useLocation } from "react-router-dom";
export const Navbar = () => {
  let location = useLocation()
  return (
      <nav className="navbar bg-dark navbar-expand-lg  navbar-dark ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Notes Master
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/"?"active":""}`} aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/about"?"active":""}`} to="/about">
                  About
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              
            <Link className="btn btn-primary mx-2" role="button" to="/login">Login</Link>
            <Link className="btn btn-primary mx-2"  role="button" to="/signup">Signup</Link>
            </form>
          </div>
        </div>
      </nav>
  );
};
