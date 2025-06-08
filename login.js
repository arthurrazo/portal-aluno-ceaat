
function login() {
  const matricula = document.getElementById("matricula").value;
  const senha = document.getElementById("senha").value;
  if (matricula === "2007" && senha === "12345") {
    window.location.href = "dashboard.html";
  } else {
    alert("Dados inválidos.");
  }
}
