import { getCorrectedText } from "../utils/getCorrectedText";
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
  const isPerfectAnswer = () => {
    // 띄어쓰기 무시는 includes가 없는 답에 한해 진행됨... 그렇지 않은 케이스가 생기면 더 보완이 필요하다.
    if (ignoreSpace)
      return userInput.replace(/ /g, "") === answer.replace(/ /g, "");
    return userInput === answer;
  };

  const isWellIncludedAnswer = () =>
    includes.length > 0 &&
    includes.every((word: string) => userInput.includes(word));

  const getPerfectAnswerDisplay = () => (
    <b style={{ color: "var(--body-green)" }}>{userInput}</b>
  );

  const getWellIncludedAnswerDisplay = () => (
    <>
      {getHighlightedAnswerArray(userInput, includes, "var(--body-green)")}
      <br />
      <br />
      <b>[정답]</b>
      <br />
      {getHighlightedAnswerArray(answer, includes, "var(--body-blue)")}
    </>
  );

  const getWrongAnswerDisplay = () => (
    <>
      {includes.length === 0 ? (
        getCorrectedText(answer, userInput)
      ) : (
        <b style={{ color: "var(--body-red)" }}>{userInput}</b>
      )}
      <br />
      <br />
      <b>[정답]</b>
      <br />
      {getHighlightedAnswerArray(answer, includes, "var(--body-blue)")}
    </>
  );

  return (
    <div>
      {isPerfectAnswer()
        ? getPerfectAnswerDisplay()
        : isWellIncludedAnswer()
        ? getWellIncludedAnswerDisplay()
        : getWrongAnswerDisplay()}
    </div>
  );
};

export default InputCheckResult;
