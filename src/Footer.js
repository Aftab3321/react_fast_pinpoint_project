import IbaLogo from "./assets/images/iba logo.png";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="section">
          <div className="container">
            <div className="footer">
              <div className="footer-logo">
                <img src={IbaLogo} />
              </div>
              <div className="footer-info">
                <p>All copy rights are reserved by Sukkur IBA University</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
