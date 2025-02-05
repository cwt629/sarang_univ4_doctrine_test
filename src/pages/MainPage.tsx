import { IconButton } from "@mui/material";
import { useState } from "react";
import { answerSheet } from "../constant/answersheet";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import styled from "@emotion/styled";
import MainTitle from "../components/MainTitle";
import ChapterDropdown from "../components/ChapterDropdown";
import AnswerSheet from "../components/AnswerSheet";

const MainPage = () => {
  const [chapter, setChapter] = useState(1);
  const [questionNumber, setQuestionNumber] = useState(0);

  const handleChapterChange = (nextChapter: number) => {
    setChapter(nextChapter);
    setQuestionNumber(0);
  };

  const handleNextQuestionClick = () => {
    // 현 챕터의 끝인 경우
    if (
      chapter - 1 < answerSheet.length - 1 &&
      questionNumber >= answerSheet[chapter - 1].questions.length - 1
    ) {
      setChapter((prev) => prev + 1);
      setQuestionNumber(0);
      return;
    }
    setQuestionNumber((prev) => prev + 1);
  };

  const handlePrevQuestionClick = () => {
    // 현 챕터의 처음인 경우
    if (chapter > 1 && questionNumber === 0) {
      setChapter((prev) => {
        const nextChapter = prev - 1;
        setQuestionNumber(answerSheet[nextChapter - 1].questions.length - 1);
        return nextChapter;
      });
      return;
    }
    setQuestionNumber((prev) => prev - 1);
  };

  return (
    <MainPageWrapper>
      <MainTitle />
      <ChapterDropdown
        chapter={chapter}
        handleChapterChange={handleChapterChange}
      />

      <SheetWrapper>
        <ArrowWrapper className="prev">
          <IconButton
            disabled={chapter === 1 && questionNumber === 0}
            onClick={() => handlePrevQuestionClick()}
          >
            <ArrowBack />
          </IconButton>
        </ArrowWrapper>
        <AnswerSheet chapter={chapter} questionNumber={questionNumber} />
        <ArrowWrapper className="next">
          <IconButton
            disabled={
              questionNumber >= answerSheet[chapter - 1].questions.length - 1 &&
              chapter >= answerSheet.length
            }
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
  gap: 30px;
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
