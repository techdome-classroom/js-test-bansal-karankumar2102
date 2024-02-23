function isValid(s) {
    const stack = [];
    const pairs = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (let char of s) {
        if (pairs[char]) {
            stack.push(char);
        } else {
            const openBracket = stack.pop();
            if (pairs[openBracket] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log(isValid("()")); 
console.log(isValid("()[]{}")); 
console.log(isValid("(]"));
console.log(isValid("([)]")); 
console.log(isValid("{[]}")); 
