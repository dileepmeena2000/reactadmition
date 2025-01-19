import React, { useContext, useState } from "react";
import { Context } from "../main";
import axios from "axios";
import { Navigate } from "react-router-dom";

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { isAuthorized, setIsAuthorized, user, setUser } = useContext(Context);

  const register = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/userinsert", {
        name,
        email,
        password,
        confirmPassword,
      });
      setName("");
      setEmail("");
      setPassword("");
      setIsAuthorized(true);
    } catch (err) {
      if (err.response) {
        console.error("Response data:", err.response.data);
        console.error("Response status:", err.response.status);
        console.error("Response headers:", err.response.headers);
        alert(`Error: ${err.response.data.message || "Unauthorized"}`);
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
      {/* <!-- Register Here --> */}
      <section id="login" className="my-5">
        <div className="container">
          <div className="row">
            {/* <!-- Column-1 --> */}
            <div className="col-lg-6">
              <img
                className="w-100"
                src="./Images/CollegeStudentsImage-2.jpeg"
                alt="College Students Image-2"
                height="100%"
              />
            </div>
            {/* <!-- End Column-1 --> */}

            {/* <!-- Column-2 --> */}
            <div className="col-lg-6 bglogin p-4">
              <form onSubmit={register}>
                {/* <!-- logo --> */}
                <center>
                  <img
                    className="mb-4 rounded-circle"
                    src="./Images/SignUpImage.jpeg"
                    alt="Sign Up Image"
                    width="20%"
                    height="20%"
                  />
                </center>

                {/* <!-- Heading (Register Here) --> */}
                <h1 className="mb-5 text-center">Register Here</h1>

                {/* <!-- User Name --> */}
                <div className="row mb-4">
                  <div className="col-lg-2 text-center bg-secondary rounded text-light fw-light my-auto p-2">
                    User Name
                  </div>
                  <div className="col-lg-10">
                    <input
                      className="form-control text-capitalize"
                      type="text"
                      placeholder="Enter your name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>

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

                {/* <!-- Confirm Password --> */}
                <div className="row mb-4">
                  <div className="col-lg-3 text-center bg-secondary rounded text-light fw-light my-auto p-2">
                    Confirm Password
                  </div>
                  <div className="col-lg-9">
                    <input
                      className="form-control"
                      type="password"
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                </div>

                {/* <!-- Choose File --> */}
                {/* <div className="row mb-5">
                  <div className="col-lg-9 my-auto text-uppercase fw-light text-end">
                    No file chosen
                  </div>
                  <div className="col-lg-3 my-auto text-uppercase fw-light text-end">
                    <button className="btn btn-secondary fw-light">
                      Choose File
                    </button>
                  </div>
                </div> */}

                {/* <!-- Button (Login) --> */}
                <center>
                  <button className="btn btn-primary mb-5 btn-lg">
                    Register
                  </button>
                </center>
              </form>
            </div>
            {/* <!-- End Column-2 --> */}
          </div>
        </div>
      </section>
      {/* <!-- End Register Here --> */}
    </>
  );
}

export default Registration;
