import { Button } from "@mui/base";
import OrganicGrowthWidget from "../OrganicGrowthWidget";
import "./style.css";

function OrganicGrowthSection() {
  return (
    <div className="futuristic-card">
      <img src="/assets/image_cbb8c489.png" className="image-container-with-date-button" />
      {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
      <Button className="green-button-with-date">05 July 2022</Button>
      <OrganicGrowthWidget />
    </div>
  );
}

export default OrganicGrowthSection;
