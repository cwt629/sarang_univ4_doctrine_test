import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { answerSheet } from "../constant/answersheet";

interface ChapterDropdownProps {
  chapter: number;
  handleChapterChange: (chap: number) => void;
}

const ChapterDropdown = ({
  chapter,
  handleChapterChange,
}: ChapterDropdownProps) => {
  return (
    <FormControl fullWidth sx={{ marginTop: "20px" }}>
      <InputLabel id="chapter-filter">Chapter</InputLabel>
      <Select
        labelId="chapter-filter"
        value={chapter}
        label="Chapter"
        onChange={(e) => handleChapterChange(e.target.value as number)}
      >
        {answerSheet.map((answer, index) => (
          <MenuItem key={index} value={answer.chapter}>
            제 {answer.chapter}장: {answer.title}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default ChapterDropdown;
