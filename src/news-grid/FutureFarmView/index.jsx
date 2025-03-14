import SvgIcon1 from "./icons/SvgIcon1";
import SvgIcon2 from "./icons/SvgIcon2";
import "./style.css";

function FutureFarmView() {
  return (
    <div className="food-production-card">
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
        The Future of
        <br />
        Farming, Smart
        <br />
        Irrigation Solutions
      </p>
    </div>
  );
}

export default FutureFarmView;
