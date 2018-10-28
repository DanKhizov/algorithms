let paragraph = "Bob hit a ball, the hit BALL flew far after it was hit";

function fillArray(paragraph) {
    let newWord = "";
    let regexp = /,/;
    let words = [];

    paragraph = paragraph.replace(regexp, "").toLowerCase();
    paragraph += " ";

    for (let i = 0; i < paragraph.length; i++) {
        if (paragraph[i] === " ") {
            words.push(newWord);
            newWord = "";
        } else {
            newWord += paragraph[i];
        }
    }

    let freq = {},
        max = 0;

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (freq[word]) {
            freq[word]++;
        } else {
            freq[word] = 1;
        }

        if (freq[word] > max) {
            max = freq[word];
            result = word;
        }
    }

    return result;
}

console.log(fillArray(paragraph)); // hit
