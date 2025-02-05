import styled from "@emotion/styled";
import { answerSheet } from "../constant/answersheet";
import { Chip } from "@mui/material";
import { PriorityHighRounded } from "@mui/icons-material";

interface QuestionProps {
  chapter: number;
  questionNumber: number;
}

const Question = ({ chapter, questionNumber }: QuestionProps) => {
  return (
    <QuestionWrapper>
      Q. {answerSheet[chapter - 1].questions[questionNumber].question}
      {answerSheet[chapter - 1].questions[questionNumber].necessary ? (
        <Chip icon={<PriorityHighRounded />} label="필수" color="primary" />
      ) : (
        ""
      )}
    </QuestionWrapper>
  );
};

export default Question;

const QuestionWrapper = styled.div`
  width: 100%;
  font-size: 1.2rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`;
