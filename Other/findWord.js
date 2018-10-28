let paragraph = "Bob hit a ball, the hit BALL flew far after it was hit";

function fillArray(paragraph) {
    let newWord = "",
        regexp = /,/,
        freq = {},
        max = 0;

    paragraph = paragraph.replace(regexp, "").toLowerCase();
    paragraph += " ";

    for (let i = 0; i < paragraph.length; i++) {
        if (paragraph[i] === " ") {
            if (freq[newWord]) {
                freq[newWord]++;
            } else {
                freq[newWord] = 1;
            }

            if (freq[newWord] > max) {
                max = freq[newWord];
                result = newWord;
            }

            newWord = "";
        } else {
            newWord += paragraph[i];
        }
    }

    return result;
}

console.log(fillArray(paragraph)); // hit
