import { describe, it, expect } from 'vitest'
import { maskPII } from '.'

describe('23-4-1', () => {
    it('example-1', () => {
        const answer = maskPII('LeetCode@LeetCode.com')

        expect(answer).toBe('l*****e@leetcode.com')
    })

    it('example-2', () => {
        const answer = maskPII('AB@qq.com')

        expect(answer).toBe('a*****b@qq.com')
    })

    it('example-3', () => {
        const answer = maskPII('1(234)567-890')

        expect(answer).toBe('***-***-7890')
    })
})