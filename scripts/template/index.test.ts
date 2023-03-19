import { describe, it, expect } from 'vitest'
import { add } from '.'

describe('template', () => {
    it('example-1', () => {
        const answer = add(1, 2)

        expect(answer).toBe(3)
    })
})