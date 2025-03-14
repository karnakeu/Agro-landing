import ContentDisplayWidget from "../ContentDisplayWidget";
import NewsArticleSection from "../NewsArticleSection";
import ContactSection from "../ContactSection";
import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";

function ContentLayoutWidget({ contentSectionsData }) {
  return (
    <div className="dark-theme-container">
      <div className="main-content-section">
        <ContentDisplayWidget contentSectionsData={contentSectionsData} />
        <NewsArticleSection />
        <div className="contact-info-section5">
          <ContactSection />
          <div className="email-input-container">
            <p className="address-label">Your Email Address</p>
            <div className="email-input-container1">
              <SvgIcon1 className="svg-container6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentLayoutWidget;
