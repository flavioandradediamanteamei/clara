// Lógica de seleção de investimento
let investimentoSelecionado = "";

const radios = document.querySelectorAll('input[name="investimento"]');
radios.forEach(radio => {
  radio.addEventListener('change', () => {
    investimentoSelecionado = radio.value;
  });
});

// Lógica do formulário
const form = document.getElementById("form");
form.addEventListener("submit", e => {
  e.preventDefault();

  const dados = new FormData(e.target);
  const info = Object.fromEntries(dados);

  if (!investimentoSelecionado) {
    alert("Por favor, selecione uma opção de investimento.");
    return;
  }

  const mensagem = `📥 *Novo cadastro recebido!*

👤 *Nome:* ${info.nome}
📱 *WhatsApp:* ${info.whatsapp}
📧 *Email:* ${info.email}
📍 *Cidade/Estado:* ${info.cidade}

💼 *Nível de Investimento:* ${investimentoSelecionado}

📊 *Experiência como líder:*
${info.experiencia || "(não informado)"}

💸 *Já ganhou quanto com vendas:* ${(info.ganho || []).toString().replace(/,/g, ", ") || "(não informado)"}`;

  const numeroDestino = "SEU_NUMERO_COM_DDD"; // exemplo: 5513991545873
  const url = `https://wa.me/${numeroDestino}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank");

  alert("Tudo certo! Vamos abrir o WhatsApp para enviar seus dados. 📲");
  e.target.reset();
});
