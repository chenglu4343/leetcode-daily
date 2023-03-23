// https://leetcode.cn/problems/arithmetic-subarrays/

export function checkArithmeticSubarrays(nums: number[], l: number[], r: number[]): boolean[] {
    return new Array(l.length).fill(false).map((_, index) => {
        const arr = nums.slice(l[index], r[index] + 1).sort((a, b) => a - b)
        const step = (arr.at(-1) - arr[0]) / (arr.length - 1)
        for (let i = 0; i < arr.length - 1; ++i) {
            if (arr[i] + step !== arr[i + 1]) {
                return false
            }
        }
        return true
    })
};