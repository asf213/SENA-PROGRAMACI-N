//parametros
let notaTotal
let por1
let por2
let por3
let mostrar
let mostrarFinal

function promedioTresNotas(paNota1,paNota2,paNota3){
    paNota1=paNota1
    paNota2=paNota2
    paNota3=paNota3

    por1=paNota1*0.2
    por2=paNota2*0.35
    por3=paNota3*0.45

    notaTotal=por1+por2+por3

    if(notaTotal>4.5){
        mostrar="La nota es superior en parametros"
    }else{
        if(notaTotal<=4.5  ||  notaTotal> 3.5){
        mostrar="La nota es buena en parametros"
        }else{
            if(notaTotal<=3.5 || notaTotal>=3.0){
            mostrar="La nota es media en parametros"
            }else{
                mostrar="La nota es mala en parametros"
            }
        }
    }
   
    mostrarFinal="La nota 1 es: " + por1  + "\n" + 
    "la nota 2 es: " + por2 + "\n"  + 
    "La nota 3 es: " + por3 +  "\n"  +
    "La nota Final es:  " + notaTotal +  "\n"  +
    mostrar

    return(mostrarFinal)


   
}

//expresion