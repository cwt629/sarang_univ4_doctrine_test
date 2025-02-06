export const getHighlightedAnswerArray = (
  answer: string,
  includes: string[],
  color: string
) => {
  // 정규식 패턴 생성 (단어 경계를 유지하기 위해 \b 사용, 특수문자 이스케이프 필요)
  const regex = new RegExp(
    `(${includes
      .map((word) => word.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"))
      .join("|")})`,
    "gi"
  );

  // 문자열을 정규식 기준으로 나누고 매칭된 부분을 <Necessary> 태그로 감싸기
  const parts = answer.split(regex);
  return parts.map((part, index) =>
    includes.some((word) => word.toLowerCase() === part.toLowerCase()) ? (
      <b key={index} style={{ color: color }}>
        {part}
      </b>
    ) : (
      part
    )
  );
};
