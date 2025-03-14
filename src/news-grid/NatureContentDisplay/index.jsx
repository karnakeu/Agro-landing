import NatureViewLayout from "../NatureViewLayout";
import ContentPrivacyWidget from "../ContentPrivacyWidget";
import "./style.css";

function NatureContentDisplay({ contentSectionsData }) {
  return (
    <div className="main-content-container">
      <NatureViewLayout />
      <ContentPrivacyWidget contentSectionsData={contentSectionsData} />
    </div>
  );
}

export default NatureContentDisplay;
