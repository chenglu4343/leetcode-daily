// https://leetcode.cn/problems/count-sorted-vowel-strings/

export function countVowelStrings(n: number): number {
    /**
     * dp[i][j] 标识有 i+1 位长度，j+1 个元音组成的按字典序列排序的字符串数量
     * dp[i][j] = dp[i-1][j-0] + dp[i-1][j-1] + ... + 一值加导j-offset 0
     *    推到得  dp[i][j] = dp[i-1][j] + dp[i][j-1]
     * dp[0][j] = j+1
     * dp[i][0] = 1
     * 
     * 进一步推到得到一维数组
     * 第i次循环的dp[j]表示有i位的长度，j+1个元音组成的按字典序列排序的字符串数量
     *  */
    const dp = new Array(5).fill(1)

    for (let i = 0; i < n; ++i) {
        for (let j = 1; j < 5; ++j) {
            dp[j] += dp[j - 1]
        }
    }

    return dp.at(-1)
};

function countVowelStrings2(n: number): number {
    /**
     * dp[i][j] 标识有 i+1 位长度，j+1 个元音组成的按字典序列排序的字符串数量
     * dp[i][j] = dp[i-1][j-0] + dp[i-1][j-1] + ... + 一值加导j-offset 0
     *    推到得  dp[i][j] = dp[i-1][j] + dp[i][j-1]
     * dp[0][j] = j+1
     * dp[i][0] = 1
     *  */
    const dp = new Array(n).fill(0).map(() => new Array(5).fill(0))
    for (let j = 0; j < 5; ++j) {
        dp[0][j] = j + 1
    }
    for (let i = 1; i < n; ++i) {
        dp[i][0] = 1
    }

    for (let i = 1; i < n; ++i) {
        for (let j = 1; j < 5; ++j) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        }
    }

    return dp[n - 1][4]
};