function catAndMouse(x, y, z) {
    
    if (!x || !y || !z) { return "Error: Bad input"; }

    if (Math.abs(x - z) === Math.abs(y - z)) {
        return "Mouse C";
    }
    else if (Math.abs(x - z) > Math.abs(y - z)) {
        return "Cat B";
    }
    else  {
        return "Cat A";
    }
}

console.log(catAndMouse(1, 2, 3));
console.log(catAndMouse(1, 3, 2));