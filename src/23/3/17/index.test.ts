import { describe, it, expect } from 'vitest'
import { answerQueries } from '.'

describe('23-3-17', () => {
    it('example-1', () => {
        const answer = answerQueries([4, 5, 2, 1], [3, 10, 21])
        expect(answer).toEqual([2, 3, 4])
    })
})