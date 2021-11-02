

let usuario= prompt ("Ingrese su usuario");
let contra= prompt("Ingrese su contraseña");


let usuarioReg= "Maxi";
let usuarioReg2= "Pablis"; 
let contraReg= 1234; 

if (usuario==usuarioReg && contra==contraReg || usuario == usuarioReg2  && contra==contraReg) {
    console.log("Bienvenido " + usuario)
    alert("Bienvenido al sistema de notas de la Uni " + usuario)

    let valorA= parseFloat(prompt ("Ingrese nota primer parcial "));
    let valorB= parseFloat (prompt ("Ingrese nota segundo parcial "));
    let suma= valorA+valorB;  
    let promedio= suma / 2

    if (promedio  >=7){
    console.log("APROBADO con " + promedio)
        alert("APROBADO con " + promedio)
    }
    else if (promedio>=4){
        console.log("A FINAL con "  + promedio)
        alert("A FINAL con " + promedio)
    }

    else{
        console.log ("RECURSAR con " + promedio)
        alert ("RECURSAR con " + promedio)
    }
}
else {
    console.log("Usuario o contraseña incorrecto")
    alert("Usuario o contraseña incorrecto")
}





 