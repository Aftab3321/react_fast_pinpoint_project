import Navbar from "./Navbar";
import sectionImage from "./assets/images/sectionImage.png";
import "./assets/images/css/global.css";

import Footer from "./Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="secondSection section">
        <div className="container">
          <div className="section-container">
            <div className="title-container">
              <h2 className="title">About Pinpoint</h2>
            </div>
            <div className="second-section-logo">
              <p>Get Started</p>
            </div>
          </div>
        </div>
      </div>
      <div className="Section">
        <div className="container">
          <div className="sectionImage heroImage">
            <img src={sectionImage} />
          </div>
        </div>
      </div>
      <div className="Section">
        <div className="container">
          <div className="about-section-information">
            <p>
              Pinpoint is the fastest tracking and reservation software solution
              for personal and enterprise vehicles for institutes, offices and
              companies with live tracking, history recording, estimated arrival
              time and usage report generation and much more features.
              <br /> <br />
              We ensure the best usage for vehicles tracking and reservation
              system security with advance encryption standards and capability
              of keeping your assets like car, points much more secure with the
              live tracking system
            </p>
          </div>
        </div>
      </div>

      

      <Footer />
    </>
  );
};

export default About;
