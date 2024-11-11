// Espera o DOM carregar completamente antes de executar o código
document.addEventListener("DOMContentLoaded", function() {
    // Seleciona o formulário e a mensagem de confirmação
    const form = document.getElementById("supportForm");
    const confirmationMessage = document.getElementById("confirmationMessage");
  
    // Adiciona o evento de "submit" ao formulário
    form.addEventListener("submit", function(event) {
      // Impede o envio do formulário real
      event.preventDefault();
  
      // Mostra a mensagem de confirmação
      confirmationMessage.style.display = "block";
  
      // Opcional: Limpa os campos do formulário após envio
      form.reset();
  
      // Caso queira esconder a mensagem após um tempo (ex: 5 segundos)
      setTimeout(function() {
        confirmationMessage.style.display = "none";
      }, 5000); // 5000ms = 5 segundos
    });
  });
  