
function calcularMedia() {
  const notas = document.querySelectorAll(".nota");
  let soma = 0;
  notas.forEach(input => soma += parseFloat(input.value || 0));
  const media = soma / notas.length;
  document.getElementById("resultado").textContent = "Média: " + media.toFixed(2);
}
