import React from "react";

export const Login = () => {
  return (
    <div className="container d-flex justify-content-center">
      <form className="my-5" style={{width:"35%"}}>
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
