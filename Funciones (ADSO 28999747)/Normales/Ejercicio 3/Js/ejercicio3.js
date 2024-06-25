
/* 
-- Ejercicio de Saludo
-- Nestor David Ruiz Cante 
-- 21/02/2024
*/

// parametros
function resultaYdivi(paraResutado1, paraResultado2, paranum1, paranum2){
    let num1 = paranum1;
    let num2 = paranum2;
    paraResutado1 = num1 * num2;
    paraResultado2 = num1 / num2;
    return ("La multiplicación en parámetros es " + paraResutado1 + "\n" + 
    "La división en parámetros es " + paraResultado2 + "\n" );
}

// expreseion 

const resultaYdiviExp=function(paraResutado1,paraResultado2,paranum1,paranum2){
    let num1 = paranum1;
    let num2 = paranum2;
    paraResutado1 = num1 * num2;
    paraResultado2 = num1 / num2;
    return ("La multiplicación en expresion es " + paraResutado1 + "\n" + 
    "La expresion en parámetros es " + paraResultado2 + "\n" );
}