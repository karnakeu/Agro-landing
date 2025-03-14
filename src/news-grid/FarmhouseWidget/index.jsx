import { Button } from "@mui/base";
import FutureFarmView from "../FutureFarmView";
import "./style.css";

function FarmhouseWidget() {
  return (
    <div className="futuristic-card">
      <img src="/assets/image_bb5f8586.png" className="image-container-with-date-button" />
      {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
      <Button className="green-button-with-date">05 July 2022</Button>
      <FutureFarmView />
    </div>
  );
}

export default FarmhouseWidget;
