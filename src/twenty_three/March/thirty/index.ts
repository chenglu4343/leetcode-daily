// https://leetcode.cn/problems/widest-vertical-area-between-two-points-containing-no-points/

export function maxWidthOfVerticalArea(points: number[][]): number {
    return points.map(item => item[0]).sort((first, second) => first - second).reduce((pre, curr, index, arr) => {
        if (index >= 1 && curr !== arr[index - 1] && curr - arr[index - 1] > pre) {
            return curr - arr[index - 1]
        }
        return pre
    }, 0)
};