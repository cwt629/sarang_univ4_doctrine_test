import { TextField } from "@mui/material";
import { useLayoutEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import InputCheckResult from "./InputCheckResult";

interface TestInputBlockProps {
  isSubmitted: boolean;
  answer: string;
  includes?: string[];
  ignoreSpace?: boolean;
}

const TestInputBlock = ({
  isSubmitted,
  answer,
  includes = [],
  ignoreSpace = false,
}: TestInputBlockProps) => {
  const inputRef = useRef(null);
  const [submittedAnswer, setSubmittedAnswer] = useState<string | null>(null);

  useLayoutEffect(() => {
    if (isSubmitted) {
      setSubmittedAnswer(inputRef.current.value);
    } else {
      setSubmittedAnswer(null);
    }
  }, [isSubmitted]);

  useLayoutEffect(() => {
    setSubmittedAnswer(null); // 다른 문제로 넘어갈 때마다 초기화
  }, [answer]);

  return (
    <InputBlockWrapper>
      {submittedAnswer !== null ? (
        <InputCheckResult
          userInput={submittedAnswer}
          answer={answer}
          includes={includes}
          ignoreSpace={ignoreSpace}
        />
      ) : (
        <TextField
          label="답안"
          fullWidth
          multiline
          size="small"
          inputRef={inputRef}
        />
      )}
    </InputBlockWrapper>
  );
};

export default TestInputBlock;

const InputBlockWrapper = styled.div`
  flex: 1;
`;
