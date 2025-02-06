import { TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";

interface TestInputBlockProps {
  isSubmitted: boolean;
  answer: string;
  includes?: string[];
}

const TestInputBlock = ({
  isSubmitted,
  answer,
  includes = [],
}: TestInputBlockProps) => {
  const inputRef = useRef(null);
  const [submittedAnswer, setSubmittedAnswer] = useState<string | null>(null);

  useEffect(() => {
    if (isSubmitted) {
      setSubmittedAnswer(inputRef.current.value);
    } else {
      setSubmittedAnswer(null);
    }
  }, [isSubmitted]);

  useEffect(() => {
    setSubmittedAnswer(null);
  }, [answer, includes]);

  return (
    <InputBlockWrapper>
      {submittedAnswer ? (
        <>{submittedAnswer}</>
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
