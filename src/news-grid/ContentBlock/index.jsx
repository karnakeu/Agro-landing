import SvgIcon1 from "./icons/SvgIcon1";
import SvgIcon2 from "./icons/SvgIcon2";
import SvgIcon3 from "./icons/SvgIcon3";
import SvgIcon4 from "./icons/SvgIcon4";
import "./style.css";

function ContentBlock() {
  return (
    <div className="vertical-centered-text-with-sv-gs">
      <p className="content-block-style">
        There are many variations of passages
        <br />
        of lorem ipsum available, but the
        <br />
        majority suffered.
      </p>
      <div className="text-group-container">
        <div className="card-container">
          <SvgIcon1 className="svg-container6" />
        </div>
        <div className="card-container">
          <SvgIcon2 className="svg-container6" />
        </div>
        <div className="card-container">
          <SvgIcon3 className="svg-container6" />
        </div>
        <div className="card-container">
          <SvgIcon4 className="svg-container6" />
        </div>
      </div>
    </div>
  );
}

export default ContentBlock;
