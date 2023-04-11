// https://leetcode.cn/problems/shortest-common-supersequence/

export function shortestCommonSupersequence(str1: string, str2: string): string {
    const m = str1.length, n = str2.length

    /** dp[i][j]表示 str[i-m] str[j-n]的最短公共超序列的长度 */
    const dp = new Array(m + 1).fill(0).map(() => (new Array(n + 1).fill(0)))

    // 1. 填充边界值
    for (let i = 0; i <= m; ++i) {
        dp[i][n] = m - i
    }
    for (let j = 0; j <= n; ++j) {
        dp[m][j] = n - j
    }

    // 计算dp长度
    for (let i = m - 1; i >= 0; --i) {
        for (let j = n - 1; j >= 0; --j) {
            if (str1[i] === str2[j]) {
                dp[i][j] = dp[i + 1][j + 1] + 1
            } else {
                dp[i][j] = Math.min(dp[i + 1][j], dp[i][j + 1]) + 1
            }
        }
    }

    // 从dp[0][0]反手计算res的值
    let res = ''
    let t1 = 0, t2 = 0
    while (t1 < m && t2 < n) {
        if (str1[t1] === str2[t2]) {
            res += str1[t1]
            ++t1
            ++t2
        } else if (dp[t1][t2] === dp[t1 + 1][t2] + 1) {
            res += str1[t1]
            ++t1
        } else {
            res += str2[t2]
            ++t2
        }
    }

    if (t1 < m) {
        res += str1.slice(t1)
    } else if (t2 < n) {
        res += str2.slice(t2)
    }

    return res
};