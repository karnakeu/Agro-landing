import ContactInfoSection from "../ContactInfoSection";
import "./style.css";

function ContactSection() {
  return (
    <div className="full-width-container">
      <p className="contact-title">Contact</p>
      <div className="contact-info-section2">
        <div className="green-border-header" />
        <div className="image-container">
          <img src="/assets/image_262a9bf7.png" alt="" className="border-box-image" />
        </div>
      </div>
      <ContactInfoSection />
    </div>
  );
}

export default ContactSection;
