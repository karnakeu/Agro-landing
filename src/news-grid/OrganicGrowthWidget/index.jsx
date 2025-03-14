import SvgIcon1 from "./icons/SvgIcon1";
import SvgIcon2 from "./icons/SvgIcon2";
import "./style.css";

function OrganicGrowthWidget() {
  return (
    <div className="organic-farming-container">
      <div className="flex-row-with-icon">
        <div className="flex-row-with-icon">
          <SvgIcon1 className="svg-container5" />
          <div className="gray-box-with-text" />
        </div>
        <div className="comment-container">
          <SvgIcon2 className="svg-container5" />
          <p className="comment-count-text-style">0 Comments</p>
        </div>
      </div>
      <p className="urban-food-heading">
        We grow products
        <br />
        with the organic
        <br />
        farming
      </p>
    </div>
  );
}

export default OrganicGrowthWidget;
