// ----- FUNÇÃO PARA SOMAR -----
function somar() {
  const valortotal = document.getElementById("valortotal");

  const valor1 = Number(document.getElementById("valor1").value) || 0;
  const valor2 = Number(document.getElementById("valor2").value) || 0;
  const valor3 = Number(document.getElementById("valor3").value) || 0;
  const valor4 = Number(document.getElementById("valor4").value) || 0;
  const valor5 = Number(document.getElementById("valor5").value) || 0;
  const valor6 = Number(document.getElementById("valor6").value) || 0;
  const valor7 = Number(document.getElementById("valor7").value) || 0;
  const valor8 = Number(document.getElementById("valor8").value) || 0;

  valortotal.value = valor1 + valor2 + valor3 + valor4 + valor5 + valor6 + valor7 + valor8;
}

// ----- FUNÇÃO PARA SALVAR TODOS OS RETÂNGULOS -----
function salvarRetangulos() {
  var retangulos = document.querySelectorAll(".retangulo");
  var todosDados = [];

  for (var i = 0; i < retangulos.length; i++) {
    var inputs = retangulos[i].querySelectorAll("input");
    var dados = [];
    for (var j = 0; j < inputs.length; j++) {
      dados.push(inputs[j].value);
    }
    todosDados.push(dados);
  }

  localStorage.setItem("retangulos", JSON.stringify(todosDados));
}

// ----- FUNÇÃO PARA RESTAURAR RETÂNGULOS -----
function restaurar() {
  var dadosSalvos = JSON.parse(localStorage.getItem("retangulos"));
  if (!dadosSalvos) return;

  // Remove todas as cópias, mantendo apenas a original
  var retangulosAtuais = document.querySelectorAll(".retangulo");
  for (var i = 1; i < retangulosAtuais.length; i++) {
    retangulosAtuais[i].remove();
  }

  

  // Cria as cópias restantes
  for (var i = 1; i < dadosSalvos.length; i++) {
    var copia = document.querySelector(".retangulo").cloneNode(true);
    var inputs = copia.querySelectorAll("input");
    for (var j = 0; j < inputs.length; j++) {
      inputs[j].value = dadosSalvos[i][j];
    }
    document.getElementById("copiar").insertAdjacentElement("afterend", copia);
  }
}

// ----- FUNÇÃO PARA CRIAR UMA CÓPIA -----
function copiar() {
  var original = document.querySelector(".retangulo");
  var copia = original.cloneNode(true);
  var botao = document.getElementById("copiar");
  botao.insertAdjacentElement("afterend", copia);

  // Salva após criar
  salvarRetangulos();
}

// ----- EVENTOS -----
window.onload = restaurar; // restaura ao abrir
document.getElementById("copiar").onclick = copiar; // botão copiar
document.addEventListener("input", salvarRetangulos); // salva ao digitar