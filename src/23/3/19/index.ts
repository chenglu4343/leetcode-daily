export function findLexSmallestString(s: string, a: number, b: number): string {
    const strSet = new Set<string>()
    const rotateSet = new Set<number>()

    /** 先旋转 */
    for (let rotate = 0; !rotateSet.has(rotate); rotate = (rotate + b) % s.length) {
        rotateSet.add(rotate)

        const rotatedStr = new Array(s.length).fill('').map((item, index) => s.charAt((index + rotate) % s.length)).join('')

        /** 对奇数位做变换 */
        const oddAddNumSet = new Set<number>()
        for (let oddAddNum = 0; !oddAddNumSet.has(oddAddNum); oddAddNum = (oddAddNum + a) % 10) {
            oddAddNumSet.add(oddAddNum)

            const oddAddedStr = rotatedStr.split('').map((item, index) => index % 2 === 0 ? item : (+item + oddAddNum) % 10).join('')
            strSet.add(oddAddedStr)

            /** 单独对偶数位的数字做增加 */
            if (b % 2 !== 0) {
                const unevenAddNumSet = new Set<number>()
                for (let unevenAddNum = 0; !unevenAddNumSet.has(unevenAddNum); unevenAddNum = (unevenAddNum + a) % 10) {
                    unevenAddNumSet.add(unevenAddNum)
                    strSet.add(oddAddedStr.split('').map((item, index) => index % 2 !== 0 ? item : (+item + unevenAddNum) % 10).join(''))
                }
            }
        }
    }

    return [...strSet.values()].reduce((pre, curr) => {
        if (Number(curr) < Number(pre)) {
            return curr
        }
        return pre
    }, 'Infinity')
};