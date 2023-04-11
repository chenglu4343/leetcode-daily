// https://leetcode.cn/problems/minimum-score-triangulation-of-polygon/

export function minScoreTriangulation(values: number[]): number {
    const len = values.length
    const memo = new Map<number, number>()

    const dp = (start: number, end: number) => {
        if (start + 2 > end) return 0
        if (start + 2 === end) return values[start] * values[start + 1] * values[start + 2]

        const key = start * len + end

        if (!memo.has(key)) {
            let value = Infinity
            for (let k = start + 1; k < end; ++k) {
                value = Math.min(value, values[start] * values[end] * values[k] + dp(start, k) + dp(k, end))
            }
            memo.set(key, value)
        }

        return memo.get(key)
    }

    return dp(0, len - 1)
};