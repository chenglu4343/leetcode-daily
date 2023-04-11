// https://leetcode.cn/problems/robot-bounded-in-circle/

struct Solution;

impl Solution {
    // copilot写的
    pub fn is_robot_bounded(instructions: String) -> bool {
        let mut x = 0;
        let mut y = 0;
        /* 0 直行， 1 右转， 2 后退 3 左转 */
        let mut direction = 0;
        for instruction in instructions.chars() {
            match instruction {
                'G' => {
                    match direction {
                        0 => y += 1,
                        1 => x += 1,
                        2 => y -= 1,
                        3 => x -= 1,
                        _ => (),
                    }
                }
                'L' => direction = (direction + 3) % 4,
                'R' => direction = (direction + 1) % 4,
                _ => (),
            }
        }
        x == 0 && y == 0 || direction != 0
    }
}

#[test]
fn test_is_robot_bounded() {
    let expected = true;
    let actual = Solution::is_robot_bounded(String::from("GGLLGG"));
    assert!(actual == expected, "Expected {:?}, but got {:?}", expected, actual);
}
