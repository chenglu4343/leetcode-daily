import { describe, it, expect } from 'vitest'
import { mergeStones } from '.'

describe.todo('23-4-4', () => {
    it('example-1', () => {
        const answer = mergeStones([3, 2, 4, 1], 2)

        expect(answer).toBe(20)
    })

    it('test-1', () => {
        const answer = mergeStones([6, 4, 4, 6], 2)

        expect(answer).toBe(40)
    })
})