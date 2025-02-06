import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  //set state of credentails
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  //set navigation to navigate on click on submit
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });

    const json1 = await response.json();
    console.log(json1);

    if (json1.success) {
      localStorage.setItem("authtoken", json1.jwt_token);
      navigate("/");
      props.showAlert("Logged in Successfully","success")
    } else {
      props.showAlert("Enter Correct credentials","danger")
      // alert("Credentials are wrong");
    }
  };

  const onChange1 = (e) => {
    //sets the value of the screen typed content to variables
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>Log-In</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            value={credentials.email}
            onChange={onChange1}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={credentials.password}
            onChange={onChange1}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
