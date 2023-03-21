import { describe, it, expect } from 'vitest'
import { convertTemperature } from '.'

describe('23-3-21', () => {
    it('example-1', () => {
        const answer = convertTemperature(36.50)

        expect(Math.abs(answer[0] - 309.65000) < 10 ** -5).toBe(true)
        expect(Math.abs(answer[1] - 97.70000) < 10 ** -5).toBe(true)
    })
})