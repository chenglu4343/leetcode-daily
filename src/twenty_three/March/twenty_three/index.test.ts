import { describe, it, expect } from 'vitest'
import { checkArithmeticSubarrays } from '.'

describe('23-3-23', () => {
    it('example-1', () => {
        const answer = checkArithmeticSubarrays([4, 6, 5, 9, 3, 7], [0, 0, 2], [2, 3, 5])

        expect(answer).toEqual([true,false,true])
    })
})