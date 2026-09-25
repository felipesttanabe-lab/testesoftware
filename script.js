// ===== TESTE DE UNIDADE: multiplicação =====
function multiplicar(a, b) { return a * b; }

function testarMultiplicacao() {
  console.assert(multiplicar(2, 3) === 6, "Teste 1 falhou!");
  console.assert(multiplicar(5, 0) === 0, "Teste 2 falhou!");
  console.assert(multiplicar(-2, 4) === -8, "Teste 3 falhou!");
  console.assert(multiplicar(10, 10) === 100, "Teste 4 falhou!");
  console.log("✅ Todos os testes de multiplicação passaram!");
}
testarMultiplicacao();


// ===== TESTE FUNCIONAL: validação do formulário =====
function validar() {
  const nome  = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const idade = document.getElementById("idade").value.trim();
  const msg   = document.getElementById("mensagem");

  msg.classList.remove("erro", "sucesso");

  if (nome === "") {
    msg.classList.add("erro");
    msg.textContent = "⚠️ O campo Nome é obrigatório!";
    return;
  }

  if (email === "") {
    msg.classList.add("erro");
    msg.textContent = "⚠️ O campo E-mail é obrigatório!";
    return;
  }

  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexEmail.test(email)) {
    msg.classList.add("erro");
    msg.textContent = "⚠️ Digite um e-mail válido!";
    return;
  }

  if (idade === "") {
    msg.classList.add("erro");
    msg.textContent = "⚠️ O campo Idade é obrigatório!";
    return;
  }

  if (isNaN(idade) || Number(idade) <= 0) {
    msg.classList.add("erro");
    msg.textContent = "⚠️ Digite uma idade válida!";
    return;
  }

  msg.classList.add("sucesso");
  msg.textContent = "✅ Formulário enviado com sucesso!";
}