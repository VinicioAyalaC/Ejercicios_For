
function ejecutar(numEjercicio){
    if(numEjercicio==1){
        listarNumeros();
    }else if(numEjercicio==2){
        listarNumerosReversa();
    }else if(numEjercicio==3){
        listarPares();
    }else if(numEjercicio==4){
        listarImpares();
    }
}

//opcion 1
function listarNumeros(){
    for(let i=0; i<3; i++){
        console.log(i);
    }
}

//opcion 2
function listarNumerosReversa(){
    for(let i=3; i>0; i--){
        console.log(i);
    }
}

// opcion 3
function listarPares(){
    for(let i=0; i<10; i+=2){
        console.log(i);
    }
}

//opcion 4
function listarImpares(){
    for(let i=1; i<=7; i++){
        if(i%2 != 0){
            console.log(i);
        }
    }
}