import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(password);
  };

  return (
    <div>
      <form
        className=" m-auto mt-5 bg-light"
        style={{ height: "35rem", width: "32rem" }}
        onSubmit={handleSubmit}
      >
        <div>
          <img
            src="https://thumbs.dreamstime.com/b/vector-illustration-isolated-white-background-login-button-icon-126999949.jpg"
            alt=""
            width="200px"
            className="m-auto d-block rounded-5"
          />
        </div>
        <div className="mb-3">
          <label htmlfor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlfor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary d-block mx-auto mt-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
