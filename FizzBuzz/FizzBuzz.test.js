const { FizzBuzz } = require("./FizzBuzz");

test('Should return Fizz', () => {
    const result = FizzBuzz(3);
    expect(result).toBe("Fizz");
})
test('Should return Fizz', () => {
    const result = FizzBuzz(9);
    expect(result).toBe("Fizz");
})
test('Should return Fizz', () => {
    const result = FizzBuzz(12);
    expect(result).toBe("Fizz");
})
test('Should return Buzz', () => {
    const result = FizzBuzz(5);
    expect(result).toBe("Buzz");
})
test('Should return Buzz', () => {
    const result = FizzBuzz(10);
    expect(result).toBe("Buzz");
})
test('Should return FizzBuzz', () => {
    const result = FizzBuzz(15);
    expect(result).toBe("FizzBuzz");
})
test('Should return FizzBuzz', () => {
    const result = FizzBuzz(30);
    expect(result).toBe("FizzBuzz");
})
test('Should return 1', () => {
    const result = FizzBuzz(1);
    expect(result).toBe(1);
})
test('Should return 2', () => {
    const result = FizzBuzz(2);
    expect(result).toBe(2);
})
test('Should return 4', () => {
    const result = FizzBuzz(4);
    expect(result).toBe(4);
})