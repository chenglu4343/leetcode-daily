struct Solution;

impl Solution {
    pub fn add_two(a: i32) -> i32 {
        a + 2
    }
}

#[cfg(test)]
mod test {
    use super::*;

    #[test]
    fn first_test() {
        let expected = 4;
        let actual = Solution::add_two(2);
        assert!(
            actual == expected,
            "Expected {:?}, but got {:?}",
            expected,
            actual
        );
    }
}
