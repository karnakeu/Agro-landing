import { Button } from "@mui/base";
import AgronomyDiscussion from "../AgronomyDiscussion";
import "./style.css";

function ImageDateButton() {
  return (
    <div className="futuristic-card">
      <img src="/assets/image_32c617.png" className="image-container-with-date-button" />
      {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
      <Button className="green-button-with-date">05 July 2022</Button>
      <AgronomyDiscussion />
    </div>
  );
}

export default ImageDateButton;
