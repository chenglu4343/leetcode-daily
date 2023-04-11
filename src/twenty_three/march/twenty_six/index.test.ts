import { describe, it, expect } from 'vitest'
import { findSubarrays } from '.'

describe('23-3-26', () => {
    it('example-1', () => {
        const answer = findSubarrays([4, 2, 4])

        expect(answer).toBe(true)
    })
})