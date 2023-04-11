#[allow(unused)]
fn add_two(a: i32) -> i32 {
    a + 2
}

#[cfg(test)]
mod tests {
    use crate::simple_rs_test::add_two;

    #[test]
    fn exploration() {
        assert_eq!(add_two(2), 4);
    }
}

