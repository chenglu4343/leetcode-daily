import { describe, it, expect } from 'vitest'
import { baseNeg2 } from '.'

describe('23-4-6', () => {
    it('example-1', () => {
        const answer = baseNeg2(2)

        expect(answer).toBe("110")
    })

    it('example-2', () => {
        const answer = baseNeg2(4)

        expect(answer).toBe("100")
    })
})