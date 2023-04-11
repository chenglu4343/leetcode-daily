import { describe, it, expect } from 'vitest'
import { bestTeamScore } from '.'

describe('23-3-22', () => {
    it('example-1', () => {
        const answer = bestTeamScore([1,3,5,10,15], [1,2,3,4,5])

        expect(answer).toBe(34)
    })

    it('example-2', () => {
        const answer = bestTeamScore([4,5,6,5], [2,1,2,1])

        expect(answer).toBe(16)
    })
})