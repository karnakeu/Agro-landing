import ContactInfoSection from "../ContactInfoSection";
import "./style.css";

function ContactSection() {
  return (
    <div className="article-snippet">
      <p className="contact-title">Contact</p>
      <div className="contact-info-section">
        <div className="green-border-with-top-stripe" />
        <div className="image-container1">
          <img src="/assets/image_262a9bf7.png" alt="" className="border-box-image" />
        </div>
      </div>
      <ContactInfoSection />
    </div>
  );
}

export default ContactSection;
