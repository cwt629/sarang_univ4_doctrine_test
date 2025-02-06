import { TextField } from "@mui/material";
import { useRef } from "react";
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

  return (
    <InputBlockWrapper>
      <TextField
        label="답안"
        fullWidth
        multiline
        size="small"
        inputRef={inputRef}
      />
    </InputBlockWrapper>
  );
};

export default TestInputBlock;

const InputBlockWrapper = styled.div`
  flex: 1;
`;
