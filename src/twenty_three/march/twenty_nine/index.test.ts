import { describe, it, expect } from 'vitest'
import { countVowelStrings } from '.'

describe('23-3-29', () => {
    it('example-1', () => {
        const answer = countVowelStrings(1)

        expect(answer).toBe(5)
    })

    it('example-2', () => {
        const answer = countVowelStrings(2)

        expect(answer).toBe(15)
    })
})