import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";

function ContentSection({ sanitizedHtmlContent1, sectionTitleOrCategory }) {
  return (
    <div className="flex-row-with-icon">
      <SvgIcon1 className="svg-container7" sanitizedHtmlContent1={sanitizedHtmlContent1} />
      <p className="section-title-text-style">{sectionTitleOrCategory}</p>
    </div>
  );
}

export default ContentSection;
