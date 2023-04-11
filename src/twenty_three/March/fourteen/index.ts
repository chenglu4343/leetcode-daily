// https://leetcode.cn/problems/find-valid-matrix-given-row-and-column-sums/

export function restoreMatrix(rowSum: number[], colSum: number[]): number[][] {
    const answer = Array.from({ length: rowSum.length })
        .map(_ => new Array(colSum.length).fill(0))

    let i = 0, j = 0

    while (i < rowSum.length && j < colSum.length) {
        answer[i][j] = Math.min(rowSum[i], colSum[j])
        rowSum[i] -= answer[i][j]
        colSum[j] -= answer[i][j]

        if (rowSum[i] === 0) {
            ++i
        }
        if (colSum[j] === 0) {
            ++j
        }
    }
    return answer
};