import React from "react";

export function getCorrectedText(answer: string, input: string) {
  const m = answer.length,
    n = input.length;

  // LCS 테이블 생성
  const dp: number[][] = Array(m + 1)
    .fill(null)
    .map(() => Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (answer[i - 1] === input[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  // LCS 추적
  let i = m,
    j = n;
  const result: React.ReactNode[] = [];
  let deletedBuffer = "",
    addedBuffer = "";

  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && answer[i - 1] === input[j - 1]) {
      // 이전 삭제/추가 처리

      if (addedBuffer) {
        result.unshift(
          <b style={{ color: "var(--body-green)" }} key={`add-${i}`}>
            {addedBuffer}
          </b>
        );
        addedBuffer = "";
      }

      if (deletedBuffer) {
        result.unshift(
          <s style={{ color: "var(--body-red)" }} key={`del-${j}`}>
            {deletedBuffer}
          </s>
        );
        deletedBuffer = "";
      }

      result.unshift(answer[i - 1]); // 공통된 부분 추가
      i--;
      j--;
    } else if (j > 0 && (i === 0 || dp[i][j - 1] >= dp[i - 1][j])) {
      // 입력에만 있는 문자 > 삭제 처리
      deletedBuffer = input[j - 1] + deletedBuffer;
      j--;
    } else if (i > 0 && (j === 0 || dp[i - 1][j] >= dp[i][j - 1])) {
      // 정답에만 있는 문자 > 추가 처리
      addedBuffer = answer[i - 1] + addedBuffer;
      i--;
    }
  }

  // 마지막 남은 삭제/추가 처리
  if (deletedBuffer) {
    result.unshift(
      <s style={{ color: "var(--body-red)" }} key="final-del">
        {deletedBuffer}
      </s>
    );
  }

  if (addedBuffer) {
    result.unshift(
      <b style={{ color: "var(--body-green)" }} key="final-add">
        {addedBuffer}
      </b>
    );
  }

  return result;
}
