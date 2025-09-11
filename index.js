const traducoes = [
  { lang: "en", word: "Spring" },
  { lang: "fr", word: "Printemps" },
  { lang: "de", word: "Frühling" },
  { lang: "it", word: "Primavera" },
  { lang: "ja", word: "春" },       // Haru (Japonês)
  { lang: "zh", word: "春天" },    // Chūntiān (Chinês simplificado)
  { lang: "ru", word: "Весна" },   // Vesná (Russo)
  { lang: "ar", word: "الربيع" }   // Al-Rabi' (Árabe)
];

let index = 0;
const texto = document.getElementById("texto");

function trocarTexto() { // função para trocar de texto
  texto.style.opacity = 0;

  setTimeout(() => {
    texto.textContent = traducoes[index].word.toUpperCase();
    texto.style.opacity = 1;

    index = (index + 1) % traducoes.length; // volta ao início
  }, 500);
}

// ---

setInterval(trocarTexto, 2000); // troca a cada 2 segundos

document.querySelectorAll(".ret").forEach(botao => {
  botao.addEventListener("click", () => { // função para reagir ao clique
    const section = botao.closest(".nav");
    const pontos = section.querySelector(".pontos");
    const maisTexto = section.querySelector(".mais");

    if (maisTexto.style.display === "none" || maisTexto.style.display === "") { // se o texto nao estiver expandido . . .
      maisTexto.style.display = "inline";
      pontos.style.display = "none";
      botao.setAttribute("aria-label", "Recolher texto"); // altera o botão para "recolher"

      // ajusta a altura do nav de acordo com o conteúdo
      const alturaTotal = section.scrollHeight;
      section.style.height = alturaTotal + "px";

    } else {
      maisTexto.style.display = "none";
      pontos.style.display = "inline";
      botao.setAttribute("aria-label", "Expandir texto");

      // volta a altura inicial
      section.style.height = "300px";
    }
  });
});

// ---

