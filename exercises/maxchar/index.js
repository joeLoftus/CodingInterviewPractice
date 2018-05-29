// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    var maxChar = '';
    var map = { '': 0};

    for (let character of str){
        if (map[character]){
            map[character] += 1;
        } else {
            map[character] = 1;
        }
        if (map[character] > map[maxChar])
            maxChar = character;
    }
    return maxChar;
}

module.exports = maxChar;
