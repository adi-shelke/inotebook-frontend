import React, { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
export const SignUp = () => {
  const navigate = useNavigate();
  const [credentials, setcredentials] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!(credentials.password === credentials.cpassword)){
      alert("Password Didn't match");
    } else {
      const response = await fetch(`http://localhost:8080/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username:credentials.name,
          email: credentials.email,
          password: credentials.password,
        }),
      });
      const json = await response.json();
      console.log(json)
      if (response.status === 200) {
        navigate("/login")
      } else if(json.message=== "USERNAME_ALREADY_EXISTS"){
        alert("Username already exists");
      }
      else if(json.message==="EMAIL_ALREADY_EXISTS"){
        alert("Email already exists");
      }
      else{
        alert("Something went wrong");
      }
    }
  };
  return (
    <div className="container d-flex justify-content-center">
      <form className="my-5" style={{ width: "35%" }} onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            minLength={3}
            aria-describedby="emailHelp"
            onChange={onChange}
            required
          />
        </div>
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
            required
            minLength={5}
            onChange={onChange}
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
            minLength={8}
            required
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="cpassword"
            name="cpassword"
            required
            minLength={8}
            onChange={onChange}
          />
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};
