// https://leetcode.cn/problems/best-team-with-no-conflicts/

export function bestTeamScore(scores: number[], ages: number[]): number {
    const n = scores.length
    /** 
     * people[i][0]表示第i个球员的成绩 
     * people[i][1]表示第i个球员的年龄
     * 数组俺分数升序，分数相同俺年龄升序
     */
    const people = new Array(n)
        .fill(0)
        .map((_, index) => [scores[index], ages[index]])
        .sort((first, second) => first[0] !== second[0] ? first[0] - second[0] : first[1] - second[1])

    /** 
     * 动态规划数组
     * dp[i]表示前i个球员在people[i]一定加入的情况下的最高分数
     */
    const dp = new Array(n).fill(0)

    /** 从i=0开始逐步添加球员 */
    for (let i = 0; i < n; ++i) {
        /** 
         * 查看过往组建的队伍，是否能加入
         * 
         * 因为过往组建的第j个队伍一定包含第j个球员
         * 所以people[j]的分数一定是dp[j]队伍中最高的，年龄也是最大的
         *      分数比people[j]高的排序在people[j]的后面
         *      年龄比people[j]高的，要么无法加入队伍，要么成绩相同年龄更大也排在后面
         * 
         * 确保people[i]的年龄不会大于dp[j]的所有人即可加入dp[j]的队伍，也就是people[i]的年龄不大于people[j]，新队伍成立
         */
        for (let j = i - 1; j >= 0; --j) {
            /** 确保年龄不会大于people[j] */
            if (people[j][1] <= people[i][1]) {
                dp[i] = Math.max(dp[i], dp[j])
            }
        }
        dp[i] += people[i][0]
    }

    return Math.max(...dp)
};