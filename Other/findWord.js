var paragraph = "Bob hit a ball, the hit BALL flew far after it was hit";

function fillArray(paragraph) {
    var newWord = "";
    var regexp = /,/;
    var words = [];

    paragraph = paragraph.replace(regexp, "").toLowerCase();
    paragraph += " ";

    for (var i = 0; i < paragraph.length; i++) {
        if (paragraph[i] === " ") {
            words.push(newWord);
            newWord = "";
        } else {
            newWord += paragraph[i];
        }
    }
    console.log(words);
}

fillArray(paragraph);
