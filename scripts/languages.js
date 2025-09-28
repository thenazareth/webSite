const langDropdown = document.getElementById("languageDropdown");

window.languageTexts = {};
// Função para carregar os textos de tradução
async function setLanguage(lang) {
  try {
    const response = await fetch(`./${lang}.json`); // carrega pt.json, en.json etc.
    const texts = await response.json();

    window.languageTexts = texts;
    // Troca os textos no HTML (usando [""] porque as chaves têm hífen)
    Object.keys(texts).forEach(key => {
      const el = document.getElementById(key);
      if (el) el.textContent = texts[key];
    });

  } catch (error) {
    console.error("Erro ao carregar traduções:", error);
  }
}

// Detecta mudança no dropdown e troca a língua
langDropdown.addEventListener("change", (e) => {
  const selectedLang = e.target.value; // "pt" ou "en"
  setLanguage(selectedLang);
});

// Define o idioma inicial (pt como padrão)
setLanguage("pt");
