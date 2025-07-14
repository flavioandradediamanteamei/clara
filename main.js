document.getElementById("form").addEventListener("submit", e => {
  e.preventDefault();

  const dados = new FormData(e.target);
  const info = Object.fromEntries(dados);

  const opcao = info.opcao || "Não selecionado";
  const nome = info.nome || "";
  const whatsapp = info.whatsapp || "";
  const email = info.email || "";
  const cidade = info.cidade || "";
  const experiencia = info.experiencia || "";
  const ganhos = dados.getAll("ganho").join(", ") || "Não informado";

  const mensagem = `👋 Olá! Quero participar do Projeto Diamantes com o Robô Clara 💎

📌 *Nome:* ${nome}
📱 *WhatsApp:* ${whatsapp}
📧 *E-mail:* ${email}
📍 *Cidade/Estado:* ${cidade}

💼 *Opção de investimento:* ${opcao}

🧠 *Experiência anterior:* ${experiencia}
💸 *Ganhos anteriores:* ${ganhos}

Aguardo as instruções para começar! 🚀`;

  const numeroWhatsApp = "SEUNUMEROAQUI"; // Ex: 5513991545873
  const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, "_blank");
  e.target.reset();
});
