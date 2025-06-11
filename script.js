const motivos = [
  "Porque você me entende como ninguém.",
  "Porque seu sorriso ilumina meus dias.",
  "Porque até no silêncio a gente se entende.",
  "Porque você acredita em mim.",
  "Porque você é meu lar.",
  "Porque o mundo é mais leve ao seu lado.",
  "Porque amar você é inevitável.",
  "Porque você é minha melhor escolha todos os dias.",
  "Porque nossos momentos juntos são mágicos.",
  "Porque você me faz querer ser melhor."
];

function mostrarMotivo() {
  const div = document.getElementById('motivo');
  const motivo = motivos[Math.floor(Math.random() * motivos.length)];
  div.style.opacity = 0;
  setTimeout(() => {
    div.textContent = motivo;
    div.style.opacity = 1;
  }, 200);
}
