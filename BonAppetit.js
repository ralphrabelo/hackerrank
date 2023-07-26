

//bill: an array of integers representing the cost of each item ordered
//k: an integer representing the zero-based index of the item Anna doesn't eat
//b: the amount of money that Anna contributed to the bill

function bonAppetit(bill, k, b) {
    
    let totalBill = 0;
    let annasTotalBill = 0;
    let ammoutToReturnAnna = 0;

    for (let i = 0; i < bill.length; i++) {
        totalBill += bill[i];
    }
    annasTotalBill = (totalBill - bill[k]) / 2;

    if (annasTotalBill === b) {
        console.log("Bon Appetit");
    }
    else {
        ammoutToReturnAnna = b - annasTotalBill;
        console.log(ammoutToReturnAnna);
    }
}

console.log(bonAppetit([3, 10, 2, 9], 1, 12))