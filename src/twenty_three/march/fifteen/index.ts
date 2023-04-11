// https://leetcode.cn/problems/maximal-network-rank/

export function maximalNetworkRank(n: number, roads: number[][]): number {
    const graph: Record<number, undefined | Set<number>> = {}

    for (const [a, b] of roads) {
        !graph[a] && (graph[a] = new Set())
        !graph[b] && (graph[b] = new Set())

        graph[a].add(b)
        graph[b].add(a)
    }

    let answer = 0
    for (let i = 0; i < n; ++i) {
        for (let j = i + 1; j < n; ++j) {
            let curr = (graph[i]?.size ?? 0) + (graph[j]?.size ?? 0)

            if (graph[i]?.has(j)) {
                --curr
            }

            answer = Math.max(curr, answer)
        }
    }
    return answer
};