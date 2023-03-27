import { describe, it, expect } from 'vitest'
import { countSubstrings } from '.'

describe('23-3-27', () => {
    it('example-1', () => {
        const answer = countSubstrings("aba", 'baba')

        expect(answer).toBe(6)
    })
})