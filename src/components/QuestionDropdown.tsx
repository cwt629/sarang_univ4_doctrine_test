import { FormControl, InputLabel, Select } from "@mui/material";
import {
  answerSheet,
  getIndexByChapterAndQNumber,
} from "../constant/answersheet";

interface ChapterDropdownProps {
  qIndex: number;
  handleDropdownItemChange: (index: number) => void;
}

const QuestionDropdown = ({
  qIndex,
  handleDropdownItemChange,
}: ChapterDropdownProps) => {
  return (
    <FormControl fullWidth sx={{ marginTop: "20px" }}>
      <InputLabel id="chapter-filter">Chapter</InputLabel>
      <Select
        native
        labelId="chapter-filter"
        value={qIndex}
        label="Chapter"
        onChange={(e) => handleDropdownItemChange(e.target.value as number)}
      >
        {answerSheet.map((chapterData, chapterIndex) => {
          const chapter = chapterData.chapter;
          return (
            <optgroup
              key={chapterIndex}
              label={`제 ${chapter}장: ${chapterData.title}`}
            >
              {chapterData.questions.map((question, qIndex) => (
                <option
                  key={qIndex}
                  value={getIndexByChapterAndQNumber(chapter, qIndex)}
                >
                  {question.question}
                  {/* 필수인 거 표시해두기? */}
                </option>
              ))}
            </optgroup>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default QuestionDropdown;
