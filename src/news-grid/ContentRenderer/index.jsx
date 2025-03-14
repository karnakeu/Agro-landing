import ContentSection from "../ContentSection";
import "./style.css";

function ContentRenderer({ contentSectionsData }) {
  return (
    <div className="vertical-section-container">
      {contentSectionsData.map((data, index) => {
        return <ContentSection {...data} key={index} />;
      })}
    </div>
  );
}

export default ContentRenderer;
