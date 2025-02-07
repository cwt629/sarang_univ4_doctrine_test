import { ExpandMore, TipsAndUpdatesRounded } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  Box,
  Typography,
} from "@mui/material";

const TestTipAccordion = () => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <TipsAndUpdatesRounded />
          <Typography>테스트 팁!</Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Alert severity="info">
          <ul>
            <li>
              붉은색으로 칠해진 단어가 있으면, 그 <b>단어가 무조건 포함</b>
              되어야 해요.
            </li>
            <li>
              붉은색으로 칠해진 단어가 없으면, <b>내용이 정확히 일치</b>해야
              해요.
            </li>
            <li>
              <b>말씀 주소</b>는 띄어쓰기는 상관 없어요. 다만,{" "}
              <b>물결표 대신 하이픈(-)</b>을 써주세요.
              <br />
              (ex. 창 1:1-2)
            </li>
            <li>
              <s>개발자의 한계로</s> <b>구절 안에 적혀 있는 말씀 주소는</b>{" "}
              띄어쓰기가 정확해야 해요.
              <br />
              <b>책이름과 절 사이만 띄어쓰기</b>가 있고, 그 외에는 띄어쓰기가
              없어요.
              <br />
              (ex. 창 1:1-2 말씀시작)
            </li>
            <li>
              구절 중에 <b>중략되어 있는 부분</b>은 양옆에 띄어쓰기 없이 ...을
              붙여주세요.
              <br />
              (ex. 사람을 화나게...방법은 두 가지...첫째는...)
            </li>
          </ul>
        </Alert>
      </AccordionDetails>
    </Accordion>
  );
};

export default TestTipAccordion;
