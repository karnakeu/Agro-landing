import ContentLayoutWidget from "../ContentLayoutWidget";
import PrivacyTermsInput from "../PrivacyTermsInput";
import "./style.css";

function ContentPrivacyWidget({ contentSectionsData }) {
  return (
    <div className="central-content-container">
      <ContentLayoutWidget contentSectionsData={contentSectionsData} />
      <PrivacyTermsInput />
    </div>
  );
}

export default ContentPrivacyWidget;
