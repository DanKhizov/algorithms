let p = "ABCDEFGH";

function reverseString(p) {
    let length = p.length - 1;

    p = p.split("");

    for (let i = length; i > length / 2; i--) {
        let change = p[i];
        p[i] = p[length - i];
        p[length - i] = change;
    }

    return p.join("");
}

console.log(reverseString(p));
