import * as readline from "readline"

function isFibonacci(num: number): boolean {
  let a = 0,
    b = 1
  while (b < num) {
    let temp = a + b
    a = b
    b = temp
  }
  return b === num || num === 0
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question(
  "Digite um número para verificar se pertence à sequência de Fibonacci: ",
  (input) => {
    const numero = parseInt(input, 10)
    console.log(
      `O número ${numero} ${
        isFibonacci(numero) ? "pertence" : "não pertence"
      } à sequência de Fibonacci.`
    )
    rl.close()
  }
)

// CONSOLE:
// Digite um número para verificar se pertence à sequência de Fibonacci: 7
// O número 7 não pertence à sequência de Fibonacci.

// Digite um número para verificar se pertence à sequência de Fibonacci: 2
// O número 2 pertence à sequência de Fibonacci.