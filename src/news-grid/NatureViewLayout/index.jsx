import StylishContentSection from "../StylishContentSection";
import OrganicFarmLayout from "../OrganicFarmLayout";
import "./style.css";

function NatureViewLayout() {
  return (
    <div className="flex-column-container">
      <StylishContentSection />
      <OrganicFarmLayout />
    </div>
  );
}

export default NatureViewLayout;
