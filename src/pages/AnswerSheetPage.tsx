import {
  Box,
  Chip,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { answerSheet } from "../constant/answersheet";
import {
  ArrowBack,
  ArrowForward,
  PriorityHighRounded,
} from "@mui/icons-material";
import styled from "@emotion/styled";
import { Answer, Verses } from "../types/Question";
import Necessary from "../common/Necessary";

const AnswerSheetPage = () => {
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

  const getHighlightedAnswerArray = (answer: string, includes: string[]) => {
    // 정규식 패턴 생성 (단어 경계를 유지하기 위해 \b 사용, 특수문자 이스케이프 필요)
    const regex = new RegExp(
      `(${includes
        .map((word) => word.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"))
        .join("|")})`,
      "gi"
    );

    // 문자열을 정규식 기준으로 나누고 매칭된 부분을 <Necessary> 태그로 감싸기
    const parts = answer.split(regex);
    return parts.map((part, index) =>
      includes.some((word) => word.toLowerCase() === part.toLowerCase()) ? (
        <Necessary key={index}>{part}</Necessary>
      ) : (
        part
      )
    );
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "30px",
      }}
    >
      <Box sx={{ width: "100%" }}>
        <Typography
          sx={{ textAlign: "center", fontSize: "2rem", fontWeight: "bolder" }}
        >
          제자훈련 교리시험
        </Typography>
        <Typography sx={{ textAlign: "right", fontSize: "0.8rem" }}>
          Powered by HAWRO
        </Typography>
      </Box>

      <FormControl fullWidth>
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
      <SheetWrapper>
        <PrevArrowWrapper>
          <IconButton
            disabled={chapter === 1 && questionNumber === 0}
            onClick={() => handlePrevQuestionClick()}
          >
            <ArrowBack />
          </IconButton>
        </PrevArrowWrapper>
        <Box
          sx={{
            width: "100%",
            margin: "20px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          {answerSheet[chapter - 1].questions[questionNumber].necessary ? (
            <Chip
              icon={<PriorityHighRounded />}
              label="반드시 출제되는 항목!!"
              color="primary"
              size="small"
            />
          ) : (
            ""
          )}
          <Typography
            sx={{
              width: "100%",
              fontSize: "1.2rem",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            Q. {answerSheet[chapter - 1].questions[questionNumber].question}
          </Typography>

          <TableWrapper>
            <Table>
              <TableBody>
                {answerSheet[chapter - 1].questions[questionNumber].answers.map(
                  (answer: Answer, index: number) => (
                    <TableRow key={index}>
                      <TableCell sx={{ width: "5%" }}>({index + 1})</TableCell>
                      <TableCell sx={{ width: "95%" }}>
                        {getHighlightedAnswerArray(
                          answer.text,
                          answer.includes
                        )}
                        {answer.verses &&
                          answer.verses.map(
                            (verse: Verses, innerindex: number) => (
                              <Box
                                key={"v" + innerindex}
                                sx={{
                                  margin: "10px 0",
                                  display: "flex",
                                  flexWrap: "wrap",
                                }}
                              >
                                {verse.from ? (
                                  <Box sx={{ width: "100%" }}>
                                    <b>말씀 주소: </b>
                                    {verse.from}
                                  </Box>
                                ) : (
                                  ""
                                )}
                                {verse.text ? (
                                  <Box sx={{ width: "100%" }}>
                                    <b>구절: </b>
                                    {verse.text}
                                  </Box>
                                ) : (
                                  ""
                                )}
                              </Box>
                            )
                          )}
                      </TableCell>
                    </TableRow>
                  )
                )}
              </TableBody>
            </Table>
          </TableWrapper>
        </Box>

        <NextArrowWrapper>
          <IconButton
            disabled={
              questionNumber >= answerSheet[chapter - 1].questions.length - 1 &&
              chapter >= answerSheet.length
            }
            onClick={() => handleNextQuestionClick()}
          >
            <ArrowForward />
          </IconButton>
        </NextArrowWrapper>
      </SheetWrapper>
    </Box>
  );
};

export default AnswerSheetPage;

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

const PrevArrowWrapper = styled.div`
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: -25px;
  background-color: beige;
  opacity: 0.7;
  border-radius: 50px;
`;

const NextArrowWrapper = styled.div`
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  right: -25px;
  background-color: beige;
  opacity: 0.7;
  border-radius: 50px;
`;

const TableWrapper = styled.div`
  & * {
    word-break: break-all;
  }
  & td:nth-of-type(1) {
    font-weight: bold;
  }
`;
