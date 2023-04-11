import { describe, it, expect } from 'vitest'
import { maximalNetworkRank } from '.'

describe('23-3-15', () => {
    it('example-1', () => {
        const answer = maximalNetworkRank(4, [[0, 1], [0, 3], [1, 2], [1, 3]])

        expect(answer).toBe(4)
    })

    it('test-1', () => {
        const answer = maximalNetworkRank(8, [[0,1],[1,2],[2,3],[2,4],[5,6],[5,7]])

        expect(answer).toBe(5)
    })
})
