/*
At a lemonade stand, each lemonade costs $5. 
Customers are standing in a queue to buy from you and order one at a time (in the order specified by bills). 
Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill. 
You must provide the correct change to each customer so that the net transaction is that the customer pays $5.

Note that you do not have any change in hand at first.

Given an integer array bills where bills[i] is the bill the ith customer pays, 
return true if you can provide every customer with the correct change, or false otherwise.

*/

/**
 * @param {number[]} bills
 * @return {boolean}
 */
function lemonadeChange(bills) {
    let fiveDollarBills = 0;
    let tenDollarBills = 0;

    for (let bill of bills) {
        if (bill === 5) {
            fiveDollarBills++;
        } else if (bill === 10) {
            if (fiveDollarBills > 0) {
                fiveDollarBills--;
                tenDollarBills++;
            } else {
                return false;
            }
        } else if (bill === 20) {
            if (tenDollarBills > 0 && fiveDollarBills > 0) {
                tenDollarBills--;
                fiveDollarBills--;
            } else if (fiveDollarBills >= 3) {
                fiveDollarBills -= 3;
            } else {
                return false;
            }
        }
    }

    return true;
}


console.log(lemonadeChange([5,5,10,10,20]))
