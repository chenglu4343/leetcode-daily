// https://leetcode.cn/problems/masking-personal-information/

export function maskPII(s: string): string {
    if (s.includes('@')) {
        return s.toLowerCase()
            .split('@')
            .map((item, index) => index === 0 ? item[0] + '*****' + item.at(-1) : item)
            .join('@')
    }

    const number = s.replace(/[\s\(\)\+\-]/g, '')

    switch (number.length) {
        case 10: return `***-***-${number.slice(6)}`
        case 11: return `+*-***-***-${number.slice(7)}`
        case 12: return `+**-***-***-${number.slice(8)}`
        case 13: return `+***-***-***-${number.slice(9)}`
    }

    return ''
};