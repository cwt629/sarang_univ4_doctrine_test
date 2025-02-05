import { FormControlLabel, Switch } from "@mui/material";

interface TestSwitchProps {
  isTestingMode: boolean;
  handleModeChange: (checked: boolean) => void;
}

const TestSwitch = ({ isTestingMode, handleModeChange }: TestSwitchProps) => {
  return (
    <FormControlLabel
      sx={{ alignSelf: "flex-start", margin: "4px 0" }}
      control={
        <Switch
          checked={isTestingMode}
          onChange={(e) => handleModeChange(e.target.checked)}
        />
      }
      label={
        isTestingMode ? (
          <b style={{ color: "#1976d2" }}>Test ON</b>
        ) : (
          <b style={{ color: "rgb(118, 118, 118)" }}>Test OFF</b>
        )
      }
    />
  );
};

export default TestSwitch;
