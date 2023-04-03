// https://leetcode.cn/problems/previous-permutation-with-one-swap/
export function prevPermOpt1(arr: number[]): number[] {
    const record = new Map<number, number>()
    for (let i = arr.length - 1; i >= 0; --i) {
        const findItem = [...record.keys()].find(item => item < arr[i])

        if (findItem !== undefined) {
            const preIndex = record.get(findItem)

            const temp = arr[preIndex]
            arr[preIndex] = arr[i]
            arr[i] = temp

            return arr
        }

        record.set(arr[i], i)
    }
    return arr
};