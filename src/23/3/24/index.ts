// https://leetcode.cn/problems/stream-of-characters/

// TODO:
export class StreamChecker {

    constructor(public words: string[]) {
    }

    query(letter: string): boolean {
        return this.words.some((word => word.endsWith(letter)))
    }
}

/**
 * Your StreamChecker object will be instantiated and called as such:
 * var obj = new StreamChecker(words)
 * var param_1 = obj.query(letter)
 */