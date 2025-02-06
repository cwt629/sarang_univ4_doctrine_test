import { IconButton } from "@mui/material";
import { useMemo, useState } from "react";
import { answerIndices, IndexInfo } from "../constant/answersheet";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import styled from "@emotion/styled";
import MainTitle from "../components/MainTitle";
import QuestionDropdown from "../components/QuestionDropdown";
import AnswerSheet from "../components/AnswerSheet";
import TestSwitch from "../components/TestSwitch";
import TestSheet from "../components/TestSheet";

const MainPage = () => {
  const [isTestingMode, setIsTestingMode] = useState<boolean>(false);
  const [questionIndex, setQuestionIndex] = useState<number>(0);

  const { chapter, questionIndex: questionNumber } = useMemo<IndexInfo>(
    () => answerIndices[questionIndex],
    [questionIndex]
  );

  const handleDropdownItemChange = (nextIndex: number) => {
    setQuestionIndex(nextIndex);
  };

  const handleModeChange = (checked: boolean) => {
    setIsTestingMode(checked);
  };

  const handleNextQuestionClick = () => {
    setQuestionIndex((prev) => prev + 1);
  };

  const handlePrevQuestionClick = () => {
    setQuestionIndex((prev) => prev - 1);
  };

  return (
    <MainPageWrapper>
      <MainTitle />
      <QuestionDropdown
        qIndex={questionIndex}
        handleDropdownItemChange={handleDropdownItemChange}
      />
      <TestSwitch
        isTestingMode={isTestingMode}
        handleModeChange={handleModeChange}
      />
      <SheetWrapper>
        <ArrowWrapper className="prev">
          <IconButton
            disabled={questionIndex <= 0}
            onClick={() => handlePrevQuestionClick()}
          >
            <ArrowBack />
          </IconButton>
        </ArrowWrapper>
        {isTestingMode ? (
          <TestSheet chapter={chapter} questionNumber={questionNumber} />
        ) : (
          <AnswerSheet chapter={chapter} questionNumber={questionNumber} />
        )}
        <ArrowWrapper className="next">
          <IconButton
            disabled={questionIndex >= answerIndices.length - 1}
            onClick={() => handleNextQuestionClick()}
          >
            <ArrowForward />
          </IconButton>
        </ArrowWrapper>
      </SheetWrapper>
    </MainPageWrapper>
  );
};

export default MainPage;

const MainPageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SheetWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 0.5rem;
  margin: 8px;
  flex: 1;
  position: relative;
  box-sizing: border-box;
  overflow-y: visible;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.05) 0px 8px 32px;
`;

const ArrowWrapper = styled.div`
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  background-color: beige;
  opacity: 0.7;
  border-radius: 50px;

  &.prev {
    left: -25px;
  }

  &.next {
    right: -25px;
  }
`;
