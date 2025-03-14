import { Button } from "@mui/base";
import UrbanFoodWidget from "../UrbanFoodWidget";
import "./style.css";

function UrbanFoodDisplay() {
  return (
    <div className="food-production-card1">
      <img src="/assets/image_c4a85708.png" className="image-container-with-date-button" />
      {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
      <Button className="green-button-with-date">05 July 2022</Button>
      <UrbanFoodWidget />
    </div>
  );
}

export default UrbanFoodDisplay;
