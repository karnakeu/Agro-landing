import SvgIcon1 from "./icons/SvgIcon1";
import SvgIcon2 from "./icons/SvgIcon2";
import SvgIcon3 from "./icons/SvgIcon3";
import SvgIcon4 from "./icons/SvgIcon4";
import SvgIcon5 from "./icons/SvgIcon5";
import SvgIcon6 from "./icons/SvgIcon6";
import SvgIcon7 from "./icons/SvgIcon7";
import "./style.css";

function ElegantWebsiteNavbar() {
  return (
    <div className="vertical-nav-container">
      <div className="header-navigation-container1">
        <div className="navigation-bar">
          <div className="flex-row-with-icon">
            <p className="main-navigation-item">Home</p>
            <SvgIcon1 className="svg-container1" />
          </div>
          <p className="main-navigation-item">About</p>
          <div className="flex-row-with-icon">
            <p className="main-navigation-item">Services</p>
            <SvgIcon2 className="svg-container1" />
          </div>
          <div className="flex-row-with-icon">
            <p className="project-title-text-style">Projects</p>
            <SvgIcon3 className="svg-container2" />
          </div>
          <div className="flex-row-with-icon">
            <p className="main-navigation-item">News</p>
            <SvgIcon4 className="svg-container1" />
          </div>
          <div className="flex-row-with-icon">
            <p className="main-navigation-item">Shop</p>
            <SvgIcon5 className="svg-container1" />
          </div>
          <p className="main-navigation-item">Contact</p>
        </div>
        <div className="header-navigation-container">
          <div className="vertical-centered-column-with-border">
            <SvgIcon6 className="svg-container3" />
          </div>
          <div className="numeric-container">
            <div className="vertical-layout-container">
              <SvgIcon7 className="svg-container4" />
            </div>
            <div className="numeric-label">
              <span className="green-badge">0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ElegantWebsiteNavbar;
