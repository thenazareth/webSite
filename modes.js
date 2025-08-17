const toggleBtn = document.getElementById("darkModeToggle");
const toggleIcon = document.getElementById("darkModeIcon");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // troca o ícone
  if (document.body.classList.contains("dark-mode")) {
    toggleIcon.src = "./imagens/Moon.svg";
    toggleIcon.alt = "Modo claro";
    document.getElementById("languageIcon").src = "./imagens/GlobeDark.svg";
    document.getElementById("githubIcon").src = "./imagens/githubDark.svg";
    document.getElementById("githubIcon").src = "./imagens/githubDark.svg";
    document.getElementById("whatsappIcon").src = "./imagens/whatsappDark.svg";
    document.getElementById("telegramIcon").src = "./imagens/telegramDark.svg";
    document.getElementById("emailIcon").src = "./imagens/emailDark.svg";
    document.getElementById("accountIcon").src = "./imagens/AccountDark.svg";
    document.getElementById("linkdlnIcon").src = "./imagens/linkdlnDark.svg";

    document.querySelectorAll(".courseIcon").forEach(icon => {
      icon.src = "./imagens/courseDark.svg";
    });
    document.querySelectorAll(".semesterIcon").forEach(icon => {
      icon.src = "./imagens/semesterDark.svg";
    });
    document.querySelectorAll(".calendarIcon").forEach(icon => {
      icon.src = "./imagens/CalendarDark.svg";
    });
    document.querySelectorAll(".unitIcon").forEach(icon => {
      icon.src = "./imagens/unitDark.svg";
    });

  } else {
    toggleIcon.src = "./imagens/Sun.svg"; // caminho do ícone de sol
    toggleIcon.alt = "Modo escuro";
    document.getElementById("languageIcon").src = "./imagens/Globe.svg";
  }
});
