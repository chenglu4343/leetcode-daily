import { describe, it, expect } from 'vitest'
import { maxWidthOfVerticalArea } from '.'

describe('23-3-30', () => {
    it('example-1', () => {
        const answer = maxWidthOfVerticalArea([[8,7],[9,9],[7,4],[9,7]])

        expect(answer).toBe(1)
    })

    it('test-1', () => {
        const answer = maxWidthOfVerticalArea([[2,4],[10,10],[6,8],[6,8],[6,10],[8,6],[5,3]])

        expect(answer).toBe(3)
    })
})