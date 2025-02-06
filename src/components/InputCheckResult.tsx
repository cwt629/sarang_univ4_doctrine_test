import { getHighlightedAnswerArray } from "../utils/getHighlightedAnswerArray";

interface InputCheckResultProps {
  userInput: string;
  answer: string;
  includes?: string[];
}

const InputCheckResult = ({
  userInput,
  answer,
  includes = [],
}: InputCheckResultProps) => {
  const isPerfectAnswer = (text: string) => text === answer;

  const isWellIncludedAnswer = (text: string) =>
    includes.length > 0 &&
    includes.every((word: string) => text.includes(word));

  const getPerfectAnswerDisplay = (text: string) => (
    <b style={{ color: "var(--body-green)" }}>{text}</b>
  );

  const getWellIncludedAnswerDisplay = (text: string) =>
    getHighlightedAnswerArray(text, includes, "var(--body-green)");

  const getWrongAnswerDisplay = (text: string) => (
    <b style={{ color: "var(--body-red)" }}>{text}</b>
  );

  return (
    <div>
      {isPerfectAnswer(userInput)
        ? getPerfectAnswerDisplay(userInput)
        : isWellIncludedAnswer(userInput)
        ? getWellIncludedAnswerDisplay(userInput)
        : getWrongAnswerDisplay(userInput)}
    </div>
  );
};

export default InputCheckResult;
