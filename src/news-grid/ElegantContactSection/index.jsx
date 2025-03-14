import EmailSender from "../EmailSender";
import AddressSection from "../AddressSection";
import SvgIcon1 from "./icons/SvgIcon1";
import SvgIcon2 from "./icons/SvgIcon2";
import SvgIcon3 from "./icons/SvgIcon3";
import SvgIcon4 from "./icons/SvgIcon4";
import "./style.css";

function ElegantContactSection() {
  return (
    <div className="contact-info-container2">
      <div className="green-bar-separator" />
      <div className="header-divider-bar" />
      <div className="golden-highlight-bar" />
      <div className="contact-info-section2">
        <div className="contact-info-card">
          <img src="/assets/image_b2563bc0.png" className="image-container-styles" />
        </div>
        <div className="contact-info-container4">
          <div className="text-container">
            <SvgIcon1 className="svg-container" />
          </div>
          <div className="text-container">
            <SvgIcon2 className="svg-container" />
          </div>
          <div className="text-container">
            <SvgIcon3 className="svg-container" />
          </div>
          <div className="text-container">
            <SvgIcon4 className="svg-container" />
          </div>
        </div>
        <div className="contact-info-section1">
          <div className="contact-info-container3">
            <p className="contact-info-heading">Call anytime</p>
            <p className="contact-info-heading1">+ 98 (000) - 9630</p>
          </div>
          <EmailSender />
          <AddressSection />
        </div>
      </div>
    </div>
  );
}

export default ElegantContactSection;
