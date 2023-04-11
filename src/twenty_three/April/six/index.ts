// https://leetcode.cn/problems/convert-to-base-2/

export function baseNeg2(n: number): string {
    if (n === 0) return '0'

    const bits = new Array(32).fill(0)

    /** 转换成-2进制 */
    for (let i = 0; i < 32 && n !== 0; ++i) {
        // 二进制末位为1
        if ((n & 1) !== 0) {
            bits[i]++;
            // i为奇数
            if ((i & 1) !== 0) {
                bits[i + 1]++;
            }
        }
        // n右移一位
        n >>= 1;
    }

    /** 处理进位 */
    let carry = 0;
    for (let i = 0; i < 32; i++) {
        const val = carry + bits[i];

        /** 奇数时为1，偶数时为0
         * 
         * val=a×x+r，此时可以得到进位 ​a=(val-r)/x
         */
        bits[i] = val & 1;

        /** 抹去尾数再除于-2 */
        carry = (val - bits[i]) / (-2);
    }

    /** 合并结果 */
    let pos = 31;
    let res = "";

    /** 找到最高位非0 */
    while (pos >= 0 && bits[pos] === 0) {
        pos--;
    }
    /** 倒过来合并 */
    while (pos >= 0) {
        res += bits[pos];
        pos--;
    }
    return res;
};