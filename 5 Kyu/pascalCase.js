function toUnderscore(input) {
    let string = input.toString();
    let output = "";

    for (let i = 0; i < string.length; i++) {
        let char = string[i];

        if (char === char.toUpperCase() && /[A-Z]/.test(char) && i !== 0) {
            output += "_" + char.toLowerCase();
        }

        else if (/[0-9]/.test(char)) {
            output += char;
        }

        else {
            output += char.toLowerCase();
        }
    }
    return output;
}

console.log(toUnderscore(5));  // Output: 5
console.log(toUnderscore("TestController"));  // Output: test_controller
console.log(toUnderscore("Test5Controller"));  // Output: test5_controller
