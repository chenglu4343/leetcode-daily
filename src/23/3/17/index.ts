// https://leetcode.cn/problems/longest-subsequence-with-limited-sum/

export function answerQueries(nums: number[], queries: number[]): number[] {
    const sumArr = new Array(nums.length + 1).fill(0)
    nums.sort((a, b) => a - b)
    nums.forEach((num, index) => {
        sumArr[index + 1] = sumArr[index] + num
    })

    const answer = new Array(queries.length).fill(0)
    queries.forEach((query, index) => {
        answer[index] = binarySearch(sumArr, query) -1 
    })

    return answer
};

function binarySearch(arr: number[], target: number) {
    let low = 1, high = arr.length

    while (low < high) {
        const mid = low + Math.floor((high - low) / 2)
        if (arr[mid] > target) {
            high = mid
        } else {
            low = mid + 1
        }
    }

    return low
}