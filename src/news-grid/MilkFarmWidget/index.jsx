import { Button } from "@mui/base";
import MilkProductionSolution from "../MilkProductionSolution";
import "./style.css";

function MilkFarmWidget() {
  return (
    <div className="food-production-card1">
      <img src="/assets/image_c1d68a0d.png" className="image-container-with-date-button" />
      {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
      <Button className="green-button-with-date">05 July 2022</Button>
      <MilkProductionSolution />
    </div>
  );
}

export default MilkFarmWidget;
