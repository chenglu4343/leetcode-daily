// https://leetcode.cn/problems/number-of-arithmetic-triplets/

export function arithmeticTriplets(nums: number[], diff: number) {
    const set = new Set(nums);
    let ans = 0;
    for (const x of nums) {
        if (set.has(x + diff) && set.has(x + 2 * diff)) {
            ans++;
        }
    }
    return ans;
};