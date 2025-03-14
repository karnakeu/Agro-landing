import UrbanFoodDisplay from "../UrbanFoodDisplay";
import FarmhouseWidget from "../FarmhouseWidget";
import ImageDateButton from "../ImageDateButton";
import OrganicGrowthSection from "../OrganicGrowthSection";
import MilkFarmWidget from "../MilkFarmWidget";
import EventCalendarView from "../EventCalendarView";
import "./style.css";

function OrganicFarmLayout() {
  return (
    <div className="article-card-container1">
      <div className="content-section">
        <div className="article-card-container">
          <UrbanFoodDisplay />
          <FarmhouseWidget />
          <ImageDateButton />
        </div>
        <div className="organic-farming-section">
          <OrganicGrowthSection />
          <MilkFarmWidget />
          <EventCalendarView />
        </div>
      </div>
    </div>
  );
}

export default OrganicFarmLayout;
