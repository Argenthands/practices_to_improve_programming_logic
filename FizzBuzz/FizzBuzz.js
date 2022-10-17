const FizzBuzz = (number) => {
    if (number % 3 === 0 && number % 5 === 0) {
        console.log("FizzBuzz");
        return "FizzBuzz";
    }
    else if (number % 3 === 0) {
        console.log("Fizz");
        return "Fizz";
    }
    else if (number % 5 === 0) {
        console.log("Buzz");
        return "Buzz";
    }
    console.log(number);
    return number;
};
module.exports = { FizzBuzz };