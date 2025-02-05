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
          <b style={{ color: "var(--body-blue)" }}>Test ON</b>
        ) : (
          <b style={{ color: "var(--body-gray)" }}>Test OFF</b>
        )
      }
    />
  );
};

export default TestSwitch;
