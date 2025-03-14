import ContentBlock from "../ContentBlock";
import ContentRenderer from "../ContentRenderer";
import "./style.css";

function ContentDisplayWidget({ contentSectionsData }) {
  return (
    <div className="featured-content-section">
      <div className="content-container">
        <img src="/assets/image_dc371865.png" className="image-container-styles" />
        <ContentBlock />
      </div>
      <div className="vertical-centered-section">
        <p className="main-title-style">Explore</p>
        <div className="vertical-centered-section-with-title">
          <div className="green-border-with-top-stripe" />
          <div className="image-container1">
            <img src="/assets/image_262a9bf7.png" alt="" className="border-box-image" />
          </div>
        </div>
        <ContentRenderer contentSectionsData={contentSectionsData} />
      </div>
    </div>
  );
}

export default ContentDisplayWidget;
