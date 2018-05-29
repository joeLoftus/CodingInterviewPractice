// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    //for each character starting at end put into new string
    var reversedString = "";
    for (let character of str){
        reversedString = character + reversedString;
    }
    return reversedString;
}

module.exports = reverse;
