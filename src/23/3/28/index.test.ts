import { describe, it, expect } from 'vitest'
import { shortestCommonSupersequence } from '.'

describe('23-3-28', () => {
    it('example-1', () => {
        const answer = shortestCommonSupersequence("abac", "cab")

        expect(answer.length).toBe(5)
    })

    it('test-1', () => {
        const answer = shortestCommonSupersequence("aa", "aa")

        expect(answer.length).toBe(2)
    })

    it('test-2', () => {
        const answer = shortestCommonSupersequence("bbbaaaba", "bbababbb")

        expect(answer.length).toBe("bbabaaababb".length)
    })
})