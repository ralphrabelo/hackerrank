function kangaroo(x1, v1, x2, v2) {

    let posicao1 = x1;
    let posicao2 = x2;
    let controle = true;
    let contador = 0;

    while (controle) {
        
        posicao1 += v1;
        posicao2 += v2;  
        
        if ((v1 > v2  && posicao1 > posicao2) || (v2 > v1 && posicao2 > posicao1) || (v1 === v2) ) {
            console.log ('NO');
            return 'NO';
        }
        else if (posicao1 === posicao2) {
            console.log ('YES');
            return 'YES';
        }
        contador++;
    }   
    //console.log(contador);
}


kangaroo(43, 2, 70, 2);