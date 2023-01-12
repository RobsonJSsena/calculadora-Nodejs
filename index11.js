           // Logíca de Programação Exercício 11, Minah Tabuada \\

 const readline = require("readline-sync")
 const readlineSync = require("readline-sync")
 
 console.log("-------------------------------");
 console.log("-------- Minha tabuada --------");
 console.log("-------------------------------");
 console.log("Digite Seu nome para iniciar o Teste")
 let nome = readline.question("Digite seu nome: ")
 
 let contador = 1
 let digitarNumero = 0 
 
 
 
 digitarNumero = Number(readline.question(`Digite um numero: `));
 console.log("-------------------------------");
 console.log(` A tabuada de ${digitarNumero} É:`)
 
 do {
    console.log(`${digitarNumero} X ${contador} = ${digitarNumero * contador}`)
    contador++
   } while (contador <= 10)

  
console.log(`Parabéns pelo conclusão do teste ${nome}`) 
console.log("------------- Fim ---------------");