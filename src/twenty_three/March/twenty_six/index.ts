// https://leetcode.cn/problems/find-subarrays-with-equal-sum/

export function findSubarrays(nums: number[]): boolean {
    const sumSet = new Set<number>()
    for (let i = 0; i < nums.length - 1; ++i) {
        const sum = nums[i] + nums[i + 1]
        if (sumSet.has(sum)) {
            return true
        }
        sumSet.add(sum)
    }
    return false
};