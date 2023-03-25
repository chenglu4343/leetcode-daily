import { describe, it, expect } from 'vitest'
import { findLengthOfShortestSubarray } from '.'

describe('23-3-25', () => {
    it('example-1', () => {
        const answer = findLengthOfShortestSubarray([1,2,3,10,4,2,3,5])

        expect(answer).toBe(3)
    })

    it('test-1', () => {
        const answer = findLengthOfShortestSubarray([1,2,3])

        expect(answer).toBe(0)
    })

    it('test-2', () => {
        const answer = findLengthOfShortestSubarray([10,13,17,21,15,15,9,17,22,22,13])

        expect(answer).toBe(7)
    })
})