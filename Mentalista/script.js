var numeroSecreto = parseInt(Math.random() * 11)
var tentativas = 3

while (tentativas > 0) {
  var chute = parseInt(prompt("Digite um número entre 0 e 10"))
  
  if (!chute) {
    document.write("<h2>Ah, que pena!</h2>")
    break
  }

  if (numeroSecreto == chute) {
    document.write("<h2>Acertou!</h2>")
    break
  } else if (chute > numeroSecreto) {
    alert("O número secreto é menor.")
    tentativas = tentativas - 1
  } else if (chute < numeroSecreto) {
    alert("O número secreto é maior.")
    tentativas = tentativas - 1
  } 
} 

if (tentativas == 0){
  document.write("<h2>" + "Suas tentativas acabaram. O número secreto era " + numeroSecreto + "</h2>")
}