
// s - chocolate
// d - soma
// m - qtd. de pedaços

function birthday(s, d, m) {

    if (!s || !d || !m || (s.length === 0)) {
        return 0;
    }

    let qtdPedacos = 0;
    let i = 0;
    let j = 0;
    let lengthChocolate = s.length;
    let lengthSlice = parseInt(m);
    let sizeSlice = parseInt(d);




    while (i < lengthChocolate) {

        let sumSegment = 0;

        
        j = i;
        
        //console.log((j + lengthSlice) < lengthChocolate); 
        //console.log(lengthChocolate);
        //console.log(j + lengthSlice < lengthChocolate);
        while ((j - i < lengthSlice) && (sumSegment < d)) { 
            sumSegment += s[j];
            //console.log("j:" + j + " valor " + s[j]);
            j++;
        } 
        
        //console.log("sumSegment:" + sumSegment);
       //console.log("lengthSegment:" + (j-i));

        if ((sumSegment === sizeSlice) && (j-i === lengthSlice)) {
            qtdPedacos++;
            //console.log("i:" + i);
            //console.log("lengthSegment:" + (j-i));
            //console.log("sumSegment:" + sumSegment);
            //console.log (i + 1 + lengthSlice < lengthChocolate);
            //console.log(lengthChocolate);
        }
        i++;

    }
    return qtdPedacos;
}

console.log(birthday([4], 4, 1));
console.log(birthday([1, 2, 1, 3, 2],3,2));
console.log(birthday([1, 1, 1, 1, 1, 1],3,2));
console.log(birthday([2, 5, 1, 3, 4, 4, 3, 5, 1, 1, 2, 1, 4, 1, 3, 3, 4, 2, 1], 18, 7));
//                    1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 

console.log(birthday([2, 2, 2, 1, 3, 2, 2, 3, 3, 1, 4, 1, 3, 2, 2, 1, 2, 2, 4, 2, 2, 3, 5, 3, 4, 3, 2, 1, 4, 5, 4], 10, 4));