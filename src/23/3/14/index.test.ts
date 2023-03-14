import { describe, it, expect } from 'vitest'
import { restoreMatrix } from './index'

describe('23-3-14', () => {
    it('example-1', () => {
        const answer = restoreMatrix([3, 8], [4, 7])

        expect(answer).toEqual([
            [3, 0],
            [1, 7]
        ])
    })
})