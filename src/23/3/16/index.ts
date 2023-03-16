// https://leetcode.cn/problems/count-subarrays-with-median-k/

/**
 * 前缀和
 * https://juejin.cn/post/6944913393627168798
 */
export function countSubarrays(nums: number[], k: number): number {
    let total = 0
    const kIndex = nums.findIndex(item => item === k)

    /** 
     * 可作为子数组起始下标的index对应的前缀和出现的个数 
     * key：前缀和
     * value：个数
     */
    const sumCount = new Map<number, number>()
    sumCount.set(0, 1)

    /** [0-i]的前缀和，大于k的数字视为1，小于k的数字视为-1，k视为0 */
    let sum = 0
    nums.forEach((num, index) => {
        sum += num > k ? 1 : (num === k ? 0 : -1)
        if (index < kIndex) {
            sumCount.set(sum, (sumCount.get(sum) || 0) + 1)
        } else {
            /** 前缀和为0或者1都可满足题目要求 */
            total += (sumCount.get(sum) || 0) + (sumCount.get(sum - 1) || 0)
        }
    })

    return total
};