import ContentDisplaySection from "../ContentDisplaySection";
import UrbanFoodNews from "../UrbanFoodNews";
import ContactSection from "../ContactSection";
import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";

function ContentLayout({ contentSectionsData }) {
  return (
    <div className="dark-theme-container1">
      <div className="main-content-container">
        <ContentDisplaySection contentSectionsData={contentSectionsData} />
        <UrbanFoodNews />
        <div className="contact-info-section1">
          <ContactSection />
          <div className="email-input-container1">
            <p className="address-info">Your Email Address</p>
            <div className="email-input-container">
              <SvgIcon1 className="svg-container5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentLayout;
