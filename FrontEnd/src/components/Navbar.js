import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar(props) {
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
    localStorage.removeItem("authtoken");
    navigate("/login");
    props.showAlert("Logged Out ", "success");
  };

  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg ">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Navbar
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
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                to="/about"
              >
                about
              </Link>
            </li>
          </ul>
          {!localStorage.getItem("authtoken") ? (
            <form className="d-flex" role="search">
              <Link
                className={`btn mx-1 btn-${
                  location.pathname === "/login" ? "dark" : "primary"
                }`}
                to="/login"
                role="button"
              >
                Login
              </Link>
              <Link
                className={`btn  mx-1 btn-${
                  location.pathname === "/signup" ? "dark" : "primary"
                }`}
                to="/signup"
                role="button"
              >
                SignUp
              </Link>
            </form>
          ) : (
            <button className="btn btn-primary" onClick={handlelogout}>
              Log Out
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
