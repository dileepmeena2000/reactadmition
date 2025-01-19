import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function Profile() {
  return (
    <>
      <Header />
      <div className="card d-flex align-items-center justify-content-center mt-5 pt-5">
        <img
          src="/public/Images/logo.jpeg"
          className="card-img-top rounded-circle"
          alt="Profile"
          style={{ width: "150px", height: "150px", objectFit: "cover" }}
        />
        <div className="card-body text-center">
          <h5 className="card-title">John Doe</h5>
          <p className="card-text">Software Developer</p>
          <ul className="list-group list-group-flush text-left">
            <li className="list-group-item">Email: johndoe@example.com</li>
            <li className="list-group-item">Phone: +1 123 456 7890</li>
            <li className="list-group-item">Location: New York, USA</li>
          </ul>
          <a href="#" className="btn btn-primary">
            View Profile
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
