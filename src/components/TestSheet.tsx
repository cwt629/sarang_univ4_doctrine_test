import { Table, TableBody, TableCell, TableRow } from "@mui/material";
import { SheetContentWrapper } from "../wrapper/SheetContentWrapper";
import { TableWrapper } from "../wrapper/TableWrapper";
import Question from "./Question";
import { answerSheet } from "../constant/answersheet";
import { Answer } from "../types/Question";

interface TestSheepProps {
  chapter: number;
  questionNumber: number;
}

const TestSheet = ({ chapter, questionNumber }: TestSheepProps) => {
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
                    {/* {getHighlightedAnswerArray(answer.text, answer.includes)}
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
                              {verse.text}
                            </Box>
                          ) : (
                            ""
                          )}
                        </Box>
                      ))} */}
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

export default TestSheet;
