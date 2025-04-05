import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ImageContext from "../context/images/imageContext";
import "./Navbar.css";

function Navbar(props) {
  // Add ImageContext for clearing cache on logout
  const { clearImageCache } = useContext(ImageContext);
  
  //sets navigation
  let navigate = useNavigate();

  //it sets the location of the router
  const location = useLocation();
  //below code is used to put location in console log
  //import useEffect from react first
  // useEffect(() => {
  //   console.log(location.pathname);
  // }, [location]);

  const handlelogout = () => {
    // Clear image cache when logging out
    clearImageCache();
    localStorage.removeItem("authtoken");
    navigate("/login");
    props.showAlert("Logged Out ", "success");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-custom">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <i className="fas fa-book-open me-2"></i>
          iNoteBook
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
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                aria-current="page"
                to="/"
              >
                <i className="fas fa-home me-1"></i> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                to="/about"
              >
                <i className="fas fa-info-circle me-1"></i> About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/images" ? "active" : ""
                }`}
                to="/images"
              >
                <i className="fas fa-images me-1"></i> Images
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/notes" ? "active" : ""
                }`}
                to="/notes"
              >
                <i className="fas fa-sticky-note me-1"></i> Notes
              </Link>
            </li>
          </ul>
          {!localStorage.getItem("authtoken") ? (
            <div className="d-flex auth-buttons">
              <Link
                className={`btn auth-btn ${
                  location.pathname === "/login" ? "btn-login-active" : "btn-login"
                }`}
                to="/login"
                role="button"
              >
                <i className="fas fa-sign-in-alt me-1"></i> Login
              </Link>
              <Link
                className={`btn auth-btn ${
                  location.pathname === "/signup" ? "btn-signup-active" : "btn-signup"
                }`}
                to="/signup"
                role="button"
              >
                <i className="fas fa-user-plus me-1"></i> Sign Up
              </Link>
            </div>
          ) : (
            <div className="d-flex align-items-center">
              <span className="user-greeting me-3">
                <i className="fas fa-user-circle me-1"></i> Welcome
              </span>
              <button className="btn btn-logout" onClick={handlelogout}>
                <i className="fas fa-sign-out-alt me-1"></i> Log Out
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
