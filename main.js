function comprar(op) {
  const links = {
    1: "https://link-cadastro-iniciante.com",
    2: "https://link-cadastro-intermediario.com",
    3: "https://link-cadastro-avancado.com",
    4: "https://link-cadastro-expert.com",
  };
  window.open(links[op], "_blank");
}

document.getElementById("form").addEventListener("submit", e => {
  e.preventDefault();

  const dados = new FormData(e.target);
  const info = Object.fromEntries(dados);
  console.log("Dados enviados:", info);

  alert("Dados recebidos com sucesso!\nEm breve nosso time entrará em contato.");
  
  e.target.reset();
});
