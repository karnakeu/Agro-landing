import ContentDisplay from "../ContentDisplay";
import RenderContentSections from "../RenderContentSections";
import "./style.css";

function ContentDisplaySection({ contentSectionsData }) {
  return (
    <div className="primary-content-container">
      <div className="content-container">
        <img src="/assets/image_dc371865.png" className="image-container1" />
        <ContentDisplay />
      </div>
      <div className="vertical-centered-section1">
        <p className="main-heading-style">Explore</p>
        <div className="vertical-centered-section">
          <div className="green-border-header" />
          <div className="image-container">
            <img src="/assets/image_262a9bf7.png" alt="" className="border-box-image" />
          </div>
        </div>
        <RenderContentSections contentSectionsData={contentSectionsData} />
      </div>
    </div>
  );
}

export default ContentDisplaySection;
