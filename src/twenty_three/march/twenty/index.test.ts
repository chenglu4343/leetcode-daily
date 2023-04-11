import { describe, it, expect } from 'vitest'
import { numDupDigitsAtMostN } from '.'

describe('23-3-20', () => {
    it('example-1', () => {
        const answer = numDupDigitsAtMostN(20)

        expect(answer).toBe(1)
    })
})