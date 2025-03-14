import StylishPageBuilder from "../StylishPageBuilder";
import SustainableFarm from "../SustainableFarm";
import "./style.css";

function PageLayoutBuilder() {
  return (
    <div className="hierarchical-content-container">
      <StylishPageBuilder />
      <SustainableFarm />
    </div>
  );
}

export default PageLayoutBuilder;
