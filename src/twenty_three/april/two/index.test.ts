import { describe, it, expect } from 'vitest'
import { minScoreTriangulation } from '.'

describe('23-4-2', () => {
    it('example-1', () => {
        const answer = minScoreTriangulation([1, 2, 3])

        expect(answer).toBe(6)
    })

    it('example-2', () => {
        const answer = minScoreTriangulation([3,7,4,5])

        expect(answer).toBe(144)
    })

    it('test-1', () => {
        const answer = minScoreTriangulation([1,3,1,4,1,5])

        expect(answer).toBe(13)
    })
})