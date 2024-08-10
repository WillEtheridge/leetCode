// Given an integer, convert it to a Roman numeral.

/**
 * @param {number} num
 * @return {string}
 */

// V1
var intToRomanV1 = function(num) {

    const numString = num.toString()

    const numerals = {
        1 : {
            "1" : "I",
            "2" : "II",
            "3" : "III",
            "4" : "IV",
            "5" : "V",
            "6" : "VI",
            "7" : "VII",
            "8" : "VIII",
            "9" : "IX"
        },
        2 : {
            "1" : "X",
            "2" : "XX",
            "3" : "XXX",
            "4" : "XL",
            "5" : "L",
            "6" : "LX",
            "7" : "LXX",
            "8" : "LXXX",
            "9" : "XC"
        },
        3 : {
            "1" : "C",
            "2" : "CC",
            "3" : "CCC",
            "4" : "CD",
            "5" : "D",
            "6" : "DC",
            "7" : "DCC",
            "8" : "DCCC",
            "9" : "CM"
        },
        4 : {
            "1" : "M",
            "2" : "MM",
            "3" : "MMM"
        }
    }


    let dp = 1;
    let returnString = ""

    for (let i = numString.length - 1; i >= 0 ; i--) {
        if (numString[i] !== "0") {
            returnString = numerals[dp][numString[i]] + returnString 
        }
        dp ++
    }
    return returnString
};

console.log(intToRoman(3099))

// V2

var intToRoman = function(num) {
    const ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    const tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    const hrns = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    const ths = ["", "M", "MM", "MMM"];
    return ths[Math.floor(num / 1000)] + 
    hrns[Math.floor((num % 1000) / 100)] + 
    tens[Math.floor((num % 100) / 10)] + 
    ones[num % 10];
};