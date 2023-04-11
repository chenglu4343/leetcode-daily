import { describe, it, expect } from 'vitest'
import { prevPermOpt1 } from '.'

describe('23-4-3', () => {
    it('example-1', () => {
        const answer = prevPermOpt1([3, 2, 1])

        expect(answer).toEqual([3, 1, 2])
    })
})