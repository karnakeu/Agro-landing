import { Input } from "@mui/base";
import "./style.css";

function LegalTermsComponent() {
  return (
    <div className="dark-theme-container">
      <div className="terms-of-use-container">
        <div className="terms-of-use-container2" />
        <div className="terms-of-use-container3">
          <p className="bold-heading">Terms of Use</p>
          <div className="terms-of-use-container1">
            {/* Input Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
            <Input
              slotProps={{
                root: { className: "header-with-border-left" },
                input: { className: "transparent-input-style transparent-input-style::placeholder", placeholder: "Privacy Policy", type: "text" },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LegalTermsComponent;
