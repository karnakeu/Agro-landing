import PageLayoutBuilder from "../PageLayoutBuilder";
import ContentLegalWrapper from "../ContentLegalWrapper";
import "./style.css";

function PageContentRenderer({ contentSectionsData }) {
  return (
    <div className="main-content-wrapper">
      <PageLayoutBuilder />
      <ContentLegalWrapper contentSectionsData={contentSectionsData} />
    </div>
  );
}

export default PageContentRenderer;
