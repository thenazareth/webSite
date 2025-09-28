document.addEventListener('DOMContentLoaded', function() {

    // Objetos de descrições em português e inglês
    const textosPT = {
        desc1: {
            titulo: "Dev Frontend - Sokrates.AI",
            texto: "Atuo como desenvolvedora frontend de uma plataforma web de estudos com agentes conversacionais. Minhas responsabilidades variam entre desenvolver a interface, implementar features, solucionar bugs no FlutterFlow e realizar testes de QA com Selenium. ",
            time: "10/2024 - Atualmente"
        },
        desc2: {
            titulo: "Game Designer - Estúdio Urutau",
            texto: "Estúdio Urutau é um estúdio de desenvolvimento de jogos formado por estudantes da UFRJ. Atualmente integro a equipe como Game Designer.",
            time: "10/2024 - Atualmente"
        },
        desc3: {
            titulo: "Game Designer/Dev - GDP UFRJ",
            texto: "Projeto de extensão da UFRJ, grupo de desenvolvimento de jogos. Na GDP, atuo principalmente como Game Designer, mas também como programadora com Unity Engine e C#.",
            time: "2/2025 - Atualmente"
        },
        desc4: {
            titulo: "Desenvolvedora - Lab 3D UFRJ",
            texto: "Atuei como desenvolvedora no Laboratório de Realidade Virtual da COPPE/UFRJ. Desenvolvi dois jogos sérios: Unseen, jogo com acessibilidade para pessoas não videntes e ReqJourney, uma ferramenta de apoio para as aulas de Requisitos de Software.",
            time: "4/2022 - 8/2024"
        },
        desc5: {
            titulo: "Dev Frontend - ProMOVE UFRJ",
            texto: "Projeto de Extensão da UFRJ focado em desenvolvimento de soluções mobile. Desenvolvemos o do aplicativo oficial dos restaurantes universitários em parceria com a PR2, utilizando typeScript e React Native.",
            time: "12/2022 - 3/2024"
        },
        desc6: {
            titulo: "Estagiária - LDSC",
            texto: "Estágio técnico obrigatório. Era responsável pelo auxílio técnico aos pesquisadores do laboratório LDSC da UFRJ, pela  manutenção de equipamentos eletrônicos e pela logística do laboratório de eletrônica.",
            time: "8/2019 - 1/2020"
        }
    };
    const textosEN = {
        desc1: {
            titulo: "Dev Frontend - Sokrates.AI",
            texto: "I work as a frontend developer for a web platform focused on studies with conversational agents. My responsibilities range from developing the interface, implementing features, fixing bugs in FlutterFlow, and conducting QA tests with Selenium.",
            time: "10/2024 - Present"
        },
        desc2: {
            titulo: "Game Designer - Urutau Studio",
            texto: "Urutau Studio is a game development studio formed by UFRJ students. I am currently part of the team as a Game Designer.",
            time: "10/2024 - Present"
        },
        desc3: {
            titulo: "Game Designer/Dev - GDP UFRJ",
            texto: "Extension project of UFRJ, game development group. At GDP, I mainly work as a Game Designer, but also as a programmer with Unity Engine and C#.",
            time: "2/2025 - Present"
        },
        desc4: {
            titulo: "Developer - Lab 3D UFRJ",
            texto: "I worked as a developer at the Virtual Reality Laboratory of COPPE/UFRJ. I developed two serious games: Unseen, a game with accessibility for visually impaired people, and ReqJourney, a support tool for Software Requirements classes.",
            time: "4/2022 - 8/2024"
        },
        desc5: {
            titulo: "Dev Frontend - ProMOVE UFRJ",
            texto: "Extension project of UFRJ focused on developing mobile solutions. We developed the official app for university restaurants in partnership with PR2, using TypeScript and React Native.",
            time: "12/2022 - 3/2024"
        },
        desc6: {
            titulo: "Intern - LDSC",
            texto: "Mandatory technical internship. I was responsible for providing technical support to researchers at the LDSC laboratory at UFRJ, maintaining electronic equipment, and managing the logistics of the electronics laboratory.",
            time: "8/2019 - 1/2020"
        }
    };

    // Variável para controlar o idioma atual
    let textos = textosPT; // começa em português

    const itens = document.querySelectorAll("#experience-section .list-item");
    const descricao = document.getElementById("information-text");

    // Função para trocar idioma das descrições
    function setExperienceLang(lang) {
        textos = (lang === "en") ? textosEN : textosPT;
    }

    // Integra com o dropdown de idioma
    const langDropdown = document.getElementById("languageDropdown");
    if (langDropdown) {
        langDropdown.addEventListener("change", (e) => {
            setExperienceLang(e.target.value);

            // Aguarda o JSON ser carregado antes de atualizar a descrição
            setTimeout(() => {
                const msgPadrao = window.languageTexts["job-description"] || "Clique em uma experiência para ver a descrição!";
                const tituloPadrao = window.languageTexts["job-title"] || "Cargo";

                descricao.innerHTML = `
                    <h3 class="sectionSubTitle">${tituloPadrao}</h3>
                    <p class="descriptionText">${msgPadrao}</p>
                `;
            }, 100); // pequeno delay para garantir que o JSON foi carregado
        });
    }

    itens.forEach(item => {
        item.addEventListener("click", () => {
            const id = item.dataset.desc;
            if (textos[id]) {
                descricao.innerHTML = `
                    <div class='desc-container'>
                        <div class='desc-header'>
                            <h3 class='sectionSubTitle'>${textos[id].titulo}</h3>
                        </div>
                        <div class='desc-text'>
                            <p class='descriptionText'>${textos[id].texto}</p>
                        </div>
                        <div class='desc-footer'>
                            <img src="./imagens/semester.svg" alt="tempo">
                            <p class="descriptionText">${textos[id].time}</p>
                        </div>
                    </div>
                `;
            } else {
                descricao.innerHTML = "<p>Informação não encontrada.</p>";
            }
        });
    });
});