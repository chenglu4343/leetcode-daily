// https://leetcode.cn/problems/shortest-subarray-to-be-removed-to-make-array-sorted/

export function findLengthOfShortestSubarray(arr: number[]): number {
    /** 求得j arr[j- (n-1)]数组是非递减的  */
    let j = arr.length - 1
    while (arr[j] >= arr[j - 1]) {
        --j
    }

    if (j === 0) return 0

    /** 最后返回的删除子数组的长度，最坏情况为只有arr[j- (n-1)] */
    let res = j

    /** 
     * 遍历得到arr[0 - i] 与 子数组arr[k - n] 为一个合法的结果输出，删除的子数组为arr[i+1 , k-1]
     * 
     * 遍历i从0到j，求 满足arr[0 - i] 的最长子数组arr[k - n]
     *  */
    for (let i = 0; i < arr.length; ++i) {
        /** arr[i] < arr[i-1] arr[0 - i]数组不符合要求，后续不再需要遍历 */
        if (arr[i] < arr[i - 1]) break

        /** 找到满足条件的最大的k，即 arr[k - n]最长*/
        for (let k = j; k <= arr.length; ++k) {
            if (arr[k] >= arr[i] || k === arr.length) {
                res = Math.min(res, k - i - 1)
                break;
            }
        }
    }
    return res
};