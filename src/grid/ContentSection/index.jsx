import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";

function ContentSection({ sanitizedHtmlContent1, sectionTitle }) {
  return (
    <div className="flex-row-with-icon">
      <SvgIcon1 className="svg-container6" sanitizedHtmlContent1={sanitizedHtmlContent1} />
      <p className="section-title-text-styler">{sectionTitle}</p>
    </div>
  );
}

export default ContentSection;
