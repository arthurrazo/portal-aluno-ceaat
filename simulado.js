
function verificarResposta(pergunta, correta) {
  const selecionada = document.querySelector(`input[name="${pergunta}"]:checked`);
  if (!selecionada) return alert("Selecione uma resposta.");
  const resultado = selecionada.value === correta ? "Correta!" : "Incorreta.";
  document.getElementById("resultado-" + pergunta).textContent = resultado;
}
