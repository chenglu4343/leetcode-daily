// https://leetcode.cn/problems/count-substrings-that-differ-by-one-character/

export function countSubstrings(s: string, t: string): number {
    let ans = 0
    const m = s.length
    const n = t.length
    /** 遍历 s 从 i 开头所有连续子串 s[i-m] */
    for (let i = 0; i < m; ++i) {
        /** 遍历 t 的所有从j开头的连续字串t */
        for (let j = 0; j < n; ++j) {
            let diff = 0

            /** 计算偏移量 */
            for (let offset = 0; offset < Math.min(m - i, n - j); ++offset) {
                s[i + offset] !== t[j + offset] && ++diff
                diff === 1 && ++ans
                if (diff > 1) {
                    break
                }
            }

        }
    }
    return ans
};