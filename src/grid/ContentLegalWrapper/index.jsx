import ContentLayout from "../ContentLayout";
import LegalTermsComponent from "../LegalTermsComponent";
import "./style.css";

function ContentLegalWrapper({ contentSectionsData }) {
  return (
    <div className="central-content-container">
      <ContentLayout contentSectionsData={contentSectionsData} />
      <LegalTermsComponent />
    </div>
  );
}

export default ContentLegalWrapper;
