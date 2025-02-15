import React, { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import NoteContext from "../context/notes/NoteContext";
export const Login = () => {
  const notesContext = useContext(NoteContext);
  const [credentials, setcredentials] = useState({email:"",password:""})

  const navigate = useNavigate() //used to redirect user using the router paths

  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value });
  };


  const handleSubmit = async (e) =>{
    e.preventDefault();
    const response = await fetch(`http://localhost:8080/auth/login`, {
      method: 'POST',
      headers: {  
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email:credentials.email,password:credentials.password}) 
    });
    const json= await response.json()
    if(response.status===200){ //success is a variable sent as a response, if true then redirect user to dashboard
      localStorage.setItem("token",json.authtoken)
      navigate("/home")
    }
    else
    {
      alert("Invalid credentials")
    }
  }
  return (
    <div className="container d-flex justify-content-center">
      <form className="my-5" style={{width:"35%"}} onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            onChange={onChange}
            value={credentials.email}
            minLength={5}
            aria-describedby="emailHelp"
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
            minLength={5}
            value={credentials.password}
            onChange={onChange}
          />
        </div>
        <div className="d-flex justify-content-center">

        <button type="submit" className="btn btn-primary ">
          Login
        </button>
        </div>
      </form>
    </div>
  );
};
