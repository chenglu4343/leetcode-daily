import { describe, it, expect } from 'vitest'
import { findLexSmallestString } from '.'

describe('23-3-19', () => {
    it('example-1', () => {
        const answer = findLexSmallestString('5525', 9, 2)

        expect(answer).toBe('2050')
    })

    it('test-1', () => {
        const answer = findLexSmallestString('74', 5, 1)

        expect(answer).toBe('24')
    })
})