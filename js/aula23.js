/* 
Comentário em bloco
 */

// Comentário em lnha

function funcao1(){
    alert("Olá Mundo!");
}
console.log("CodeBlue!")

var nome = "Newton"
console.log(nome);

// Variável com array
var objeto = {
    nome: "John",
    sobrenome: "Doe"
}
console.log(objeto);

// Exemplo com condicionais
function saudacao(){
    var hour = new Date().getHours();
    var greeting;
    if (hour < 12) {
        greeting = "Bom dia!";
    } if (hour > 18) {
        greeting = "Boa noite!";
    } else {
        greeting = "Boa tarde!"
    }
    document.getElementById("saudacao").innerHTML=greeting;
}




// Laço (Loop)
var text ="";
var i;
for(i = 0;i < 5; i++){
    text += "O numero é " + i + "<br>";
}
document.getElementById("numeros").innerHTML = text;