//console.log([1,2,3,4,5,6,7].filter(value => value % 2 ===0)); 
//[1,2,3,4,5,6,7].filter()


/*
let a = 3;
let b = 7;

c = ++a + (--a * b++);

console.log(c);

*/


function a(x)
{
    let soma = 0;
    if (x <= 1 )
    {
        return 1;
    }
    soma = soma + x + a(x - 1) + a(x - 2);

    return soma;
}

console.log(a(3));


