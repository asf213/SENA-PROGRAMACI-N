// con parametros

function promedioDeNotasPorcentaje(panota1,panota2,panota3,){

    panota1=panota1;
    panota2=panota2;
    panota3=panota3;

    let porcentaje1= panota1*0.3;
    let porcentaje2= panota2*0.3;
    let porcentaje3= panota3*0.4;

    let sumaPor= porcentaje1+ porcentaje2 + porcentaje3;

    sumaPor = sumaPor.toFixed(2);

    return("La suma de notas con sus porcentajes son en parametros " + sumaPor);

}


// expresion

const promedioPorcenConstante = function(panota1,panota2,panota3,){
    
    panota1=panota1;
    panota2=panota2;
    panota3=panota3;

    let porcentaje1= panota1*0.3;
    let porcentaje2= panota2*0.3;
    let porcentaje3= panota3*0.4;

    let sumaPor= porcentaje1+ porcentaje2 + porcentaje3;

    sumaPor = sumaPor.toFixed(2);

    return("La suma de notas con sus porcentajes en expresion es  " + sumaPor);


    

}