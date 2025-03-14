import EmailContactWidget from "../EmailContactWidget";
import AddressSection from "../AddressSection";
import SvgIcon1 from "./icons/SvgIcon1";
import SvgIcon2 from "./icons/SvgIcon2";
import SvgIcon3 from "./icons/SvgIcon3";
import SvgIcon4 from "./icons/SvgIcon4";
import "./style.css";

function ContactInfoSection1() {
  return (
    <div className="contact-info-container5">
      <div className="green-bar-separator" />
      <div className="header-divider-bar" />
      <div className="golden-highlight-bar" />
      <div className="contact-info-section3">
        <div className="contact-info-card">
          <img src="/assets/image_b2563bc0.png" className="image-container1" />
        </div>
        <div className="contact-info-container2">
          <div className="card-container">
            <SvgIcon1 className="svg-container" />
          </div>
          <div className="card-container">
            <SvgIcon2 className="svg-container" />
          </div>
          <div className="card-container">
            <SvgIcon3 className="svg-container" />
          </div>
          <div className="card-container">
            <SvgIcon4 className="svg-container" />
          </div>
        </div>
        <div className="contact-info-section4">
          <div className="contact-info-container4">
            <p className="contact-info-heading">Call anytime</p>
            <p className="contact-info-text-style">+ 98 (000) - 9630</p>
          </div>
          <EmailContactWidget />
          <AddressSection />
        </div>
      </div>
    </div>
  );
}

export default ContactInfoSection1;
