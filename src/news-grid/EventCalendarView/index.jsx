import { Button } from "@mui/base";
import HarvestCard from "../HarvestCard";
import "./style.css";

function EventCalendarView() {
  return (
    <div className="food-production-card1">
      <img src="/assets/image_6ea61a12.png" className="image-container-with-date-button" />
      {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
      <Button className="green-button-with-date">05 July 2022</Button>
      <HarvestCard />
    </div>
  );
}

export default EventCalendarView;
