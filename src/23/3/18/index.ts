// https://leetcode.cn/problems/split-two-strings-to-make-palindrome/

export function checkPalindromeFormation(a: string, b: string): boolean {
    return checkConcatnation(a, b) || checkConcatnation(b, a)
};

function checkConcatnation(a: string, b: string) {
    let left = 0, right = a.length - 1
    while (right > left && a[left] === b[right]) {
        ++left;
        --right
    }

    return left >= right || checkSelfPalindrome(a, left, right) || checkSelfPalindrome(b, left, right)
}

function checkSelfPalindrome(str: string, left: number, right: number) {
    while (right > left && str[left] === str[right]) {
        --right;
        ++left
    }

    return left >= right
}