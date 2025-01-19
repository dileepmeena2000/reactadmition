import React, { useState, useContext } from "react";
import { Context } from "../main";
import axios from "axios";
import { Navigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isAuthorized, setIsAuthorized, setUser } = useContext(Context);

  const login = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/verifylogin", {
        email,
        password,
      });

      setIsAuthorized(true);
      setUser(data.user);
      setEmail("");
      setPassword("");
    } catch (err) {
      if (err.response) {
        console.error("Response data:", err.response.data);
        console.error("Response status:", err.response.status);
        console.error("Response headers:", err.response.headers);
        alert(`Error: ${err.response.data.message || "Login failed"}`);
      } else if (err.request) {
        console.error("Request data:", err.request);
        alert("Error: No response received from the server.");
      } else {
        console.error("Error message:", err.message);
        alert(`Error: ${err.message}`);
      }
    }
  };

  if (isAuthorized) {
    return <Navigate to={"/dashboard"} />;
  }
  return (
    <>
      {/* <!-- Login --> */}
      <section id="login" className="my-5">
        <div className="container">
          <div className="row">
            {/* <!-- Column-1 --> */}
            <div className="col-lg-6">
              <img
                className="w-100"
                src="./Images/CollegeStudentsImage-1.jpeg"
                alt="College Students Image-1"
                height="100%"
              />
            </div>
            {/* <!-- End Column-1 --> */}

            {/* <!-- Column-2 --> */}
            <div className="col-lg-6 bglogin p-4">
              <form onSubmit={login}>
                {/* <!-- logo --> */}
                <center>
                  <img
                    className="mb-4 rounded-circle"
                    src="./Images/logo.jpeg"
                    alt="logo"
                    width="20%"
                    height="20%"
                  />
                </center>

                {/* <!-- Heading (Login Here) --> */}
                <h1 className="mb-5 text-center">Login Here</h1>

                {/* <!-- Email --> */}
                <div className="row mb-3">
                  <div className="col-lg-2 text-center bg-secondary rounded text-light fw-light my-auto p-2">
                    Email
                  </div>
                  <div className="col-lg-10">
                    <input
                      className="form-control"
                      type="email"
                      placeholder="name@example.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                {/* <!-- Password --> */}
                <div className="row mb-4">
                  <div className="col-lg-2 text-center bg-secondary rounded text-light fw-light my-auto p-2">
                    Password
                  </div>
                  <div className="col-lg-10">
                    <input
                      className="form-control"
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>

                {/* <!-- Button (Login) --> */}
                <center>
                  <button className="btn btn-primary mb-5 btn-lg">
                    Login
                  </button>
                </center>
              </form>
            </div>
            {/* <!-- End Column-2 --> */}
          </div>
        </div>
      </section>
      {/* <!-- End Login Here --> */}
    </>
  );
}

export default Login;
