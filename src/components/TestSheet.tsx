import styled from "@emotion/styled";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import { SheetContentWrapper } from "../wrapper/SheetContentWrapper";
import { TableWrapper } from "../wrapper/TableWrapper";
import Question from "./Question";
import { answerSheet } from "../constant/answersheet";
import { Answer, Verses } from "../types/Question";
import { useEffect, useState } from "react";
import TestInputBlock from "./TestInputBlock";
import { CreateRounded, Replay } from "@mui/icons-material";
import TestTipAccordion from "./TestTipAccordion";

interface TestSheepProps {
  chapter: number;
  questionNumber: number;
}

const TestSheet = ({ chapter, questionNumber }: TestSheepProps) => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmitButtonClick = () => {
    setIsSubmitted(true);
  };

  const handleRetryButtonClick = () => {
    setIsSubmitted(false);
  };

  useEffect(() => {
    setIsSubmitted(false); // 문제가 바뀔 때마다 초기화
  }, [chapter, questionNumber]);

  return (
    <SheetContentWrapper>
      <Question chapter={chapter} questionNumber={questionNumber} />
      <TestTipAccordion />
      <TableWrapper>
        <Table>
          <TableBody>
            {answerSheet[chapter - 1].questions[questionNumber].answers.map(
              (answer: Answer, index: number) => (
                <TableRow key={index}>
                  <TableCell>({index + 1})</TableCell>
                  <TableCell>
                    <TestInputBlock
                      answer={answer.text}
                      includes={answer.includes}
                      isSubmitted={isSubmitted}
                    />
                    {answer.verses &&
                      answer.verses.map((verse: Verses, verseIndex: number) => (
                        <Box
                          key={verseIndex}
                          sx={{
                            margin: "10px 0",
                            display: "flex",
                            flexWrap: "wrap",
                          }}
                        >
                          {verse.from ? (
                            <VerseChapterInputWrapper>
                              <b>말씀 주소:</b>&nbsp;
                              <TestInputBlock
                                answer={verse.from}
                                isSubmitted={isSubmitted}
                                ignoreSpace={true}
                              />
                            </VerseChapterInputWrapper>
                          ) : (
                            ""
                          )}
                          {verse.text ? (
                            <VerseContentInputWrapper>
                              <b>구절:</b>
                              <br />
                              <TestInputBlock
                                answer={verse.text}
                                isSubmitted={isSubmitted}
                              />
                            </VerseContentInputWrapper>
                          ) : (
                            ""
                          )}
                        </Box>
                      ))}
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableWrapper>
      <SubmitButtonWrapper>
        {isSubmitted ? (
          <Button
            color="primary"
            variant="outlined"
            startIcon={<Replay />}
            onClick={() => handleRetryButtonClick()}
          >
            재시도
          </Button>
        ) : (
          <Button
            color="primary"
            variant="contained"
            startIcon={<CreateRounded />}
            onClick={() => handleSubmitButtonClick()}
          >
            제출
          </Button>
        )}
      </SubmitButtonWrapper>
    </SheetContentWrapper>
  );
};

export default TestSheet;

const VerseChapterInputWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 5px 0;
`;

const VerseContentInputWrapper = styled.div`
  width: 100%;
  margin: 5px 0;
`;

const SubmitButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
`;
