import ContentSection from "../ContentSection";
import "./style.css";

function RenderContentSections({ contentSectionsData }) {
  return (
    <div className="section-container">
      {contentSectionsData.map((data, index) => {
        return <ContentSection {...data} key={index} />;
      })}
    </div>
  );
}

export default RenderContentSections;
