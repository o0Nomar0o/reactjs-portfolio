import "./contactme.css";
import maple from "./assets/Maple.svg";

const ImageDiv = () => {
  return (
    <div className="image-container">
      <img src={maple} className="image" alt="maple tree" />
    </div>
  );
};

const ContactDiv = () => {
  return (
    <div className="contact-container">
      <form className="contact-form">
        <div className="input-row">
          <input
            type="text"
            id="name"
            className="form-element"
            placeholder="Your name*"
            required
          />
          <input
            type="email"
            id="email"
            className="form-element"
            placeholder="Your email*"
            required
          />
        </div>
        <textarea
          id="message"
          className="form-element message-field"
          placeholder="Your message*"
          required
        />
        <button className="cssbuttons-io-button">
          Submit
          <div className="icon">
            <svg
              height="24"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </button>
      </form>
    </div>
  );
};

const ContactMe = () => {
  return (
    <div className="main-main-container">
      <div id="CONTACT" className="main-container">
        <ImageDiv />
        <ContactDiv />
      </div>
      <hr className="bottom-line" />
    </div>
  );
};

export default ContactMe;
