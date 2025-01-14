import * as fs from "fs"

interface Faturamento {
  dia: number
  valor: number
}

// Lê o arquivo JSON
const dados: Faturamento[] = JSON.parse(fs.readFileSync("dados.json", "utf-8"))

// Filtra os dias com faturamento maior que 0
const diasComFaturamento = dados.filter((d) => d.valor > 0)

// Calcula o menor e maior valor de faturamento
const menorFaturamento = Math.min(...diasComFaturamento.map((d) => d.valor))
const maiorFaturamento = Math.max(...diasComFaturamento.map((d) => d.valor))

// Calcula a média mensal de faturamento
const somaFaturamento = diasComFaturamento.reduce((acc, d) => acc + d.valor, 0)
const mediaMensal = somaFaturamento / diasComFaturamento.length

// Conta o número de dias com faturamento superior à média mensal
const diasAcimaDaMedia = diasComFaturamento.filter(
  (d) => d.valor > mediaMensal
).length

console.log(`Menor valor de faturamento: ${menorFaturamento}`)
console.log(`Maior valor de faturamento: ${maiorFaturamento}`)
console.log(
  `Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`
)

// CONSOLE: Menor valor de faturamento: 373.7838
//          Maior valor de faturamento: 48924.2448
//          Número de dias com faturamento acima da média: 10
