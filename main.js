document.addEventListener('DOMContentLoaded', function () {
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');

    // Função para alternar a visibilidade do menu quando o botão do hambúrguer é clicado
    navbarToggle.addEventListener('click', function () {
        navbarMenu.classList.toggle('active');
    });

    const contatoForm = document.getElementById('contatoForm');

    if (contatoForm) {
        contatoForm.classList.add('separado-titulo');

        class FormHandler {
            constructor() {
                this.phoneNumber = "5519988934901"; // Número de telefone para o qual enviar a mensagem
                this.form = contatoForm; // Obtém o formulário de contato
                this.form.addEventListener("submit", this.handleFormSubmit.bind(this)); // Adiciona um ouvinte de evento para o envio do formulário
            }

            // Método para enviar a mensagem para o WhatsApp
            sendToWhatsApp(message) {
                const whatsappMessage = encodeURIComponent(message); // Codifica a mensagem para o formato de URL
                window.open("https://api.whatsapp.com/send?phone=" + this.phoneNumber + "&text=" + whatsappMessage); // Abre a URL no WhatsApp Web
            }

            // Método para lidar com o envio do formulário
            handleFormSubmit(event) {
                event.preventDefault(); // Impede o comportamento padrão de envio do formulário

                // Obtém os valores dos campos do formulário
                const name = document.getElementById("name").value;
                const email = document.getElementById("email").value;
                const phone = document.getElementById("tel").value;
                const message = document.getElementById("message").value;

                // Constrói a mensagem a ser enviada
                const whatsappMessage = `Nome: ${name}\nE-mail: ${email}\nTelefone: ${phone}\nA Mensagem: ${message}`;

                // Envia a mensagem para o WhatsApp
                this.sendToWhatsApp(whatsappMessage);
            }
        }

        // Inicializa o manipulador do formulário
        new FormHandler();
    }

    // Inicializa o scroll suave e fecha o menu
    initScrollSuave();
});

function initScrollSuave() {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
    const navbarMenu = document.querySelector('.navbar-menu');

    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute("href");
        const section = document.querySelector(href);

        section.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });

        // Fecha o menu ao clicar em um link
        navbarMenu.classList.remove('active');
    }

    linksInternos.forEach((link) => {
        link.addEventListener("click", scrollToSection);
    });
}
