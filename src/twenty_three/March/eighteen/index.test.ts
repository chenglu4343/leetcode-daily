import { describe, it, expect } from 'vitest'
import { checkPalindromeFormation } from '.'

describe('23-3-18', () => {
    it('example-1', () => {
        const answer = checkPalindromeFormation('x', 'y')

        expect(answer).toBe(true)
    })

    it('test-1', () => {
        const answer = checkPalindromeFormation("ulacfd", "jizalu")

        expect(answer).toBe(true)
    })

    it('test-2', () => {
        const answer = checkPalindromeFormation("abdef", "fecab")
        expect(answer).toBe(true)
    })

    it('test-3',()=>{
        const answer = checkPalindromeFormation("askxrrnhyddrlmcgymtichivmwyjfpyqqxmiimxqqypfjywmvihcitmygcmlryczoygimgii", "iigmigyozcyfxgfzkwpvjuxbjphbbmwlhdcavhtjhbpccsxaaiyitfbzljvhjoytfqlqrohv")
        expect(answer).toBe(true)
    })
})