/*

You are given a string word containing lowercase English letters.

Telephone keypads have keys mapped with distinct collections of lowercase English letters, 
which can be used to form words by pushing them.
 For example, the key 2 is mapped with ["a","b","c"], 
 we need to push the key one time to type "a", two times to type "b", and three times to type "c" .

It is allowed to remap the keys numbered 2 to 9 to distinct collections of letters. 
The keys can be remapped to any amount of letters, but each letter must be mapped to exactly one key.
 You need to find the minimum number of times the keys will be pushed to type the string word.

Return the minimum number of pushes needed to type word after remapping the keys.


*/


/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function (word) {

    const freq = {};
    for (const char of word) {
        if (!freq[char]) freq[char] = 0;
        freq[char]++;
    }

    const freqArray = Object.entries(freq);

    freqArray.sort((a, b) => b[1] - a[1]);

    let presses = 0;

    let count = 1;

    for (let i = 0; i < freqArray.length; i ++) {
        let multiplier = 0;
        if (count < 9) {
            multiplier = 1;
        } else if ( count < 17) {
            multiplier = 2;
        } else if ( count < 25 ){
            multiplier = 3;
        } else {
            multiplier = 4;
        }
        presses += freqArray[i][1] * multiplier
        count ++
    }
    return presses;

};

console.log(minimumPushes("aabbccddeeffgghhiiiiii"))