function migratoryBirds(birds) {

    let qtdAtual = 0 ;
    let qtdMax = 0;
    let idMax = 0;
    let tempId = 0

    if (!birds){
        return 0;
    }

    birds.sort();

    for (let i = 0; i < birds.length; i++) {
    
        qtdAtual = 0;
        tempId = birds[i];
        for (let j = i; j < birds.length && tempId === birds[j]; j++) {

            if (birds[j] === tempId) {
                qtdAtual++;
            }    
        }

        //console.log("tempId:" + tempId + " qtdAtual:" + qtdAtual);

        if (qtdAtual > qtdMax) {
            qtdMax = qtdAtual;
            idMax = tempId;
        }
        else if ((qtdAtual === qtdMax) && (tempId < idMax)) {
            idMax = tempId;
        }

    }
    return idMax;
}

console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]));