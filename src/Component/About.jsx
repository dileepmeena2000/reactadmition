import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function About() {
  return (
    <>
    <Header/>
      {/* <!-- hero --> */}
      <section id="hero">
        <div className="container">
          <div className="px-4 py-5 mt-5 text-center">
            <h1 className="display-5 fw-bold text-body-emphasis">
              Lets Learn About Us
            </h1>
            <div className="col-lg-6 mx-auto">
              <p className="lead mb-4">
                The college has own well-developed state of art infrastructure.
                The Institute has been built on a land, 20 acres in area with
                construction of nearly 20,000 Sq. M. in a pollution-free
                surrounding. The campus is easily approachable from all corners
                of greater gwalior.
              </p>
            </div>
          </div>
        </div>

        <div className="container col-xxl-8 px-4 pb-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img
                src="http://www.mpct.org/images/DSCF0002.JPG"
                className="d-block mx-lg-auto img-fluid"
                alt="Bootstrap Themes"
                width="700"
                height="500"
                loading="lazy"
              />
            </div>
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
                COMPUTER CENTER
              </h1>
              <p className="lead">
                The institute has fully air-conditioned state of art Central
                Computer Center, which is available to students of all branches
                and the staff during and after college hours. It is equipped
                with 100 no. of the latest PC's and licensed software. Apart
                from the Central computing facility there are separate computer
                centers in each department.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Hero --> */}
      <Footer/>
    </>
  );
}

export default About;
