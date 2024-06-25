/**
 * funcion de pago total con sueldo
 * Autor: Martin Stiben Narvaez
 * Miercoles 10 de Abril del 2024
*/
function pagTotal(pDias,pSalarioDia){
    let dias=pDias;
    let salarioDia=pSalarioDia;
    let salarioMin=1300000;
    let subTransporte=50000;
    let sueldo = salarioDia*dias;
    let salud,pension,arl,pagoTot,deducible;

        console.log("Este es el sueldo del empleado(a): "+sueldo);

    if(sueldo>salarioMin*2){
        sueldo=sueldo+subTransporte;
        console.log("Este es le sueldo con el subsidio de transporte "+sueldo);
    }else{
        sueldo=sueldo+0;
        console.log("El sueldo no es suficiente para recibir un subsidio de transporte");
    }
    salud = sueldo*0.12;
    console.log("El subsidio de salud es de: "+salud);
    pension = sueldo*0.16;
    console.log("La pension es de: "+pension);
    arl = sueldo*0.052;
    console.log("El subsidio de arl es: "+arl);
    if(sueldo>salarioMin*4){
        sueldo=sueldo*0.04;
    }else{
        sueldo=sueldo+0;
    }
    deducible=salud+pension+arl;
    pagoTot=sueldo-deducible;
    return "El pago total del empleado(a) es: "+pagoTot;
}

const pagTotalExp=function(pDias,pSalarioDia){
    let dias=pDias;
    let salarioDia=pSalarioDia;
    let salarioMin=1300000;
    let subTransporte=50000;
    let sueldo = salarioDia*dias;
    let salud,pension,arl,pagoTot,deducible;

        console.log("Este es el sueldo del empleado(a): "+sueldo);

    if(sueldo>salarioMin*2){
        sueldo=sueldo+subTransporte;
        console.log("Este es le sueldo con el subsidio de transporte "+sueldo);
    }else{
        sueldo=sueldo+0;
        console.log("El sueldo no es suficiente para recibir un subsidio de transporte");
    }
    salud = sueldo*0.12;
    console.log("El subsidio de salud es de: "+salud);
    pension = sueldo*0.16;
    console.log("La pension es de: "+pension);
    arl = sueldo*0.052;
    console.log("El subsidio de arl es: "+arl);
    if(sueldo>salarioMin*4){
        sueldo=sueldo*0.04;
    }else{
        sueldo=sueldo+0;
    }
    deducible=salud+pension+arl;
    pagoTot=sueldo-deducible;
    return "El pago total del empleado(a) es: "+pagoTot;
}