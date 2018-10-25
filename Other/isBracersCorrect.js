var bracers1 = "()";
var bracers2 = "()[]{}";
var bracers3 = "(|";
var bracers4 = "(|)]";
var bracers5 = "{[]}";

function isCorrect(str) {
    var stack = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "[" || str[i] === "(" || str[i] === "{") {
            stack.push(str[i]);
        } else {
            if (stack.length === 0) {
                return false;
            }
            var top = stack.pop();
            if (top === "[" && str[i] !== "]") return false;
            if (top === "(" && str[i] !== ")") return false;
            if (top === "{" && str[i] !== "}") return false;
        }
    }
    return stack.length === 0 ? true : false;
}

console.log(isCorrect(bracers1));
console.log(isCorrect(bracers2));
console.log(isCorrect(bracers3));
console.log(isCorrect(bracers4));
console.log(isCorrect(bracers5));
