import { getHighlightedAnswerArray } from "../utils/getHighlightedAnswerArray";

interface InputCheckResultProps {
  userInput: string;
  answer: string;
  includes?: string[];
  ignoreSpace?: boolean;
}

const InputCheckResult = ({
  userInput,
  answer,
  includes = [],
  ignoreSpace = false,
}: InputCheckResultProps) => {
  const isPerfectAnswer = (text: string) => {
    // 띄어쓰기 무시는 includes가 없는 답에 한해 진행됨... 그렇지 않은 케이스가 생기면 더 보완이 필요하다.
    if (ignoreSpace) return text.replace(/ /g, "") === answer.replace(/ /g, "");
    return text === answer;
  };

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
