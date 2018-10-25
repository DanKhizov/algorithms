var s1 = "abba";
var s2 = "a Bb  a";
var s3 = "bba";
var s4 = "aba";

function isPalindrom(s) {
    var regex = /\s/g;

    s = s.replace(regex, "").toLowerCase();

    for (var i = 0; i < s.length / 2; i++) {
        if (s[i] !== s[s.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrom(s1)); // true
console.log(isPalindrom(s2)); // true
console.log(isPalindrom(s3)); // false
console.log(isPalindrom(s4)); // true
