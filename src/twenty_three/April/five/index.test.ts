import { describe, it, expect } from 'vitest'
import { commonFactors } from '.'

describe('23-4-5', () => {
    it('example-1', () => {
        const answer = commonFactors(12, 6)

        expect(answer).toBe(4)
    })
})