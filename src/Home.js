import Navbar from "./Navbar";
import HeroImage from "./assets/images/heroImage.png";
import "./assets/images/css/global.css";
import IbaLogo from "./assets/images/iba logo.png";
import Footer from "./Footer";


const Body = () => {
  return (
    <>
      <Navbar />

      <div className="heroImage">
        <img src={HeroImage} />
      </div>
      <div className="secondSection section">
        <div className="container">
          <div className="section-container">
            <div className="title-container">
              <h2 className="title">
                The Fast PinPoint <br />{" "}
                <span className="primarySpan">Get Started </span> <br />
                Tracking and Reservation
              </h2>
            </div>
            <div className="second-section-logo">
              <p>Get Started</p>
            </div>
          </div>
          <div className="container">
            <p className="f-6">
              Pinpoint is the fastest tracking and reservation software solution
              for personal and enterprise vehicles for institutes, offices and
              companies with live tracking, history recording, estimated arrival
              time and usage report generation and much more features
            </p>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="information">
            <a href="#" className="btn">
              5000 Users
            </a>
            <a href="#" className="btn">
              10 Trusted Clients
            </a>
            <a href="#" className="btn">
              10k+ Downloads
            </a>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="third-section">
            <div className="third-title">
              <h2>
                Pinpoint Security, ensure the best usage for the institutes
              </h2>
            </div>
            <div className="third-para">
              <p>
                We ensure the best usage for vehicles tracking and reservation
                system security with advance encryption standards and capability
                of keeping your assets like car, points much more secure with
                the live tracking system
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="get-started">
            <a href="#" className="btn">
              Get Started
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Body;