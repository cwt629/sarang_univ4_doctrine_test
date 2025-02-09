import { Box, Table, TableBody, TableCell, TableRow } from "@mui/material";
import { answerSheet } from "../constant/answersheet";
import { SheetContentWrapper } from "../wrapper/SheetContentWrapper";
import { Answer, Verses } from "../types/Question";
import { getHighlightedAnswerArray } from "../utils/getHighlightedAnswerArray";
import Question from "./Question";
import { TableWrapper } from "../wrapper/TableWrapper";

interface AnswerSheetProps {
  chapter: number;
  questionNumber: number;
}

const AnswerSheet = ({ chapter, questionNumber }: AnswerSheetProps) => {
  return (
    <SheetContentWrapper>
      <Question chapter={chapter} questionNumber={questionNumber} />
      <TableWrapper>
        <Table>
          <TableBody>
            {answerSheet[chapter - 1].questions[questionNumber].answers.map(
              (answer: Answer, index: number) => (
                <TableRow key={index}>
                  <TableCell>({index + 1})</TableCell>
                  <TableCell>
                    {getHighlightedAnswerArray(
                      answer.text,
                      answer.includes,
                      "var(--body-red)"
                    )}
                    {answer.verses &&
                      answer.verses.map((verse: Verses, innerindex: number) => (
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
                              <br />
                              {verse.text}
                            </Box>
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
    </SheetContentWrapper>
  );
};

export default AnswerSheet;
