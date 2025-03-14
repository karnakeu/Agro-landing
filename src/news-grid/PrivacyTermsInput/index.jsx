import { Input } from "@mui/base";
import "./style.css";

function PrivacyTermsInput() {
  return (
    <div className="dark-panel">
      <div className="terms-of-use-container">
        <div className="terms-of-use-container3" />
        <div className="terms-of-use-container1">
          <p className="bold-subheading">Terms of Use</p>
          <div className="terms-of-use-container2">
            {/* Input Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
            <Input
              slotProps={{ root: { className: "header-with-icon" }, input: { className: "transparent-input-style transparent-input-style::placeholder", placeholder: "Privacy Policy", type: "text" } }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyTermsInput;
