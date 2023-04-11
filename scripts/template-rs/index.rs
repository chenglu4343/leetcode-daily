struct Solution;

impl Solution {
    pub fn add_two(a: i32) -> i32 {
        a + 2
    }
}

#[test]
fn test_is_robot_bounded() {
    let expected = 4;
    let actual = Solution::add_two(2);
    assert!(actual == expected, "Expected {:?}, but got {:?}", expected, actual);
}
