#[allow(unused)]
fn add_two(a: i32) -> i32 {
    a + 2
}

#[test]
fn exploration() {
    assert_eq!(add_two(2), 4);
}
