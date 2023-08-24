function pickingNumbers(array) {

    if (!array || array.length < 2) { return; }

    let sequenceAmount = -1;
    let currentAmmount = 0;
    let tempNum = -1;

    array.sort();

    for (let i = 1 ; (i < array.length) ; i++) { 
        currentAmmount = 0;
        tempNum = array[i-1];

        while (i < array.length && Math.abs(tempNum - array[i]) <= 1) {
            currentAmmount++;
            i++;
        }
        if (currentAmmount > 0) { currentAmmount++; };

        if (currentAmmount > sequenceAmount) {
            sequenceAmount = currentAmmount;
        }
    }
    return sequenceAmount;
}

console.log(pickingNumbers([1,1,2,2,4,4,5,5,5]));
console.log(pickingNumbers([4,6,5,3,3,1]));
console.log(pickingNumbers([1,2,2,3,1,2]));
console.log(pickingNumbers([98,3,99,1,97,2])); //2
console.log(pickingNumbers([4,97,5,97,97,4,97,4,97,97,97,97,4,4,5,5,97,5,97,99,4,97,5,97,97,97,5,5,97,4,5,97,97,5,97,4,97,5,4,4,97,5,5,5,4,97,97,4,97,5,4,4,97,97,97,5,5,97,4,97,97,5,4,97,97,4,97,97,97,5,4,4,97,4,4,97,5,97,97,97,97,4,97,5,97,5,4,97,4,5,97,97,5,97,5,97,5,97,97,97])); //2
