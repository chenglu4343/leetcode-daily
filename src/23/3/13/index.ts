// https://leetcode.cn/problems/minimum-hours-of-training-to-win-a-competition/
export function minNumberOfHours(initialEnergy: number, initialExperience: number, energy: number[], experience: number[]): number {
    let totalHour = 0

    // 1.处理需要的精力
    const needTotalEnergy = energy.reduce((pre, curr) => {
        return pre + curr
    }, 0)
    if (needTotalEnergy >= initialEnergy) {
        totalHour += needTotalEnergy - initialEnergy + 1
    }

    debugger
    
    // 2.处理需要的经验
    let finalExperience = initialExperience
    for (let currentExperience of experience) {
        if (finalExperience <= currentExperience) {
            const extraExperience = currentExperience + 1 - finalExperience
            totalHour += extraExperience
            finalExperience += extraExperience
        }
        finalExperience += currentExperience
    }

    return totalHour
};

minNumberOfHours(5, 3, [1, 4], [2, 5])