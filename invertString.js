function reverseString(str) {
  var reversed = ""
  for (var i = str.length - 1; i >= 0; i--) {
    reversed += str[i]
  }
  return reversed
}
var texto = "Hello, World!"
console.log("String original: ".concat(texto))
console.log("String invertida: ".concat(reverseString(texto)))

// CONSOLE: String original: Hello, World!
//          String invertida: !dlroW ,olleH
