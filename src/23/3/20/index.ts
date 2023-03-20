// https://leetcode.cn/problems/numbers-with-repeated-digits/

export function numDupDigitsAtMostN(n: number): number {
    const nArr = String(n).split('').map(Number)
    const numSet = new Set<number>()
    let uniqueTotal = 0

    /**
     * 
     * @param currentIndex 当前填的位数
     * @param isMax 之前的位数是否填到最大了，例如n为245，前面已经填了24
     * @param isZero 当前位置的前面是否全是0
     */
    const f = (currentIndex: number, isMax: boolean, isZero: boolean) => {
        if (currentIndex >= nArr.length) return
        for (let num = (isMax ? nArr[currentIndex] : 9); num >= 0; --num) {
            if (numSet.has(num)) continue
            else {
                currentIndex === nArr.length - 1 && ++uniqueTotal
                if (!isZero || num !== 0) {
                    numSet.add(num)
                }
                f(currentIndex + 1, isMax && num === nArr[currentIndex], isZero && num === 0)
                numSet.delete(num)
            }
        }
    }

    f(0, true, true)

    return n + 1 - uniqueTotal
};