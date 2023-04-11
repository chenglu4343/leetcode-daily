import { describe, it, expect } from 'vitest'
import { arithmeticTriplets } from '.'

describe('23-3-31', () => {
    it('example-1', () => {
        const answer = arithmeticTriplets([0, 1, 4, 6, 7, 10], 3)

        expect(answer).toBe(2)
    })

    it('test-1', () => {
        const answer = arithmeticTriplets([4, 5, 6, 7, 8, 9], 2)

        expect(answer).toBe(2)
    })
})