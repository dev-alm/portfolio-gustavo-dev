// Inicialize o EmailJS com sua chave pública
emailjs.init("BAupp9SBy6Ix81LkC");

// Função de envio do formulário
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };

    // Use seu Service ID e Template ID
    emailjs.send("service_md0183w", "template_tcxb90e", params).then(
      function (response) {
        alert("Email enviado com sucesso!", response.status, response.text);
      },
      function (error) {
        alert("Falha ao enviar o email.", error);
      }
    );
  });
