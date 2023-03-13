import { describe, it, expect } from 'vitest'
import { minNumberOfHours } from '.'

describe('23-3-13', () => {
    it('baisc-1', () => {
        const answer = minNumberOfHours(5, 3, [1, 4, 3, 2], [2, 6, 3, 1])

        expect(answer).toBe(8)
    })

    it('baisc-2', () => {
        const answer = minNumberOfHours(2, 4, [1], [3])

        expect(answer).toBe(0)
    })

    it('test-1', () => {
        const answer = minNumberOfHours(5, 3, [1, 4], [2, 5])

        expect(answer).toBe(2)
    })
})