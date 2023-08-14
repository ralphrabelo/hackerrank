function getMoneySpent(keyboards, drives, b) {

    if (!keyboards || !drives || !b) { return -1; }

    let bestBudget = -1;

    for (let i = 0 ; i < keyboards.length ; i++) {
        for (let j = 0 ; j < drives.length ; j++) {
            if ((keyboards[i] + drives[j] <= b) && (keyboards[i] + drives[j] > bestBudget)) {
                bestBudget = keyboards[i] + drives[j];
            }
        }
    }

    return bestBudget;

}

console.log(getMoneySpent([3,1], [5,2,8], 10));
console.log(getMoneySpent([4], [5], 5));