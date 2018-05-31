// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    stringA.replace(/[^\w]/g,"").toLowerCase();
    stringB.replace(/[^\w]/g,"").toLowerCase();

    if (stringA.length !== stringB.length)
        return false;

    var mapA = {};
    var mapB = {};

    for (let char of stringA){
        if (mapA[char]){
            mapA[char]++;
        } else {
            mapA[char] = 1;
        }
    }

    for (let char of stringB){
        if (mapB[char]){
            mapB[char]++;
        } else {
            mapB[char] = 1;
        }
    }

    for (let key in mapA){
        if (mapA[key] !== mapB[key]){
            return false;
        }
    }
    return true
}

module.exports = anagrams;
