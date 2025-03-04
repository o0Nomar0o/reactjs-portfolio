import "./footer.css";

const contacts = ["09-xxxx-xxxx-xxxx", "xxxxx@gmail.com"];
const explore = ["HOME", "ABOUT", "PROJECTS", "CONTACT"];

const FtLeft = () => {
  return (
    <div className="footer-left">
      <h3>Let's Work Together!</h3>
      <ul className="footer-contact">
        {contacts.map((contact, i) => (
          <li key={i} className="footer-contact-list">
            <p className="footer-contact-info">
              {contact}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const FtRight = () => {
  return (
    <div className="footer-right">
      <ul className="footer-explore">
        {explore.map((explore, i) => (
          <li key={i} className="footer-explore-list">
            <a href={`#${explore}`} className="footer-explore-info">
              {explore}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const FooterTop = () => {
  return (
    <div className="footer-top">
      <FtLeft />
      <FtRight />
    </div>
  );
};

const FooterToTop = () => {
  return (
    <div className="footer-to-top">
        <a href="#HOME">
      <button href="#HOME" className="button type1"></button>
        </a>
    </div>
  );
};

const FooterBottom = () => {
  return (
    <div className="footer-bottom">
      <p>&copy; Nomar, 2024</p>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="footer-container">
      <FooterTop />
      <FooterToTop />
      <FooterBottom />
    </footer>
  );
};

export default Footer;
