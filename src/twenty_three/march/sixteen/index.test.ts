import { describe, it, expect } from 'vitest'
import { countSubarrays } from '.'

describe('23-3-16', () => {
    it('basic-1', () => {
        const answer = countSubarrays([3, 2, 1, 4, 5], 4)

        expect(answer).toBe(3)
    })
})