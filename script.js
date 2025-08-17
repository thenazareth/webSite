document.addEventListener('DOMContentLoaded', function() {
    // Remova o alert se não quiser
    // alert('JavaScript está funcionando!');

    const itens = document.querySelectorAll("#experience-section .list-item");
    const descricao = document.getElementById("information-text");

    const textos = {
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