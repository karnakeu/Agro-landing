import SvgIcon1 from "./icons/SvgIcon1";
import SvgIcon2 from "./icons/SvgIcon2";
import SvgIcon3 from "./icons/SvgIcon3";
import "./style.css";

function ContactInfoSection() {
  return (
    <div className="contact-info-section3">
      <div className="contact-info-container">
        <SvgIcon1 className="svg-container8" />
        <p className="phone-number-text">666 888 0000</p>
      </div>
      <div className="contact-info-container1">
        <SvgIcon2 className="svg-container9" />
        <p className="email-contact-text-style">needhelp@company.com</p>
      </div>
      <div className="address-section">
        <SvgIcon3 className="svg-container10" />
        <p className="address-block">
          80 broklyn golden street line
          <br />
          New York, USA
        </p>
      </div>
    </div>
  );
}

export default ContactInfoSection;
