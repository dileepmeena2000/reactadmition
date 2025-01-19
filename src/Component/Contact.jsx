import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function Contact() {
  return (
    <>
    <Header/>
      {/* <!-- Contact Us --> */}
      <section id="contact">
        <div className="container">
          <div className="py-5 text-center">
            <h2 className="mt-5 pt-5">Know More</h2>
            <p className="lead">We are available to assist you anytime.</p>
          </div>

          <div className="row g-5">
            <div className="col-md-5 col-lg-4 order-md-last">
              <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span>Location</span>
              </h4>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114566.12366376573!2d78.05655149726559!3d26.190452499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c38cbfab5ebd%3A0x32bb0d277b5bc9d8!2sMaharana%20Pratap%20College%20of%20Technology%2C%20Gwalior!5e0!3m2!1sen!2sin!4v1698776631524!5m2!1sen!2sin"
                width="100%"
                height="50%"
                style={{border:"0"}}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="col-md-7 col-lg-8">
              <h4 className="mb-3">Contact Us!</h4>
              <form className="needs-validation" novalidate="">
                <div className="row g-3 paddingValue">
                  <div className="col-sm-6">
                    <label for="firstName" className="form-label">
                      First name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      placeholder=""
                      value=""
                      required=""
                    />
                    <div className="invalid-feedback">
                      Valid first name is required.
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <label for="lastName" className="form-label">
                      Last name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      placeholder=""
                      value=""
                      required=""
                    />
                    <div className="invalid-feedback">
                      Valid last name is required.
                    </div>
                  </div>

                  <div className="col-12">
                    <label for="username" className="form-label">
                      Username
                    </label>
                    <div className="input-group has-validation">
                      <span className="input-group-text">@</span>
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        placeholder="Username"
                        required=""
                      />
                      <div className="invalid-feedback">
                        Your username is required.
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <label for="email" className="form-label">
                      Email{" "}
                      <span className="text-body-secondary">(Optional)</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="you@example.com"
                    />
                    <div className="invalid-feedback">
                      Please enter a valid email address for shipping updates.
                    </div>
                  </div>

                  <div className="col-12">
                    <label for="address" className="form-label">
                      Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      placeholder="1234 Main St"
                      required=""
                    />
                    <div className="invalid-feedback">
                      Please enter your shipping address.
                    </div>
                  </div>

                  <div className="col-12">
                    <label for="address2" className="form-label">
                      Address 2{" "}
                      <span className="text-body-secondary">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="address2"
                      placeholder="Apartment or suite"
                    />
                  </div>

                  <div className="col-md-5">
                    <label for="country" className="form-label">
                      Country
                    </label>
                    <select className="form-select" id="country" required="">
                      <option value="">Choose...</option>
                      <option>United States</option>
                    </select>
                    <div className="invalid-feedback">
                      Please select a valid country.
                    </div>
                  </div>

                  <div className="col-md-4">
                    <label for="state" className="form-label">
                      State
                    </label>
                    <select className="form-select" id="state" required="">
                      <option value="">Choose...</option>
                      <option>California</option>
                    </select>
                    <div className="invalid-feedback">
                      Please provide a valid state.
                    </div>
                  </div>
                </div>

                <hr className="my-4" />

                <div className="form-check paddingValue">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="save-info"
                  />
                  <label className="form-check-label" for="save-info">
                    Save this information for next time
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Contact Us --> */}
      <Footer/>
    </>
  );
}

export default Contact;
