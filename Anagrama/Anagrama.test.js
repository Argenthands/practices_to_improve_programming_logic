const { isAnagram } = require("./Anagrama");

test('should return true if receive "Amor" and "Roma"', () => {
    expect(isAnagram("Amor", "Roma")).toBe(true);
})
test('should return true if receive the same letters', () => {
    expect(isAnagram("a", "a")).toBe(true);
    expect(isAnagram("A", "A")).toBe(true);
    expect(isAnagram("A", "a")).toBe(true);
    expect(isAnagram("a", "A")).toBe(true);
    expect(isAnagram("ab", "ab")).toBe(true);
    expect(isAnagram("ab", "ba")).toBe(true);
})
test('should return false if receive diferent letters', () => {
    expect(isAnagram("a", "b")).toBe(false);
    expect(isAnagram("b", "a")).toBe(false);
    expect(isAnagram("A", "B")).toBe(false);
    expect(isAnagram("B", "A")).toBe(false);
})